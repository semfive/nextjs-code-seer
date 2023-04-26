import React from 'react';
import { IIcon } from '../../../interface';

const SearchIcon = ({
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
      className={'icon icon-tabler icon-tabler-search ' + className}
      id={id}
      width={width || '24'}
      height={height || '24'}
      viewBox={`0 0 ${width || '24'} ${height || '24'}`}
      strokeWidth={strokeWidth || '2'}
      stroke='currentColor'
      fill='none'
      strokeLinecap='round'
      strokeLinejoin='round'
      onClick={onClick}
    >
      <path stroke='none' d='M0 0h24v24H0z' fill={fill || 'none'}></path>
      <path d='M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0'></path>
      <path d='M21 21l-6 -6'></path>
    </svg>
  );
};

export default SearchIcon;
