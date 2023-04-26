import React from 'react';
import { IIcon } from '../../../interface';

const BuildingArcIcon = ({
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
      id={id}
      className={'icon icon-tabler icon-tabler-building-arch ' + className}
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
      <path d='M3 21l18 0'></path>
      <path d='M4 21v-15a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v15'></path>
      <path d='M9 21v-8a3 3 0 0 1 6 0v8'></path>
    </svg>
  );
};

export default BuildingArcIcon;
