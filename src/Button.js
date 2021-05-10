import color from 'randomcolor';

// import { useState } from 'react';

export default function Button(props) {
  return (
    <button
      onClick={() =>
        props.setRandomColor(
          color.randomColor({ luminosity: props.luminosity, hue: props.hue }),
        )
      }
    >
      Generate random color
    </button>
  );
}
