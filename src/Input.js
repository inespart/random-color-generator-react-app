// import color from 'randomcolor';
// import { useState } from 'react';

export default function Input(props) {
  return (
    <div>
      <label htmlFor={props.htmlFor}>Enter {props.htmlFor}: </label>
      <input
        type={props.type}
        id={props.hue}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
      />
    </div>
  );
}
