import { Link } from "react-router-dom";
import { MdNightlight } from "react-icons/md";
import { CiLight } from "react-icons/ci";
import Userbutton from "../auth/Userbutton";
import { useUser } from "@clerk/clerk-react";

function Navbar({ mode, toggleMode }) {
  const { isSignedIn, isLoaded } = useUser();

  // If authentication state is not loaded or the user is not signed in, return null (don't render Navbar)
  if (!isLoaded || !isSignedIn) {
    return null; // This ensures Navbar won't render if not signed in or loading
  }

  return (
    <div>
      <nav className="shadow-md sticky top-0 transition-shadow duration-500 ease-in-out flex font-serif h-20 items-center justify-between border-b-2 border-gray-200 dark:border-gray-700">
        <div className="mx-3 cursor-pointer hover:scale-105 duration-75 ease-out">
          <img src="/logo.png" alt="Logo" />
        </div>
        <ul className="hidden md:flex cursor-pointer ml-[60%] p-5 gap-9 items-center text-gray-900 dark:text-gray-100">
          <li>Home</li>
          <li>About us</li>
          {/* <li>Contact</li> */}
          <li>
            <Link to="/Course"> Course</Link>
          </li>
        </ul>
        <button
          onClick={toggleMode}
          className="hover:shadow-red-500 m-3 w-fit py-3 font-semibold rounded-sm shadow-md hover:bg-blue-600 transition ease-in-out duration-300 cursor-pointer px-4 text-gray-900 dark:text-gray-100"
        >
          {mode === "dark" ? <CiLight /> : <MdNightlight />}
        </button>

        <Userbutton />
      </nav>
    </div>
  );
}

export default Navbar;
