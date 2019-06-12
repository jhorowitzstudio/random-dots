/* eslint-disable react/no-unused-state */
import React, { Component } from 'react';
import dotLayer from '../../../helpers/dotLayer';
import {
  trimCanvasWidth,
  trimCanvasHeight
} from '../../../helpers/canvasSizeCorrector';

export default class extends Component {
  render() {
    const {
      dotHeight,
      dotWidth,
      dotMortar,
      trimHeight,
      trimWidth,
      firstColor,
      saturation,
      colorArray,
      lightness,
      secondColor,
      colorMode,
      colorHueMode,
      mortarColor,
      save
    } = this.props;
    let { canvasHeight, canvasWidth } = this.props;
    if (trimHeight)
      canvasHeight = trimCanvasHeight(canvasHeight, dotHeight, dotMortar);
    if (trimWidth)
      canvasWidth = trimCanvasWidth(canvasWidth, dotWidth, dotMortar);
    return (
      <div>
        <button type="submit" onClick={save}>
          Generate Download Link
        </button>
        <span id="download-div" />
        <div id="stats">
          <p>
            Actual Canvas Dimensions: {canvasWidth} x {canvasHeight} height
          </p>
          <p>
            Dot Dimensions: {dotWidth} x {dotHeight} height, with a{' '}
            {dotMortar} mortar
          </p>
            <button style={{marginBottom:30}} type="submit" onClick={()=> this.setState({ _: Math.random() })}>Refresh</button>
        </div>
        <svg
          id="dotwall"
          width={canvasWidth}
          style={{backgroundColor: mortarColor}}
          height={canvasHeight}
          preserveAspectRatio="xMinYMax meet"
        >
          {dotLayer({
            canvasHeight,
            canvasWidth,
            dotHeight,
            dotWidth,
            dotMortar,
            firstColor,
            secondColor,
            colorArray,
            saturation,
            lightness,
            colorHueMode,
            colorMode
          }).map(({ x, y, fill }) => (
            <rect
              className="dot"
              width={dotWidth}
              height={dotHeight}
              key={`${x}+${y}`}
              x={x}
              y={y}
              fill={fill}
            />
          ))}
        </svg>
      </div>
    );
  }
}
