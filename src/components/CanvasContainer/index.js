import React from 'react';
import { connect } from 'react-redux';
import Canvas from './Canvas';

const ColorPickersContainer = props => (
  <div>
    <h2>Canvas</h2>
    <Canvas {...props} />
  </div>
);

const mapStateToProps = ({
  canvasHeight,
  canvasWidth,
  brickHeight,
  brickWidth,
  brickMortar,
  trimHeight,
  trimWidth
}) => ({
  canvasHeight,
  canvasWidth,
  brickHeight,
  brickWidth,
  brickMortar,
  trimHeight,
  trimWidth
});

export default connect(mapStateToProps)(ColorPickersContainer);
