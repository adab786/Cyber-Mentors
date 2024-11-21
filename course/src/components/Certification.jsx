import { useState } from "react";
import { jsPDF } from "jspdf";
// import cube from "./cube";
import Cube from "./cube";
import { useUser } from "@clerk/clerk-react";

function Certification() {
  const [studentName, setStudentName] = useState("");
  const [isCompleted, setIsCompleted] = useState(false);

  const { user } = useUser();

  console.log(user);

  // Generate PDF certificate with student name on image
  const generateCertificate = () => {
    const doc = new jsPDF();

    // Load the certificate image (from the public folder)
    const certificateImage = "/certificate.png"; // Path to the certificate image in public folder

    // Add the certificate image to the PDF
    doc.addImage(certificateImage, "PNG", 15, 15, 180, 240); // Adjust position and size as needed

    // Add student name dynamically on top of the certificate image
    doc.setFontSize(22);
    doc.setFont("Times-Roman", "normal");
    doc.text(studentName, 100, 140, { align: "center" }); // Adjust X and Y position for name

    // Add date of completion at the bottom
    doc.setFontSize(14);
    doc.setFont("helvetica", "normal");
    doc.text(
      "Date of Completion: " + new Date().toLocaleDateString(),
      105,
      250,
      { align: "center" }
    );

    // Save the PDF with the correct file name
    doc.addImage("/logo.png", "PNG", 10, 275, 20, 20); // Adjust path and position
    doc.save("ethical_hacking_certificate.pdf");
  };

  // Form submission for course completion
  const handleCourseCompletion = () => {
    setIsCompleted(true);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <Cube />
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
        <h1 className="text-4xl font-semibold text-center text-gray-800 mb-8">
          Ethical Hacking Course Completion
        </h1>

        {!isCompleted ? (
          <div>
            <input
              type="text"
              className="w-full p-3 mb-6 border border-gray-300 rounded-md text-lg"
              placeholder="Enter your name"
              required
              value={studentName}
              onChange={(e) => setStudentName(e.target.value)}
            />
            <button
              className="w-full bg-blue-600 text-white p-3 rounded-md font-semibold hover:bg-blue-700 transition duration-300"
              onClick={handleCourseCompletion}
            >
              Complete Course
            </button>
          </div>
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
