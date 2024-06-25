import React from "react";

function Pre({ load }) {
  return (
    <div className={`preloader ${load ? "" : "preloader-none"}`}>
      <svg width="300" height="100" viewBox="0 0 300 100" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M10 80 Q30 5 50 80 T90 80 M110 20 V80 M130 20 V80 M150 20 C170 20 190 40 190 60 C190 80 170 80 150 80 M210 20 Q230 20 240 40 Q250 60 230 80"
          fill="none"
          stroke="rgb(46,168,157)"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <animate
            attributeName="stroke-dasharray"
            from="0 1000"
            to="1000 0"
            dur="4s"
            repeatCount="1"
            fill="freeze"
          />
        </path>
        <text x="150" y="120" textAnchor="middle" className="name-reveal">
          TARUN
        </text>
      </svg>
    </div>
  );
}

export default Pre;