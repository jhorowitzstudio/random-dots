import React from 'react';
import brickLayer from '../../../helpers/brickLayer';
import {trimCanvasWidth, trimCanvasHeight} from '../../../helpers/canvasSizeCorrector';

export default props => {
  const { brickHeight, brickWidth, brickMortar, trimHeight, trimWidth } = props;
  let { canvasHeight, canvasWidth } = props;
  if (trimHeight) canvasHeight = trimCanvasHeight(canvasHeight, brickHeight, brickMortar)
  if (trimWidth) canvasWidth = trimCanvasWidth(canvasWidth, brickWidth, brickMortar)
  return (
    <div>
      <svg
        width={canvasWidth}
        height={canvasHeight}
        preserveAspectRatio="xMinYMax meet"
        style={{ backgroundColor: 'red' }}
      >
        {brickLayer(
          canvasHeight,
          canvasWidth,
          brickHeight,
          brickWidth,
          brickMortar
        ).map(({ x, y, fill }) => (
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
