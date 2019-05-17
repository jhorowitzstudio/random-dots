import React, { Component } from 'react';
import { connect } from 'react-redux';
import BrickSelector from './BrickSelector';

const BrickDimensions = props => <BrickSelector {...props} />;

const mapStateToProps = ({
  brickHeight,
  brickWidth,
  brickMortar,
  brickDimensionsPopup
}) => ({
  brickHeight,
  brickWidth,
  brickMortar,
  brickDimensionsPopup
});

export default connect(mapStateToProps)(BrickDimensions);
