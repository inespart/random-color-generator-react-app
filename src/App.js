import './App.css';
// import chalk from 'chalk';
// import color from 'randomcolor';
import { useState } from 'react';
import Button from './Button.js';
import Input from './Input.js';

// import logo from './logo.svg';

function App() {
  const [randomColor, setRandomColor] = useState('#ffffff');
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

  return (
    <>
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
      <div style={{ backgroundColor: randomColor, width: '300px' }}>{str}</div>
    </>
  );
}

export default App;
