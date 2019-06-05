import React from 'react';
import { PhotoshopPicker } from 'react-color';
import { setColor } from '../../../../../actions';

const styles = {
  container: { marginRight: 20 }
};

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
      <div style={styles.container}>
        <PhotoshopPicker
          header={header}
          color={color}
          onChangeComplete={this.handleOnChangeComplete}
        />
      </div>
    );
  }
}
