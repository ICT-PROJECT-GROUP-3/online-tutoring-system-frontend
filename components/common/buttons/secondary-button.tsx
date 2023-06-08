const SecondaryButton = ({ name }) => {
  return (
    <>
      <div className="rounded-[2px]  border border-[#d03434] p-2 w-auto">
        <p className="text-lg text-center text-[#d03434]">{name}</p>
      </div>
    </>
  );
};

export default SecondaryButton;
