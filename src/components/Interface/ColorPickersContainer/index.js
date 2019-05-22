import React from 'react';
import { connect } from 'react-redux';
import ColorPicker from './ColorPicker';
import ColorModeSelector from './ColorModeSelector';

const ColorPickersContainer = props => (
  <div>
    <h2>Colors</h2>
    <ColorModeSelector {...props} />
    <div style={{ display: 'flex' }}>
      <ColorPicker colorName="firstColor" {...props} />
      <ColorPicker colorName="secondColor" {...props} />
    </div>
  </div>
);

const mapStateToProps = ({ firstColor, secondColor, colorMode }) => ({
  firstColor,
  secondColor,
  colorMode
});

export default connect(mapStateToProps)(ColorPickersContainer);
