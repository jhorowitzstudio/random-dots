import React from 'react';
import xmlserializer from 'xmlserializer';
import { connect } from 'react-redux';
import Canvas from './Canvas';

function save() {
  const svg = document.getElementById('dotwall');
  // eslint-disable-next-line no-undef
  const serializer = new XMLSerializer() || xmlserializer;
  const svgBlob = new Blob([serializer.serializeToString(svg)], {
    type: 'image/svg+xml'
  });
  const url = URL.createObjectURL(svgBlob);
  const link = document.createElement('a');
  link.href = url;
  link.download = 'dotwall.svg';
  link.innerHTML = 'Click to download';
  function fn() {
    document.getElementById('download-div').innerHTML = '';
  }
  document.body.addEventListener('click', fn, true);
  document.getElementById('download-div').innerHTML = '';
  document.getElementById('download-div').appendChild(link);
}

const ColorPickersContainer = props => (
  <div>
    <h2>Canvas</h2>
    <Canvas {...props} save={save} />
  </div>
);

const mapStateToProps = ({
  canvasHeight,
  canvasWidth,
  dotRadiusMax,
  numberOfDots,
  dotRadiusMin,
  firstColor,
  secondColor,
  backgroundColor,
  transparentBackground,
  saturation,
  colorArray,
  lightness,
  colorHueMode,
  colorMode
}) => ({
  canvasHeight,
  canvasWidth,
  numberOfDots,
  dotRadiusMax,
  dotRadiusMin,
  firstColor,
  secondColor,
  backgroundColor,
  transparentBackground,
  colorArray,
  saturation,
  lightness,
  colorHueMode,
  colorMode
});

export default connect(mapStateToProps)(ColorPickersContainer);
