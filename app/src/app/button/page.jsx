import React from "react";

const Button = ({title}) => {
  return (
    <div className="mt-16 flex justify-center">
      <button
        type="submit"
        className="uppercase bg-custom-red text-white py-2 px-4 rounded text-xs mb-24">
          {title}
        </button>
    </div>
  )
}

export default Button;