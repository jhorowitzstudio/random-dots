import React from 'react';
import { colorHueModes } from '../../../../constants/defaults';
import { setColorHueMode } from '../../../../actions';
import Select from '../../../Common/Select';
import { StyledHueModeDiv } from './styles'

export default class Component extends React.Component {
  handleSelectChange = event => {
    const { dispatch } = this.props;
    const { value } = event.target;
    dispatch(setColorHueMode(value));
  };

  render() {
    const { colorHueMode } = this.props;
    return (
      <StyledHueModeDiv>
          Color Mode
        <Select
          handleChange={this.handleSelectChange}
          value={colorHueMode}
          options={colorHueModes}
        />
      </StyledHueModeDiv>
    );
  }
}
