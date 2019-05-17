import React, { Component } from 'react';

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = { value: 0 };
  }

  componentDidMount() {
    const { value } = this.props;
    this.setState({ value });
  }

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    const { handleSubmit } = this.props;
    const { value } = this.state;
    handleSubmit(value);
  };

  render() {
    const { value } = this.state;
    return (
      <form onSubmit={this.handleFormSubmit}>
        <input type="text" value={value} onChange={this.handleChange} />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
