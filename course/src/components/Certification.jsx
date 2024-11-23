import { useState } from "react";
import { jsPDF } from "jspdf";
import { useUser } from "@clerk/clerk-react";
import Notfound from "../../api/404";
import { Navigate } from "react-router-dom";
import Cube from "./Cube.jsx";

function Certification() {
  const [studentName, setStudentName] = useState("");
  const [isCompleted, setIsCompleted] = useState(false);
  // commenting out the useUser hook to avoid errors

  const { user } = useUser();

  if (!user) {
    return (
      <div>
        <Notfound />
      </div>
    );
  }

  // console.log(user.primaryEmailAddress.emailAddress);

  const progress = localStorage.getItem("myData");

  if (progress !== "100") {
    return <Navigate to="/" />;
  }

  // Generate PDF certificate with student name on image and watermark
  const generateCertificate = () => {
    const doc = new jsPDF({
      orientation: "landscape", // since the image is 2000x1414, this would be in landscape mode
      unit: "px", // using pixels for precise control
      format: [2000, 1414], // matching the certificate image dimensions
    });

    const certificateImage = "/certificate.png";
    doc.addImage(certificateImage, "PNG", 0, 0, 2000, 1414); // Add the certificate image

    // Watermark with the email address
    const email = user.primaryEmailAddress.emailAddress;
    doc.setFontSize(30);
    doc.setTextColor(200, 200, 200); // Light gray color for the watermark
    doc.setFont("helvetica", "italic");
    doc.text(
      email,
      1000, // X position
      700, // Y position
      { align: "center", angle: 45 } // Rotate the text to create a diagonal watermark effect
    );

    // Add student's name
    doc.setTextColor(0, 0, 0); // Black color for the student's name
    doc.setFontSize(42);
    doc.setFont("Times-Roman", "Bold");
    doc.text(studentName, 1000, 750, { align: "center" });

    // Date of completion
    doc.setFontSize(14);
    doc.setFont("helvetica", "normal");
    doc.text(
      "Date of Completion: " + new Date().toLocaleDateString(),
      1000,
      1200,
      { align: "center" }
    );

    // Logo on the certificate
    doc.addImage("/logo.png", "PNG", 10, 1350, 40, 40);

    // Save the PDF with the given filename
    doc.save("ethical_hacking_certificate.pdf");
  };

  const handleCourseCompletion = () => {
    setIsCompleted(true);
  };

  return (
    <div className="min-h-screen max-lg:flex-col bg-gray-100 flex items-center justify-center p-4">
      <Cube />
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
        <h1 className="text-4xl font-semibold text-center text-gray-800 mb-8">
          Ethical Hacking Course Completion
        </h1>

        {!isCompleted ? (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleCourseCompletion();
            }}
          >
            <input
              type="text"
              className="w-full p-3 mb-6 border border-gray-300 rounded-md text-lg"
              placeholder="Enter your name"
              value={studentName}
              onChange={(e) => setStudentName(e.target.value)}
              required
            />
            <button
              type="submit"
              className="w-full bg-blue-600 text-white p-3 rounded-md font-semibold hover:bg-blue-700 transition duration-300"
            >
              Complete Course
            </button>
          </form>
        ) : (
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-green-600 mb-4">
              Congratulations, {studentName}!
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              You have successfully completed the Ethical Hacking course!
            </p>
            <button
              className="bg-green-600 text-white p-3 rounded-md font-semibold hover:bg-green-700 transition duration-300"
              onClick={generateCertificate}
            >
              Download Certificate
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Certification;
