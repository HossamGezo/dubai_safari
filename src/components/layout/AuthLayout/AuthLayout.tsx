// Main Component
const AuthLayout = ({children}: {children: React.ReactNode}) => {
  // Return JSX
  return (
    <>
      <div className="login relative bg-[url(./images/skyscrepper.jpg)] bg-no-repeat bg-cover h-[calc(100vh-99.02px)] flex flex-col items-center justify-center bg-position-[45%] gap-5">
        <div className="overlay absolute inset-0 bg-black/45"></div>
        {children}
      </div>
    </>
  );
};

export default AuthLayout;
