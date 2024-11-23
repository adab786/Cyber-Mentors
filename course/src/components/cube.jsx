import React, { Suspense, useEffect, useState } from "react";

// Dynamically import the Spline component for lazy loading
const Spline = React.lazy(() => import("@splinetool/react-spline"));

const Cube = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  // Set a timeout or any other condition to make sure Cube is rendered only after it is fully loaded
  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 500); // Adjust the timeout if needed
    return () => clearTimeout(timer);
  }, []);

  const fallback = (
    <div className="flex items-center justify-center p-4 text-gray-500">
      Loading...
    </div>
  );

  return (
    <div className="w-full flex justify-center items-center">
      {/* Render the 3D model when it's ready */}
      <Suspense fallback={fallback}>
        {isLoaded && (
          <Spline
            className="w-[50vw] md:w-[40vw] lg:w-[30vw] xl:w-[20vw] m-1"
            style={{ height: "50vh" }} // Adjust to fit the screen and ensure responsiveness
            scene="https://prod.spline.design/erTDH4vYlF5nEvAj/scene.splinecode"
          />
        )}
      </Suspense>
    </div>
  );
};

export default Cube;
