export const trimCanvasHeight = (canvasDim, dotDim, mortar) =>
  canvasDim - (canvasDim % (dotDim + mortar)) - mortar;

export const trimCanvasWidth = (canvasDim, dotDim, mortar) =>
  canvasDim - (canvasDim % (dotDim + mortar)) - mortar;
