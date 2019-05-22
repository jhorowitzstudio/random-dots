import chroma from 'chroma-js';

export default function brickLayer({
  canvasHeight,
  canvasWidth,
  brickHeight,
  brickWidth,
  brickMortar,
  firstColor,
  secondColor,
  colorMode
}) {
  const coordinates = [];
  const xStart = -brickWidth / 2;
  const yIncrement = brickHeight + brickMortar;
  const xIncrement = brickWidth + brickMortar;
  const yStartMaximum = canvasHeight - brickHeight;
  const xStartMaximum = canvasWidth;
  const scale = chroma.scale([firstColor, secondColor]).mode(colorMode);

  for (let y = 0; y <= yStartMaximum; y += yIncrement) {
    for (let x = xStart; x <= xStartMaximum; x += xIncrement) {
      const fill = scale(Math.random());
      if (y % 2 !== 0) {
        coordinates.push({ x: x + brickWidth / 2, y, fill });
      } else {
        coordinates.push({ x, y, fill });
      }
    }
  }
  return coordinates;
}
