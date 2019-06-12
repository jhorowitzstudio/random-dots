import React from 'react';
import { connect } from 'react-redux';
import CanvasForm from './CanvasForm';

const CanvasDimensions = props => <CanvasForm {...props} />;

const mapStateToProps = ({
  canvasHeight,
  canvasWidth,
}) => ({
  canvasHeight,
  canvasWidth,
});

export default connect(mapStateToProps)(CanvasDimensions);
