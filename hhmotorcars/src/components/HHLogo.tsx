import React from 'react';

export const HHLogo = ({ className = "w-12 h-12" }: { className?: string }) => (
  <svg 
    viewBox="0 0 400 500" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <g stroke="currentColor" strokeWidth="4" strokeLinecap="round">
      <circle cx="200" cy="200" r="155" />
      <line x1="167" y1="85" x2="167" y2="315" />
      <line x1="233" y1="85" x2="233" y2="315" />
      <line x1="45" y1="200" x2="167" y2="200" />
      <line x1="233" y1="200" x2="355" y2="200" />
    </g>
    <text 
      x="200" 
      y="446" 
      textAnchor="middle" 
      fontFamily="inherit" 
      fontWeight="400" 
      fontSize="40" 
      letterSpacing="8" 
      fill="currentColor"
      className="uppercase"
    >
        motorcars
    </text>
  </svg>
);

export const HHLogoLockup = () => (
    <div className="flex flex-col items-center group">
        <HHLogo className="w-16 h-20 transition-all duration-500 group-hover:scale-105 group-hover:text-primary" />
    </div>
);
