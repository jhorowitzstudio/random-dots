import React from 'react';
import { connect } from 'react-redux';
import BrickSelectorAndForm from './BrickSelectorAndForm';

const BrickDimensions = props => <BrickSelectorAndForm {...props} />;

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
