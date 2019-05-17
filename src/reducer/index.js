import initialState from '../constants/defaults';
import {
  TOGGLE_BRICK_POPUP,
  TOGGLE_CANVAS_POPUP,
  SET_BRICK_DIMENSIONS,
  SET_CANVAS_DIMENSIONS,
  SET_LINE_THICKNESS,
  SAVE_IMAGE
} from '../actions';

export default function reducer(state = initialState, action) {
  console.log(state);
  switch (action.type) {
    case TOGGLE_BRICK_POPUP:
      return { ...state, brickDimensionsPopup: !state.brickDimensionsPopup };
    case TOGGLE_CANVAS_POPUP:
      return { ...state, canvasDimensionsPopup: !state.canvasDimensionsPopup };
    case SET_BRICK_DIMENSIONS:
      return {
        ...state,
        brickHeight: action.payload.height || state.brickHeight,
        brickWidth: action.payload.width || state.brickWidth,
        brickMortar: action.payload.mortar || state.brickMortar
      };
    case SET_CANVAS_DIMENSIONS:
      return {
        ...state,
        canvasHeight: action.payload.height || state.canvasHeight,
        canvasWidth: action.payload.width || state.canvasWidth
      };
    case SET_LINE_THICKNESS:
      return { ...state, lineThickness: action.payload.lineThickness };
    case SAVE_IMAGE:
      return state;
    default:
      return state;
  }
}
