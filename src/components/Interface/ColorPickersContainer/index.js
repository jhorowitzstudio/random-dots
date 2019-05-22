import React from 'react';
import { connect } from 'react-redux';
import ColorPicker from './ColorPicker';

const ColorPickersContainer = props => (
  <div>
    <h2>Colors</h2>
    <ColorPicker colorName="firstColor" {...props} />
    <ColorPicker colorName="secondColor" {...props} />
  </div>
);

const mapStateToProps = ({ firstColor, secondColor }) => ({
  firstColor,
  secondColor
});

export default connect(mapStateToProps)(ColorPickersContainer);
