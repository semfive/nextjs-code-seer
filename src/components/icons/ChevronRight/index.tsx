import { IIcon } from '@/interfaces';
import React from 'react';

const ChevronRight = ({
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
      className={'icon icon-tabler icon-tabler-chevron-right ' + className}
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
      <path d='M9 6l6 6l-6 6'></path>
    </svg>
  );
};

export default ChevronRight;
