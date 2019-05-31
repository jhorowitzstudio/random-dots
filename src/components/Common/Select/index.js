import React from 'react';

export default props => {
  const { handleChange, value, options, disabled, custom = false } = props;
  return (
    <select disabled={disabled} value={value} onChange={handleChange}>
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
    </select>
  );
};
