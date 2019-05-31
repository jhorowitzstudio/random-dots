import 'rc-slider/assets/index.css';
import 'rc-tooltip/assets/bootstrap.css';

import React from 'react';
import Slider from 'rc-slider';
import Tooltip from 'rc-tooltip';
import { setHSL } from '../../../../../actions';

const { Handle } = Slider;

const handle = props => {
  const { value, dragging, index, ...restProps } = props;
  return (
    <Tooltip
      prefixCls="rc-slider-tooltip"
      overlay={value}
      visible={dragging}
      placement="top"
      key={index}
    >
      <Handle value={value} {...restProps} />
    </Tooltip>
  );
};

export default class extends React.Component {
  handleOnChangeComplete = value => {
    const { valueName, dispatch } = this.props;
    dispatch(setHSL({ name: valueName, value: value / 100 }));
  };

  render() {
    // const color = this.props[this.props.colorName];
    const wrapperStyle = { width: 400, margin: 50 };
    const { valueName, value } = this.props;
    return (
      <div>
        <h3>{valueName}</h3>
        <div style={wrapperStyle}>
          <Slider
            handle={handle}
            onAfterChange={this.handleOnChangeComplete}
            defaultValue={value * 100}
            min={0}
            max={100}
          />
        </div>
      </div>
    );
  }
}
