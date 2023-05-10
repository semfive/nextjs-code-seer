import { IIcon } from '@/interfaces';
import React from 'react';

const EyeClosedIcon = ({
  width,
  height,
  fill,
  onClick,
  className,
  id,
  strokeWidth,
}: IIcon) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className={'icon icon-tabler icon-tabler-eye-closed ' + className}
      id={id}
      width={width || '24'}
      height={height || '24'}
      viewBox='0 0 24 24'
      strokeWidth={strokeWidth || '2'}
      stroke='currentColor'
      fill='none'
      strokeLinecap='round'
      strokeLinejoin='round'
      onClick={onClick}
    >
      <path stroke='none' d='M0 0h24v24H0z' fill={fill || 'none'}></path>
      <path d='M21 9c-2.4 2.667 -5.4 4 -9 4c-3.6 0 -6.6 -1.333 -9 -4'></path>
      <path d='M3 15l2.5 -3.8'></path>
      <path d='M21 14.976l-2.492 -3.776'></path>
      <path d='M9 17l.5 -4'></path>
      <path d='M15 17l-.5 -4'></path>
    </svg>
  );
};

export default EyeClosedIcon;
