import brickDimensions from './brickDimensions';

export const colorModes = {
  rgb: '',
  lab: '',
  lrgb: '',
  hsl: '',
  lch: ''
};

export const colorHueModes = {
  rgb: '',
  "random hex": '',
  "random hsl": '',
  "select multiple": '',
}


export const initialState = {
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
  mortarColor: '#FFFFFF',
  saturation: .8,
  lightness: .75,
  colorHueMode: 'rgb',
  colorMode: 'rgb',
  trimHeight: true,
  trimWidth: true,
};
