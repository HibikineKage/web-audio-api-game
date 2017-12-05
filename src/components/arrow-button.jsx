import React from 'react';
import PropTypes from 'prop-types';

export default function ArrowButton(props) {
  const { keyName } = props;

  return (
    <button className="arrow-button">{keyName}</button>
  );
}

ArrowButton.propTypes = {
  keyName: PropTypes.string.isRequired,
};
