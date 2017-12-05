import React from 'react';

export default function Form(props) {
  console.log(props);
  const { text } = props.store;
  return (
    <div>
      <input
        value={text}
        onChange={e => {props.store.dispatch({
          type: 'CHANGE_TEXT',
          text: e.target.value
        });console.log("hoge");}}
        />
    </div>
  )
}
