import React from "react";

const Button = ({title}) => {
  return (
    <div className="mt-16 flex justify-center">
      <button
        className="uppercase bg-custom-red text-white py-2 px-4 rounded text-xs font-bold mb-24 w-60">
          {title}
        </button>
    </div>
  )
}

export default Button;