const PageContainer = ({ children }) => {
  return (
    <div className="flex flex-wrap justify-center items-center relative top-20 mb-28 w-screen">
      {children}
    </div>
  );
};

export default PageContainer;
