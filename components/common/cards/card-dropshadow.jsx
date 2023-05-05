import React from 'react'

const CardDropShadow = ({children}) => {
  return (
    <>
        <div
        className="rounded-[5px] bg-[#f4f1ed] border border-[#cdccc7]/25 p-1 w-auto max-w-5xl"
        style={{ boxShadow: "5px 5px 50px 5px #ebe8e4" }}
        >
            {children}
        </div>
    </>
  )
}

export default CardDropShadow