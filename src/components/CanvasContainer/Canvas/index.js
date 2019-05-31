import React, { Component } from 'react';
import xmlserializer from 'xmlserializer';
import brickLayer from '../../../helpers/brickLayer';
import {
  trimCanvasWidth,
  trimCanvasHeight
} from '../../../helpers/canvasSizeCorrector';

export default class extends Component {
  save = () => {
    const svg = document.getElementById('brickwall');
    const serializer = new XMLSerializer();
    const svgBlob = new Blob([serializer.serializeToString(svg)], {
      type: 'image/svg+xml'
    });
    const url = URL.createObjectURL(svgBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'brickwall.svg';
    link.innerHTML = 'Click to download';
    link.onclick = () => {
      document.getElementById('download-div').innerHTML = '';
    };
    document.getElementById('download-div').innerHTML = '';
    document.getElementById('download-div').appendChild(link);
  };

  render() {
    const {
      brickHeight,
      brickWidth,
      brickMortar,
      trimHeight,
      trimWidth,
      firstColor,
      secondColor,
      colorMode
    } = this.props;
    let { canvasHeight, canvasWidth } = this.props;
    if (trimHeight)
      canvasHeight = trimCanvasHeight(canvasHeight, brickHeight, brickMortar);
    if (trimWidth)
      canvasWidth = trimCanvasWidth(canvasWidth, brickWidth, brickMortar);
    return (
      <div>
        <button type="submit" onClick={this.save}>
          Generate Download Link
        </button>
        <span id="download-div" />
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
  }
}
