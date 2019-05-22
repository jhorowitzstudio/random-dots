export const trimCanvasHeight = (canvasDim, brickDim, mortar) =>
  canvasDim - (canvasDim % (brickDim + mortar)) - mortar;

export const trimCanvasWidth = (canvasDim, brickDim, mortar) =>
  canvasDim - (canvasDim % (brickDim + mortar)) - mortar;
