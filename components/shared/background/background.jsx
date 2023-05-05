import React from 'react'

const Background = ({children}) => {
  return (
    
          <div className="relative overflow-hidden bg-[#f4f3f2] h-full w-full">
            {children}
          </div>
  );
}

export default Background