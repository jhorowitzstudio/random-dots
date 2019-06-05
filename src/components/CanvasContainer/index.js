import React from 'react';
import xmlserializer from 'xmlserializer';
import { connect } from 'react-redux';
import Canvas from './Canvas';

function save() {
  const svg = document.getElementById('brickwall');
  // eslint-disable-next-line no-undef
  const serializer = new XMLSerializer() || xmlserializer;
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
  brickHeight,
  brickWidth,
  brickMortar,
  trimHeight,
  trimWidth,
  firstColor,
  mortarColor,
  saturation,
  lightness,
  secondColor,
  colorHueMode,
  colorMode
}) => ({
  canvasHeight,
  canvasWidth,
  brickHeight,
  brickWidth,
  brickMortar,
  trimHeight,
  trimWidth,
  firstColor,
  secondColor,
  mortarColor,
  saturation,
  lightness,
  colorHueMode,
  colorMode
});

export default connect(mapStateToProps)(ColorPickersContainer);
