// export const SET_BRICK_DIMENSIONS = 'SET_BRICK_DIMENSIONS';
// export const SET_CANVAS_DIMENSIONS = 'SET_CANVAS_DIMENSIONS';
// export const SET_LINE_THICKNESS = 'SET_LINE_THICKNESS';
// export const SAVE_IMAGE = 'SAVE_IMAGE';

import brickDimensions from './brickDimensions';

export default {
  brickHeight: brickDimensions.standard.height,
  brickWidth: brickDimensions.standard.width,
  brickMortar: brickDimensions.standard.mortar,
  canvasHeight: 800,
  canvasWidth: 1000,
  lineThickness: 1
};
