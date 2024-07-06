import React from 'react';

const IconLogo = () => (
  <svg id="logo" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 84 96">
    <title>Logo</title>
    <g transform="translate(-8.000000, -2.000000)">
      <g transform="translate(11.000000, 5.000000)">
        <polygon
          id="Shape"
          stroke="currentColor"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
          points="39 0 0 22 0 67 39 90 78 68 78 23"
        />
        {/*This is the custom icon for the top left logo */}
        <g transform="translate(7.000000, 9.000000)">
          {/*polyline is the check mark*/}
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
      </g>
    </g>
  </svg>
);

export default IconLogo;
