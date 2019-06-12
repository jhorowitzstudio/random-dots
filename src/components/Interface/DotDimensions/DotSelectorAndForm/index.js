import React, { Component } from 'react';
import Select from '../../../Common/Select';
import dotDimensions from '../../../../constants/dotDimensions';
import {
  toggleDotDimensionsPopup,
  setDotDimensions
} from '../../../../actions/index';
import { StyledForm } from './styles';

export default class extends Component {
  constructor(props) {
    super(props);
    const { dotHeight, dotWidth, dotMortar } = this.props;
    this.state = {
      formControls: {
        dotHeight: { value: dotHeight },
        dotWidth: { value: dotWidth },
        dotMortar: { value: dotMortar }
      }
    };
  }

  handleSelectChange = event => {
    const { dotDimensionsPopup, dispatch } = this.props;
    const { value } = event.target;
    if (value === 'Custom...') {
      dispatch(toggleDotDimensionsPopup());
    } else {
      if (dotDimensionsPopup === true) dispatch(toggleDotDimensionsPopup());
      dispatch(setDotDimensions(dotDimensions[value]));
    }
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState(prevState => {
      return {
        formControls: {
          ...prevState.formControls,
          [name]: {
            ...prevState.formControls[name],
            value
          }
        }
      };
    });
  };

  submitForm = event => {
    event.preventDefault();
    const { dispatch } = this.props;
    const { formControls } = this.state;
    const height = parseInt(formControls.dotHeight.value, 10);
    const width = parseInt(formControls.dotWidth.value, 10);
    const mortar = parseInt(formControls.dotMortar.value, 10);
    dispatch(setDotDimensions({ height, width, mortar }));
  };

  render() {
    const { value, dotDimensionsPopup } = this.props;
    const { formControls } = this.state;
    return (
      <div>
        <h2>Dot Dimensions</h2>
        <Select
          handleChange={this.handleSelectChange}
          value={value}
          options={dotDimensions}
          custom
        />
        {dotDimensionsPopup && (
          <StyledForm onSubmit={this.submitForm}>
            <div>
            <span>Dot Height</span>
            <input
              type="number"
              min="0"
              step="1"
              name="dotHeight"
              value={formControls.dotHeight.value}
              onChange={this.handleChange}
            />
            </div>
            <div>
            <span>Dot Width</span>
            <input
              type="number"
              min="0"
              step="1"
              name="dotWidth"
              value={formControls.dotWidth.value}
              onChange={this.handleChange}
            />
            </div>
            <div>
            <span>Dot Mortar</span>
            <input
              type="number"
              min="0"
              step="1"
              name="dotMortar"
              value={formControls.dotMortar.value}
              onChange={this.handleChange}
            />
            </div>
            <input type="submit" value="Submit" />
          </StyledForm>
        )}
      </div>
    );
  }
}
