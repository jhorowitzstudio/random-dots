export const TOGGLE_BRICK_POPUP = 'TOGGLE_BRICK_POPUP';
export const TOGGLE_CANVAS_POPUP = 'TOGGLE_CANVAS_POPUP';
export const SET_BRICK_DIMENSIONS = 'SET_BRICK_DIMENSIONS';
export const SET_CANVAS_DIMENSIONS = 'SET_CANVAS_DIMENSIONS';
export const SET_LINE_THICKNESS = 'SET_LINE_THICKNESS';
export const SAVE_IMAGE = 'SAVE_IMAGE';

export function toggleBrickDimensionsPopup() {
  return {
    type: TOGGLE_BRICK_POPUP
  };
}

export function toggleCanvasDimensionsPopup() {
  return {
    type: TOGGLE_CANVAS_POPUP
  };
}

export function setBrickDimensions(dimensions) {
  return {
    type: SET_BRICK_DIMENSIONS,
    payload: dimensions
  };
}

export function setCanvasDimensions(dimensions) {
  return {
    type: SET_CANVAS_DIMENSIONS,
    payload: dimensions
  };
}

export function setLineThickness(thickness) {
  return {
    type: SET_LINE_THICKNESS,
    payload: thickness
  };
}

export function saveImage() {
  return { type: SAVE_IMAGE };
}
