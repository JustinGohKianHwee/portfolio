"use client";

import { TypeAnimation } from "react-type-animation"

const TypingAnimation = () => {
    return (
      <TypeAnimation
        sequence={[
          // Same substring at the start will only be typed out once, initially
          'I am a Business Analyst',
          1000, // wait 1s before replacing "Mice" with "Hamsters"
          'I am a Software Developer',
          1000,
          'I am a ML Engineer',
          1000,
          'I am a Data Analyst',
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