import { useAnimate } from 'framer-motion';

const RegularButton = ({ name }) => {
  const [scope, animate] = useAnimate();

  const onButtonClick = () => {
    animate([
      ['button', { scale: 0.9 }, { duration: 0.2 }],
      ['button', { scale: 1 }, { duration: 0.2 }],
    ]);
  };

  return (
    <div ref={scope}>
      <button
        onClick={onButtonClick}
        className="rounded-[2px] border bg-[#d03434] border-[#d03434] p-2 w-full"
      >
        <p className="text-lg text-center text-[#fbf6e6]">{name}</p>
      </button>
    </div>
  );
};

export default RegularButton;
