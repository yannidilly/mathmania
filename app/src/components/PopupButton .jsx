'use client';

import { useState } from 'react';

const PopupButton = ({ label, PopupComponent, popupProps }) => {
  const [isVisible, setIsVisible] = useState(false);

  const togglePopup = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="flex justify-center items-center gap-2">
      <button
        onClick={ togglePopup }
        className="px-3 py-4 border text-white rounded max-h-[58px]"
      >
        { label }
      </button>
      { isVisible && <PopupComponent { ...popupProps } onClose={ togglePopup } /> }
    </div>
  );
};

export default PopupButton;
