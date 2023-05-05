import React from 'react'

const CardFlatEdgeless = ({children}) => {
  return (
    <>
      <div
        className="bg-[#eee9e2] p-1 w-auto max-w-5xl h-full flex flex-col justify-center"
        >
            {children}
        </div>  
    </>
  )
}

export default CardFlatEdgeless