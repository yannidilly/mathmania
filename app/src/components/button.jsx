import React from 'react';

const Button = ({ children, variant, size }) => {
  const baseStyles =
    'shadow-xl font-custom border text-[9px] rounded-[5px] uppercase shadow-black/30 shadown-xl border hover:opacity-70';

  const sizeStyles = {
    small: 'px-[5px] py-[7px]]',
    medium: 'px-[5px] py-[13px]',
    large: 'px-[55px] py-[13px]',
  };

  const variantStyles = {
    white:
      'bg-custom-white text-custom-red border-custom-gray1 hover:opacity-90',
    red: 'bg-custom-red text-white border-custom-gray1/25 hover:opacity-90',
  };

  const combinedStyles = `${baseStyles}} ${variantStyles[variant]} ${sizeStyles[size]}`;

  return <button className={combinedStyles}>{children}</button>;
};

Button.defaultProps = {
  variant: 'white',
  size: 'medium',
};

export default Button;
