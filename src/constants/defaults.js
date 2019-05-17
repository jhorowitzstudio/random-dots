// export const SET_BRICK_DIMENSIONS = 'SET_BRICK_DIMENSIONS';
// export const SET_CANVAS_DIMENSIONS = 'SET_CANVAS_DIMENSIONS';
// export const SET_LINE_THICKNESS = 'SET_LINE_THICKNESS';
// export const SAVE_IMAGE = 'SAVE_IMAGE';

import brickDimensions from './brickDimensions';

export default {
  brickHeight: brickDimensions.Standard.height,
  brickWidth: brickDimensions.Standard.width,
  brickMortar: brickDimensions.Standard.mortar,
  canvasHeight: 800,
  canvasWidth: 1000,
  lineThickness: 1,
  brickDimensionsPopup: false,
  canvasDimensionsPopup: false
};
