import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import Table from "./Table"; // Import the Table component

function Dashboard() {
  const [progress, setProgress] = useState(() => {
    const savedProgress = localStorage.getItem("myData");
    return savedProgress ? parseInt(savedProgress, 10) : 0;
  });

  // Update progress in local storage
  useEffect(() => {
    localStorage.setItem("myData", progress);
  }, [progress]);

  // Track progress bar value on each checkbox click
  const handleCheckboxClick = () => {
    const totalCheckboxes = document.querySelectorAll(".checkbox").length;
    const checkedCheckboxes =
      document.querySelectorAll(".checkbox:checked").length;
    const newProgress = Math.round((checkedCheckboxes / totalCheckboxes) * 100);
    setProgress(newProgress);
  };

  // Notify when progress reaches 100%
  useEffect(() => {
    if (progress === 100) {
      toast("You have completed the course 🎉");
    }
  }, [progress]);

  return (
    <div className="bg-gray-900 text-white min-h-screen p-6 font-mono">
      <ToastContainer />
      {/* Dashboard Header */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold">Dashboard</h1>
        <div className="flex gap-4">
          <Link to="/profile" className="text-lg text-blue-500 hover:underline">
            Profile
          </Link>
          <Link
            to="/settings"
            className="text-lg text-blue-500 hover:underline"
          >
            Settings
          </Link>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="bg-gray-800 p-4 rounded-lg mb-6">
        <label htmlFor="progress-bar" className="block text-lg mb-2">
          Progress: {progress}%
        </label>
        <progress
          id="progress-bar"
          className="progress progress-warning w-full"
          value={progress}
          max="100"
        />
      </div>

      {/* Overview Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Course Overview</h2>
          <p>
            This dashboard tracks your progress across multiple chapters. As you
            complete each section, check off the relevant boxes and watch your
            progress grow. You’re doing great!
          </p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Upcoming Chapters</h2>
          <ul className="list-disc pl-6">
            <li>Cryptography Fundamentals</li>
            <li>Network Security Best Practices</li>
            <li>Ethical Hacking Tools and Techniques</li>
            <li>Advanced Web Security Techniques</li>
          </ul>
        </div>
      </div>

      {/* Table Section */}
      <div className="overflow-x-auto bg-gray-800 p-6 rounded-lg">
        <Table onCheckboxClick={handleCheckboxClick} />
      </div>

      {/* Footer */}
      <footer className="mt-12 text-center text-sm text-gray-500">
        <p>PS: Developer is a cat lover 😄</p>
      </footer>
    </div>
  );
}

export default Dashboard;
