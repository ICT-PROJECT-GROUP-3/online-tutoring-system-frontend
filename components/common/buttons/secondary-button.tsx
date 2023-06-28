import { useAnimate } from 'framer-motion';

const SecondaryButton = ({ name }) => {
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
        className="rounded-[2px]  border border-[#d03434] p-2 w-full"
      >
        <p className="text-lg text-center text-[#d03434]">{name}</p>
      </button>
    </div>
  );
};

export default SecondaryButton;
