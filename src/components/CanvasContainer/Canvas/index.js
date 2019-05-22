import React from 'react';
import brickLayer from '../../../helpers/brickLayer';
import {
  trimCanvasWidth,
  trimCanvasHeight
} from '../../../helpers/canvasSizeCorrector';

export default props => {
  const {
    brickHeight,
    brickWidth,
    brickMortar,
    trimHeight,
    trimWidth,
    firstColor,
    secondColor,
    colorMode
  } = props;
  let { canvasHeight, canvasWidth } = props;
  if (trimHeight)
    canvasHeight = trimCanvasHeight(canvasHeight, brickHeight, brickMortar);
  if (trimWidth)
    canvasWidth = trimCanvasWidth(canvasWidth, brickWidth, brickMortar);
  return (
    <div>
      <div id="stats">
        <p>
          Actual Canvas Dimensions: {canvasWidth} x {canvasHeight} height
        </p>
        <p>
          Brick Dimensions: {brickWidth} x {brickHeight} height, with a{' '}
          {brickMortar} mortar
        </p>
      </div>
      <svg
        id="brickwall"
        width={canvasWidth}
        height={canvasHeight}
        preserveAspectRatio="xMinYMax meet"
      >
        {brickLayer({
          canvasHeight,
          canvasWidth,
          brickHeight,
          brickWidth,
          brickMortar,
          firstColor,
          secondColor,
          colorMode
        }).map(({ x, y, fill }) => (
          <rect
            className="brick"
            width={brickWidth}
            height={brickHeight}
            key={`${x}${y}`}
            x={x}
            y={y}
            fill={fill}
          />
        ))}
      </svg>
    </div>
  );
};
