/* eslint-disable react/no-unused-state */
import React, { Component } from 'react';
import dotLayer from '../../../helpers/dotLayer';

export default class extends Component {
  render() {
    const {
      dotRadiusMax,
      dotRadiusMin,
      numberOfDots,
      firstColor,
      saturation,
      colorArray,
      lightness,
      secondColor,
      colorMode,
      canvasHeight,
      canvasWidth,
      colorHueMode,
      save
    } = this.props;
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
            Dot Radius Range: {dotRadiusMin} – {dotRadiusMax} px
          </p>
          <button
            id="refresh"
            style={{ marginBottom: 30 }}
            type="submit"
            onClick={() => this.setState({ _: Math.random() })}
          >
            Refresh
          </button>
        </div>
        <svg
          id="dotwall"
          width={canvasWidth}
          height={canvasHeight}
          preserveAspectRatio="xMinYMax meet"
        >
          {dotLayer({
            canvasHeight,
            numberOfDots,
            canvasWidth,
            firstColor,
            secondColor,
            colorArray,
            saturation,
            lightness,
            colorHueMode,
            colorMode
          }).map(({ x, y, key, fill }) => (
            <circle
              className="dot"
              r={
                Math.floor(Math.random() * (dotRadiusMax + 1 - dotRadiusMin)) +
                dotRadiusMin
              }
              key={key}
              cx={x}
              cy={y}
              fill={fill}
            />
          ))}
        </svg>
      </div>
    );
  }
}
