"use client";
import Link from 'next/link';
import React from 'react';

const HamburgerIcon = ({ className }: { className?: string }) => (
  
  <Link href="#">
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      height="42px" 
      viewBox="0 -960 960 960" 
      width="42px" 
      fill="currentColor" 
      className={className}
    >
      <path d="M120-240v-66.67h720V-240H120Zm0-206.67v-66.66h720v66.66H120Zm0-206.66V-720h720v66.67H120Z"/>
    </svg>
  </Link>
);

export default HamburgerIcon;