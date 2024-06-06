import React from 'react';
import { Star } from 'lucide-react';

const Rating = ({ rating }) => {
  const totalStars = 3;

  return (
    <div className="flex gap-[18px] justify-center">
      {[...Array(totalStars)].map((_, index) => (
        <Star
          key={index}
          size={34}
          color={index < rating ? '#FFC93D' : '#FFC93D'}
          fill={index < rating ? '#FFC93D' : 'none'}
        />
      ))}
    </div>
  );
};

export default Rating;
