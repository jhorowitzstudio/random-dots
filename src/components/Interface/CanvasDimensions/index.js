import React from 'react';
import { connect } from 'react-redux';
import CanvasForm from './CanvasForm';

const CanvasDimensions = props => <CanvasForm {...props} />;

const mapStateToProps = ({
  canvasHeight,
  canvasWidth,
  trimHeight,
  trimWidth
}) => ({
  canvasHeight,
  canvasWidth,
  trimHeight,
  trimWidth
});

export default connect(mapStateToProps)(CanvasDimensions);
