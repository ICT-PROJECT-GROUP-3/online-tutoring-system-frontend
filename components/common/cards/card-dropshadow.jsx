const CardDropShadow = ({ children }) => {
  return (
    <>
      <div
        className="rounded-[5px] block bg-[#f4f1ed] border border-[#cdccc7]/25 p-1 w-auto"
        style={{ boxShadow: '5px 5px 50px 5px #ebe8e4' }}
      >
        {children}
      </div>
    </>
  );
};

export default CardDropShadow;
