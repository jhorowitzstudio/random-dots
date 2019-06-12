
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
  dotRadiusMin: 3,
  dotRadiusMax: 8,
  numberOfDots: 1000,
  canvasHeight: 1000,
  canvasWidth: 800,
  lineThickness: 1,
  dotDimensionsPopup: false,
  canvasDimensionsPopup: false,
  firstColor: '#000000',
  secondColor: '#FFFFFF',
  colorArray: [],
  saturation: 0.8,
  lightness: 0.75,
  colorHueMode: 'totally-random RGB',
  colorMode: 'rgb',
};
