import React from 'react';

interface IButtonOutline {
  id?: string;
  className?: string;
  onClick?: any;
  children?: any;
  text?: string;
  style?: React.CSSProperties;
}

const ButtonOutline = ({
  id,
  className,
  onClick,
  children,
  text,
  style,
}: IButtonOutline) => {
  return (
    <button
      id={id}
      className={`${className} bg-white border-2 border-solid border-dark_blue py-2 px-8 font-semibold text-dark_blue hover:bg-dark_blue hover:text-white transition`}
      style={style}
      onClick={onClick}
    >
      {...children}
    </button>
  );
};

export default ButtonOutline;
