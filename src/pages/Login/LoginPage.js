import React from "react";
import LoginButton from "../../components/buttons/LoginButton";
import RegisterButton from "../../components/buttons/RegisterButton";

const LoginPage = () => {
  return (
    <>
      <div className="h-full">
        <div className="xs:h-1/2 h-3/4 w-full" id="logo">
          asd
        </div>
        <div className="xs:h-1/2 h-1/4 flex flex-col justify-around items-center w-full">
          <LoginButton />
          <RegisterButton />
        </div>
      </div>
    </>
  );
};

export default LoginPage;
