/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useState } from 'react';
import Button from './Button.js';
import Input from './Input.js';

// CSS-in-JS
const frame = css`
  background: #e9c46a;
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Lucida Console', Courier, monospace;
`;

const section = css`
  background: white;
  box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
    0 17px 50px 0 rgba(0, 0, 0, 0.19);
  padding: 15px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
`;

const inputArea = css`
  margin: 10px 0;
`;

const center = css`
  text-align: center;
`;

// App Component
function App() {
  const [randomColor, setRandomColor] = useState('');
  const [hue, setHue] = useState('');
  const [luminosity, setLuminosity] = useState('');
  const [width, setWidth] = useState('');
  const [height, setHeight] = useState('');

  // onChange Handlers
  function onChangeHue(event) {
    setHue(event.currentTarget.value);
  }

  function onChangeLuminosity(event) {
    setLuminosity(event.currentTarget.value);
  }

  function onChangeWidth(event) {
    setWidth(event.currentTarget.value);
  }

  function onChangeHeight(event) {
    setHeight(event.currentTarget.value);
  }

  const str = <h2 css={center}>{randomColor}</h2>;

  const colorBox = css`
    background-color: ${randomColor};
    width: ${width > 0 && width < 1000 ? width : 400}px;
    height: ${height > 0 && height < 1000 ? height : 300}px;
    align-self: center;
  `;

  return (
    <div css={frame}>
      <section css={section}>
        <h1>Random Color Generator</h1>
        <div>
          <div css={inputArea}>
            <Input
              htmlFor="hue"
              text="hue"
              type="text"
              id="hue"
              placeholder="green"
              value={hue}
              onChange={onChangeHue}
            />
          </div>

          <div css={inputArea}>
            <Input
              htmlFor="luminosity"
              text="luminosity"
              type="text"
              id="luminosity"
              placeholder="light"
              value={luminosity}
              onChange={onChangeLuminosity}
            />
          </div>

          <div css={inputArea}>
            <Input
              htmlFor="width"
              text="width (in px)"
              type="number"
              id="width"
              placeholder="500px"
              value={width}
              onChange={onChangeWidth}
            />
          </div>

          <div css={inputArea}>
            <Input
              htmlFor="height"
              text="height (in px)"
              type="number"
              id="height"
              placeholder="500px"
              value={height}
              onChange={onChangeHeight}
            />
          </div>
        </div>
        <br />
        <br />

        <Button
          setRandomColor={setRandomColor}
          luminosity={luminosity}
          hue={hue}
        />

        <br />
        <br />
        <br />
        <div css={colorBox}>{str}</div>
      </section>
    </div>
  );
}

export default App;
