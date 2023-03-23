import React from 'react';
import prop from 'prop-types';

import './styles.css';

export const InputComponent = ({
  handleChangeValue,
  searchValue = '',
  placeholder = 'type your search',
}) => {
  return (
    <input
      className="text-input"
      type="search"
      onChange={handleChangeValue}
      value={searchValue}
      placeholder={placeholder}
    />
  );
};

InputComponent.propTypes = {
  handleChangeValue: prop.func.isRequired,
  placeholder: prop.string,
  searchValue: prop.string,
};

InputComponent.defaultProps = {
  placeholder: '',
  searchValue: '',
};
