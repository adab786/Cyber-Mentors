import React from "react";

const Loader = () => {
  // Inline styles for the loader container
  const loaderStyles = {
    position: "relative",
    width: "120px",
    height: "90px",
    margin: "0 auto",
  };

  // Inline styles for the bouncing circle (before pseudo-element)
  const bounceCircleStyles = {
    position: "absolute",
    bottom: "30px",
    left: "50px",
    height: "30px",
    width: "30px",
    borderRadius: "50%",
    backgroundColor: "#2a9d8f",
    animation: "loading-bounce 0.5s ease-in-out infinite alternate",
  };

  // Inline styles for the bars (after pseudo-element)
  const barsStyles = {
    position: "absolute",
    right: "0",
    top: "0",
    height: "7px",
    width: "45px",
    borderRadius: "4px",
    boxShadow: "0 5px 0 #f2f2f2, -35px 50px 0 #f2f2f2, -70px 95px 0 #f2f2f2",
    animation: "loading-step 1s ease-in-out infinite",
  };

  // Keyframes animation injected into the page's <style> tag
  return (
    <>
      <style>
        {`
          @keyframes loading-bounce {
            0% { transform: scale(1, 0.7); }
            40% { transform: scale(0.8, 1.2); }
            60% { transform: scale(1, 1); }
            100% { transform: translateY(110px); }
          }
          
          @keyframes loading-step {
            0% {
              box-shadow: 0 10px 0 rgba(0, 0, 0, 0), 0 10px 0 #f2f2f2, -35px 50px 0 #f2f2f2, -70px 90px 0 #f2f2f2;
            }
            100% {
              box-shadow: 0 10px 0 #f2f2f2, -35px 50px 0 #f2f2f2, -70px 90px 0 #f2f2f2, -70px 90px 0 rgba(0, 0, 0, 0);
            }
          }
        `}
      </style>

      <div className="flex justify-center items-center mt-52 ">
        <div style={loaderStyles}>
          <div style={bounceCircleStyles}></div>
          <div style={barsStyles}></div>
        </div>
      </div>
    </>
  );
};

export default Loader;
