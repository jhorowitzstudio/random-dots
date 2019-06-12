import React from 'react';
import { connect } from 'react-redux';
import ColorModeSelector from './ColorModeSelector';
import ColorHueModeSelector from './ColorHueModeSelector';
import ColorPickersOptions from './ColorPickersOptions';

const ColorPickersContainer = props => (
  <div>
    <h2>Colors</h2>
    <ColorHueModeSelector {...props} />
    <ColorModeSelector {...props} />
    <ColorPickersOptions {...props} />
  </div>
);

const mapStateToProps = ({
  firstColor,
  secondColor,
  saturation,
  lightness,
  colorArray,
  colorMode,
  colorHueMode,
  transparentBackground,
}) => ({
  firstColor,
  secondColor,
  saturation,
  lightness,
  colorArray,
  colorMode,
  colorHueMode,
  transparentBackground,
});

export default connect(mapStateToProps)(ColorPickersContainer);
