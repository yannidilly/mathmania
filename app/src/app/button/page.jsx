import React from "react";

const Button = ({title}) => {
  return (
    <div className="mt-8 flex flex-col justify-center">
      <button
        className="uppercase bg-custom-red text-white py-2 px-4 rounded text-xs font-bold w-60">
          {title}
        </button>
    </div>
  )
}

export default Button;