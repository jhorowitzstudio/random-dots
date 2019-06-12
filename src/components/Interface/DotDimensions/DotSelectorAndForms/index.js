import React, { Component } from 'react';
import { setDotDimensions } from '../../../../actions/index';
import { StyledForm } from './styles';

export default class extends Component {
  constructor(props) {
    super(props);
    const { dotRadiusMin, dotRadiusMax } = this.props;
    this.state = {
      formControls: {
        dotRadiusMin: { value: dotRadiusMin },
        dotRadiusMax: { value: dotRadiusMax }
      }
    };
  }

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
    const dotRadiusMin = parseInt(formControls.dotRadiusMin.value, 10);
    const dotRadiusMax = parseInt(formControls.dotRadiusMax.value, 10);
    if (dotRadiusMin > dotRadiusMax)
    // eslint-disable-next-line no-alert
      window.alert(
        'Dot Radius Min must be EQUAL TO or LESS THAN Dot Radius Max'
      );
    dispatch(setDotDimensions({ dotRadiusMax, dotRadiusMin }));
  };

  render() {
    const { formControls } = this.state;
    return (
      <div>
        <h2>Dot Radius Range</h2>
        <StyledForm onSubmit={this.submitForm}>
          <div>
            <span>Dot Radius Min</span>
            <input
              type="number"
              min="0"
              step="1"
              name="dotRadiusMin"
              value={formControls.dotRadiusMin.value}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <span>Dot Radius Max</span>
            <input
              type="number"
              min="0"
              step="1"
              name="dotRadiusMax"
              value={formControls.dotRadiusMax.value}
              onChange={this.handleChange}
            />
          </div>
          <input type="submit" value="Submit" />
        </StyledForm>
      </div>
    );
  }
}
