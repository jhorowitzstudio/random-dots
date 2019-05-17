import React, { Component } from 'react';
import Select from '../../../Common/Select';
import Input from '../../../Common/Input';
import brickDimensions from '../../../../constants/brickDimensions';
import {
  toggleBrickDimensionsPopup,
  setBrickDimensions
} from '../../../../actions/index';

export default class extends Component {
  handleSelectChange = event => {
    const { dispatch } = this.props;
    const { value } = event.target;
    if (value === 'Custom...') {
      dispatch(toggleBrickDimensionsPopup());
    } else {
      dispatch(setBrickDimensions(brickDimensions[value]));
    }
  };

  handleHeightSubmit = value => {
    const { dispatch } = this.props;
    console.log(value);
    const parsedInteger = parseInt(value, 10)
    if (Number.isInteger(parsedInteger)) dispatch(setBrickDimensions({height: value}))
    else console.log(parsedInteger)
  }

  render() {
    const {
      value,
      brickHeight,
      brickWidth,
      brickMortar,
      brickDimensionsPopup
    } = this.props;
    return (
      <div>
        <h2>Brick Dimensions</h2>
        <Select
          handleChange={this.handleSelectChange}
          value={value}
          options={brickDimensions}
        />
        {brickDimensionsPopup && (
          <div>
            Height
            <Input handleSubmit={this.handleHeightSubmit} value={brickHeight} />
            Width
            <Input handleSubmit={this.handleWidthSubmit} value={brickWidth} />
            Mortar
            <Input handleSubmit={this.handleMortarSubmit} value={brickMortar} />
          </div>
        )}
      </div>
    );
  }
}
