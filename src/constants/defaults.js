import brickDimensions from './brickDimensions';

export const colorModes = {
  rgb: '',
  lab: '',
  lrgb: '',
  hsl: '',
  lch: ''
};

export default {
  brickHeight: brickDimensions.Standard.height,
  brickWidth: brickDimensions.Standard.width,
  brickMortar: brickDimensions.Standard.mortar,
  canvasHeight: 800,
  canvasWidth: 1000,
  lineThickness: 1,
  brickDimensionsPopup: false,
  canvasDimensionsPopup: false,
  firstColor: '#000000',
  secondColor: '#FFFFFF',
  colorMode: 'rgb',
  trimHeight: true,
  trimWidth: true,
};
