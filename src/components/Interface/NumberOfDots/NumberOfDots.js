import React, { Component } from 'react';
import { setNumberOfDots } from '../../../actions/index';
import { StyledForm } from './styles';

export default class extends Component {
  constructor(props) {
    super(props);
    const { numberOfDots } = this.props;
    console.log(numberOfDots);
    this.state = { numberOfDots };
  }

  handleChange = event => {
    const { value } = event.target;
    this.setState({ numberOfDots: value });
  };

  submitForm = event => {
    event.preventDefault();
    const { dispatch } = this.props;
    const { numberOfDots } = this.state;
    dispatch(setNumberOfDots({ numberOfDots: parseInt(numberOfDots, 10) }));
  };

  render() {
    const { numberOfDots } = this.state;
    return (
      <div>
        <h2>Number of Dots</h2>
        <StyledForm onSubmit={this.submitForm}>
          <div>
            <span>Number of Dots </span>
            <input
              type="number"
              min="0"
              step="1"
              name="numberOfDots"
              value={numberOfDots}
              onChange={this.handleChange}
            />
          </div>
            <div style={{fontSize:'.8rem'}}>Recommended 100000 max. If more are needed, assemble as layers in adobe illustrator</div>
          <input type="submit" value="Submit" />
        </StyledForm>
      </div>
    );
  }
}
