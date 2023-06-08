import Image from 'next/image';
import React from 'react';
import background from '../../../public/image/shared/background.png';

const Background = ({ children }) => {
  return (
    <div className='w-screen'>
      <Image
        className="z-[-50] fixed h-full w-screen bg-cover bg-center bg-no-repeat"
        src={background}
        width={1000}
        height={1000}
        alt='....'
      />
      {children}
    </div>
  );
};

export default Background;
