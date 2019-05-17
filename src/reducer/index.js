import initialState from '../constants/defaults';
import {
  SET_BRICK_DIMENSIONS,
  SET_CANVAS_DIMENSIONS,
  SET_LINE_THICKNESS,
  SAVE_IMAGE
} from '../actions';

export default function reducer(state = initialState, action) {
  console.log(state);
  switch (action.type) {
    case SET_BRICK_DIMENSIONS:
      return state;
    case SET_CANVAS_DIMENSIONS:
      return state;
    case SET_LINE_THICKNESS:
      return state;
    case SAVE_IMAGE:
      return state;
    default:
      return state;
  }
}
