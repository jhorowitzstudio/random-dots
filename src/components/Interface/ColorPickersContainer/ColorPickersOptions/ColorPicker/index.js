import React from 'react';
import { PhotoshopPicker } from 'react-color';
import { setColor } from '../../../../../actions';

export default class Component extends React.Component {
  handleOnChangeComplete = color => {
    const { colorName, dispatch } = this.props;
    dispatch(setColor({ name: colorName, color: color.hex }));
  };

  render() {
    // eslint-disable-next-line react/destructuring-assignment
    const color = this.props[this.props.colorName];
    const { header } = this.props;
    return (
      <PhotoshopPicker
        header={header}
        color={color}
        onChangeComplete={this.handleOnChangeComplete}
      />
    );
  }
}
