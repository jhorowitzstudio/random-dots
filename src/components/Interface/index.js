import React from 'react';
import DotDimensions from './DotDimensions';
import CanvasDimensions from './CanvasDimensions';
import ColorPickersContainer from './ColorPickersContainer';
import NumberOfDots from './NumberOfDots';

export default () => (
  <div>
    <NumberOfDots />
    <DotDimensions />
    <CanvasDimensions />
    <ColorPickersContainer />
  </div>
);
