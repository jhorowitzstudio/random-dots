import React from 'react';
import { connect } from 'react-redux';
import ColorPicker from './ColorPicker';
import ColorSlide from './ColorSlide';
// import styles from './styles'

const ColorPickersContainer = props => {
  const { colorHueMode, saturation, lightness } = props;
  return (
    <div>
      <h2>Colors</h2>
      {colorHueMode === 'rgb' && (
        <div style={{ display: 'flex' }}>
          <ColorPicker colorName="firstColor" header='First Color' {...props} />
          <ColorPicker colorName="secondColor" header='Second Color' {...props} />
          <ColorPicker colorName="mortarColor" header='Mortar Color' {...props} />
        </div>
      )}
      {colorHueMode === 'random hex' && (
        <p>No color values to select. Random rgb values generated.</p>
      )}
      {colorHueMode === 'random hsl' && (
        <div style={{ display: 'flex' }}>
          <ColorSlide value={saturation} valueName="saturation" {...props} />
          <ColorSlide value={lightness} valueName="lightness" {...props} />
        </div>
      )}
    </div>
  );
};

const mapStateToProps = ({
  firstColor,
  secondColor,
  mortarColor,
  colorMode,
  colorHueMode
}) => ({
  firstColor,
  secondColor,
  mortarColor,
  colorMode,
  colorHueMode
});

export default connect(mapStateToProps)(ColorPickersContainer);
