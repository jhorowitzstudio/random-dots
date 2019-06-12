import chroma from 'chroma-js';

export default function dotLayer({
  canvasHeight,
  canvasWidth,
  numberOfDots,
  firstColor,
  secondColor,
  colorArray,
  saturation,
  lightness,
  colorHueMode,
  colorMode
}) {
  const coordinates = [];
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
        if (colorArray === undefined || colorArray.length === 0) return null;
        return colorArray[Math.floor(Math.random() * colorArray.length)];
      };
      break;
    default:
      break;
  }
  for (let i = 0; i < numberOfDots; i += 1) {
    const x = Math.floor(Math.random() * canvasWidth);
    const y = Math.floor(Math.random() * canvasHeight);
    const fill = scale(Math.random());
    const key = i;
    coordinates.push({ x, y, key, fill });
  }
  return coordinates;
}
