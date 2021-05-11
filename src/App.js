/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
import { useState } from 'react';
import Button from './Button.js';
import Input from './Input.js';

// import './App.css';
// import chalk from 'chalk';
// import color from 'randomcolor';
// import logo from './logo.svg';

const frame = css`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 500px;
  height: 600px;
  margin-top: -300px;
  margin-left: -250px;
`;

const center = css`
  text-align: center;
`;

function App() {
  const [randomColor, setRandomColor] = useState('');
  const [hue, setHue] = useState('');
  const [luminosity, setLuminosity] = useState('');

  function onChangeHue(event) {
    // console.log(event);
    setHue(event.currentTarget.value);
    // console.log(event.currentTarget.value);
  }

  function onChangeLuminosity(event) {
    setLuminosity(event.currentTarget.value);
  }

  const str = <h2 css={center}>{randomColor}</h2>;

  const colorBox = css`
    background-color: ${randomColor};
    width: 500px;
    height: 200px;
  `;

  /*
  const str = (
    <code>
      ############################### <br />
      ############################### <br />
      ############################### <br />
      ####&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;####{' '}
      <br />
      ####&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{randomColor}
      &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;####
      <br />
      ####&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;####{' '}
      <br />
      ############################### <br />
      ############################### <br />
      ############################### <br />
    </code>
  );
  */

  return (
    <div css={frame}>
      <h1>Random Color Generator</h1>

      <p>Would you like the color to be a certain hue and luminosity?</p>
      <div>
        <Input
          htmlFor="hue"
          type="text"
          id="hue"
          placeholder="green"
          value={hue}
          onChange={onChangeHue}
        />
      </div>
      <div>
        <Input
          htmlFor="luminosity"
          type="text"
          id="luminosity"
          placeholder="light"
          value={luminosity}
          onChange={onChangeLuminosity}
        />
      </div>
      <br />
      <Button
        setRandomColor={setRandomColor}
        luminosity={luminosity}
        hue={hue}
      />

      <br />
      <br />
      <br />
      <br />
      <div css={colorBox}>{str}</div>
    </div>
  );
}

export default App;
