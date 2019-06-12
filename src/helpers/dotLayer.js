import chroma from 'chroma-js';

export default function dotLayer({
  canvasHeight,
  canvasWidth,
  dotHeight,
  dotWidth,
  dotMortar,
  firstColor,
  secondColor,
  colorArray,
  saturation,
  lightness,
  colorHueMode,
  colorMode
}) {
  const coordinates = [];
  const xStart = -dotWidth / 2;
  const yIncrement = Math.round(dotHeight + dotMortar);
  const xIncrement = Math.round(dotWidth + dotMortar);
  const yStartMaximum = canvasHeight - dotHeight;
  const xStartMaximum = canvasWidth;
  let scale;
  switch (colorHueMode) {
    case 'two-point scale':
      scale = chroma.scale([firstColor, secondColor]).mode(colorMode);
      break;
    case 'totally-random RGB':
      scale = () => chroma.random();
      break;
    case 'controlled-random HSL':
      scale = random => {
        const hue = Math.floor(random * 360);
        return chroma.hsl(hue, saturation, lightness);
      };
      break;
    case 'choose color from multiple':
      scale = () => {
        if (colorArray === undefined || colorArray.length === 0) return null
        return colorArray[Math.floor(Math.random() * colorArray.length)];
      };
      break;
    default:
      break;
  }

  let i = 0;
  for (let y = 0; y <= yStartMaximum; y += yIncrement) {
    for (let x = xStart; x <= xStartMaximum; x += xIncrement) {
      const fill = scale(Math.random());
      if (i % 2 !== 0) {
        coordinates.push({ x: x + dotWidth / 2, y, fill });
      } else {
        coordinates.push({ x, y, fill });
      }
    }
    i += 1;
  }
  return coordinates;
}
