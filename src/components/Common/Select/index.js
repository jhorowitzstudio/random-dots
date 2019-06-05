import React from 'react';
import { StyledSelect } from './styles';

export default props => {
  const { handleChange, value, options, disabled, custom = false } = props;
  return (
    <StyledSelect disabled={disabled} value={value} onChange={handleChange}>
      {Object.keys(options).map(name => (
        <option key={name} value={name}>
          {name}
        </option>
      ))}
      {custom && (
        <option key="custom" value="Custom...">
          Custom...
        </option>
      )}
    </StyledSelect>
  );
};
