import React from 'react';
import { IIcon } from '../../../interface';

const CircleChevronRight = ({
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
      className={
        'icon icon-tabler icon-tabler-circle-chevron-right ' + className
      }
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
      <path d='M11 9l3 3l-3 3'></path>
      <path d='M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0z'></path>
    </svg>
  );
};

export default CircleChevronRight;
