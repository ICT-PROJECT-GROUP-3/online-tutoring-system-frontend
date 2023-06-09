const PageContainer = ({ children }) => {
  return (
    <div className="flex flex-wrap justify-center items-center relative w-screen">
      {children}
    </div>
  );
};

export default PageContainer;
