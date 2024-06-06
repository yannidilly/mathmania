import React from 'react';
import Button from './button';
import Rating from './progress-stars';
import { Trophy } from 'lucide-react';

const Popup1 = ({ variant = 'white', titleColor, textColor, text, title }) => {
  const ratingData = {
    rating: 2,
  };

  const baseStyles =
    'max-w-[300px] px-8 pt-[45px] pb-[35px] rounded-[10px] font-custom flex text-center flex-col items-center justify-between h-[374px]';

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
      <Trophy size={73} color="#FFF" />
      <Rating rating={ratingData.rating} />
      <p
        style={{ color: variantStyles[variant].textColor }}
        className="text-xs"
      >
        {text}
      </p>
      <div className="flex justify-center ">
        <Button variant="red" size="large" className="px-[58px] bg-red-200">
          OK
        </Button>
      </div>
    </div>
  );
};

export default Popup1;
