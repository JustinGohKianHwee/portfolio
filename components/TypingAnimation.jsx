"use client";

import { TypeAnimation } from "react-type-animation"

const TypingAnimation = () => {
    return (
      <TypeAnimation
        sequence={[
          'I am a Software Engineer',
          1000,
          'I am an ML Engineer',
          1000,
          'I am a Research Engineer',
          1000,
          'I am a Data Scientist',
          1000
        ]}
        wrapper="span"
        speed={50}
        style={{ fontSize: '2em', display: 'inline-block' }}
        repeat={Infinity}
      />
    );
  };
export default TypingAnimation