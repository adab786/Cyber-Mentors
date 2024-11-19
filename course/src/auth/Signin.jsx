import { SignIn } from "@clerk/clerk-react";

function Signin() {
  return (
    <div className="flex items-center justify-center h-screen bg-white shadow-md ">
      <SignIn />
    </div>
  );
}

export default Signin;
