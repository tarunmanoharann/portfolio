import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Freelancer",
          "MERN stack Developer",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 80,
      }}
    />
  );
}

export default Type;
