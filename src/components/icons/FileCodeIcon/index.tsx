import { IIcon } from '@/interfaces';
import React from 'react';

const FileCodeIcon = ({
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
      className={'icon icon-tabler icon-tabler-file-code ' + className}
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
      <path d='M14 3v4a1 1 0 0 0 1 1h4'></path>
      <path d='M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z'></path>
      <path d='M10 13l-1 2l1 2'></path>
      <path d='M14 13l1 2l-1 2'></path>
    </svg>
  );
};

export default FileCodeIcon;
