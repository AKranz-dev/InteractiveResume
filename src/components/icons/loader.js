import React from 'react';

const IconLoader = () => (
  <svg id="logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
    <title>Loader Logo</title>
    <g>
      {/*This is the custom icon for the loding screen */}
      <g id="B" transform="translate(18.000000, 15.000000)">
        <polyline
          fill="none"
          stroke="CurrentColor"
          strokeWidth="3"
          strokeLinejoin="bevel"
          strokeMiterlimit="10"
          points="23,34 30,41 
            43,28 "
        />
        <path
          fill="none"
          stroke="CurrentColor"
          strokeWidth="3"
          strokeMiterlimit="10"
          d="M41,50h14c4.565,0,8-3.582,8-8s-3.435-8-8-8
            c0-11.046-9.52-20-20.934-20C23.966,14,14.8,20.732,13,30c0,0-0.831,0-1.667,0C5.626,30,1,34.477,1,40s4.293,10,10,10H41"
        />
      </g>

      <path
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M 50, 5
                  L 11, 27
                  L 11, 72
                  L 50, 95
                  L 89, 73
                  L 89, 28 z"
      />
    </g>
  </svg>
);

export default IconLoader;
