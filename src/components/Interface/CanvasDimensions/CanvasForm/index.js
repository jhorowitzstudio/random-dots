import React, { Component } from 'react';
import { setCanvasDimensions } from '../../../../actions/index';
import { StyledForm } from './styles';

export default class extends Component {
  constructor(props) {
    super(props);
    const { canvasHeight, canvasWidth } = this.props;
    this.state = {
      formControls: {
        canvasHeight: { value: canvasHeight },
        canvasWidth: { value: canvasWidth }
      }
    };
  }

  handleSelectChange = event => {
    const { dispatch } = this.props;
    const { value } = event.target;
    dispatch(setCanvasDimensions(value));
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
    const height = parseInt(formControls.canvasHeight.value, 10);
    const width = parseInt(formControls.canvasWidth.value, 10);
    dispatch(setCanvasDimensions({ height, width }));
  };

  render() {
    const { formControls } = this.state;
    return (
      <div>
        <h2>Canvas Dimensions</h2>
        <StyledForm onSubmit={this.submitForm}>
          <div>
            <span>Canvas Height</span>
            <input
              type="number"
              min="0"
              step="1"
              name="canvasHeight"
              value={formControls.canvasHeight.value}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <span>Canvas Width</span>
            <input
              type="number"
              min="0"
              step="1"  
              name="canvasWidth"
              value={formControls.canvasWidth.value}
              onChange={this.handleChange}
            />
          </div>
          <input type="submit" value="Submit" />
        </StyledForm>
      </div>
    );
  }
}
