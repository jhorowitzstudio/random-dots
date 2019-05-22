import initialState from '../constants/defaults';
import {
  TOGGLE_BRICK_POPUP,
  TOGGLE_CANVAS_POPUP,
  SET_BRICK_DIMENSIONS,
  SET_CANVAS_DIMENSIONS,
  TOGGLE_TRIM,
  SET_COLOR,
  SET_COLOR_MODE,
  SAVE_IMAGE
} from '../actions';

export default function reducer(state = initialState, action) {
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
    case TOGGLE_TRIM:
      return { ...state, [action.payload]: !state[action.payload] };
    case SET_COLOR:
      return { ...state, [action.payload.name]: action.payload.color };
    case SET_COLOR_MODE:
      return { ...state, colorMode: action.payload };
    case SAVE_IMAGE:
      return state;
    default:
      return state;
  }
}
