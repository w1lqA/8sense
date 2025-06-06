import React from 'react';

export const CrossIcon = ({ className }: { className: string }) => {
  return (
    <svg 
      className={className} 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="currentColor" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_35_1136)">
        <path 
          d="M7 7L17 17M7 17L17 7" 
          stroke="currentColor" 
          strokeWidth="1.5" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_35_1136">
          <rect width="24" height="24" fill="currentColor"/>
        </clipPath>
      </defs>
    </svg>
  );
};