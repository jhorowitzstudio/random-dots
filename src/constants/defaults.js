
export const colorModes = {
  rgb: '',
  lab: '',
  lrgb: '',
  hsl: '',
  lch: ''
};

export const colorHueModes = {
  'two-point scale': '',
  'totally-random RGB': '',
  'controlled-random HSL': '',
  'choose color from multiple': ''
};

export const initialState = {
  dotRadiusMin: 1,
  dotRadiusMax: 10,
  numberOfDots: 500,
  canvasHeight: 800,
  canvasWidth: 1000,
  lineThickness: 1,
  dotDimensionsPopup: false,
  canvasDimensionsPopup: false,
  firstColor: '#000000',
  secondColor: '#FFFFFF',
  colorArray: [],
  saturation: 0.8,
  lightness: 0.75,
  colorHueMode: 'two-point scale',
  colorMode: 'rgb',
};
