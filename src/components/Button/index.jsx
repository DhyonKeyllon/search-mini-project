import React from 'react';
import prop from 'prop-types';

import './styles.css';

export const ButtonComponent = ({ text, onClick, disabled = false }) => {
  return (
    <button className="button" onClick={onClick} disabled={disabled}>
      {text}
    </button>
  );
};

ButtonComponent.propTypes = {
  text: prop.string.isRequired,
  onClick: prop.func.isRequired,
  disabled: prop.bool,
};

ButtonComponent.defaultProps = {
  disabled: false,
};
