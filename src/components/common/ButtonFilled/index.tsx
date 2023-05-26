import React from 'react';

interface IButtonFilled {
  id?: string;
  className?: string;
  onClick?: any;
  children?: any;
  text?: string;
  style?: React.CSSProperties;
}

const ButtonFilled = ({
  id,
  className,
  onClick,
  children,
  text,
  style,
}: IButtonFilled) => {
  return (
    <button
      id={id}
      className={`${className} bg-dark_blue border-2 border-solid border-dark_blue py-2 px-8 font-semibold text-white hover:bg-opacity-95 hover:text-white transition`}
      style={style}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default ButtonFilled;
