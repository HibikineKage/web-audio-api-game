import React from 'react';

export default function ArrowButton (props) {
  const keyName = props.keyName;

  return (
    <button className="arrow-button">{keyName}</button>
  );
}
