import React from 'react';
import Button from './button';

const PopupText = ({
  variant = 'white',
  titleColor,
  textColor,
  text,
  title,
}) => {
  const baseStyles =
    'max-w-[300px] px-8 pt-[45px] pb-[35px] rounded-[10px] font-custom flex text-center flex-col justify-between h-[374px]';

  const variantStyles = {
    white: {
      backgroundColor: 'bg-custom-white',
      titleColor: titleColor || '#99173C',
      textColor: textColor || '#808080',
    },
    red: {
      backgroundColor: 'bg-custom-red',
      titleColor: titleColor || '#FFFFFF',
      textColor: textColor || '#FFFFFF',
    },
  };

  const combinedStyles = `${baseStyles} ${variantStyles[variant].backgroundColor}`;

  return (
    <div className={combinedStyles}>
      <h1
        className="text-base"
        style={{ color: variantStyles[variant].titleColor }}
      >
        {title}
      </h1>
      <p
        style={{ color: variantStyles[variant].textColor }}
        className="text-xs"
      >
        {text}
      </p>
      <div className="grid grid-cols-2 gap-[18px]">
        <Button variant="white">Iniciar Depois</Button>
        <Button variant="red">Iniciar Agora</Button>
      </div>
    </div>
  );
};

export default PopupText;
