import Image from 'next/image';
import asset1 from '../../../public/image/shared/bg-asset-1.png';
import asset2 from '../../../public/image/shared/bg-asset-2.png';

const Background = ({ children }) => {
  return (
    <div className="">
      {/* <Image
        className="z-[-50] fixed h-full w-screen bg-cover bg-center bg-no-repeat"
        src={background}
        width={1000}
        height={1000}
        alt='....'
      /> */}
      <div className="z-[-50] fixed bg-[#f4f3f2] h-screen w-screen">
        <Image
          className="absolute top-0 left-64 h-80 w-80"
          src={asset1}
          width={1000}
          height={1000}
          alt="...."
        />
        <Image
          className="absolute bottom-0 right-0 h-80 w-80"
          src={asset2}
          width={1000}
          height={1000}
          alt="...."
        />
      </div>
      {children}
    </div>
  );
};

export default Background;
