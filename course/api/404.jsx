import React from "react";

function Notfound() {
  const loaderStyle = {
    position: "relative",
    width: "150px",
    height: "150px",
    background: "transparent",
    borderRadius: "50%",
    boxShadow: "25px 25px 75px rgba(0, 0, 0, 0.55)",
    border: "1px solid #333",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  };

  const loaderBeforeStyle = {
    content: '""',
    position: "absolute",
    inset: "20px",
    background: "transparent",
    border: "1px dashed #444",
    borderRadius: "50%",
    boxShadow:
      "inset -5px -5px 25px rgba(0,0,0,0.25), inset 5px 5px 35px rgba(0,0,0,0.25)",
  };

  const loaderAfterStyle = {
    content: '""',
    position: "absolute",
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    border: "1px dashed #444",
    boxShadow:
      "inset -5px -5px 25px rgba(0,0,0,0.25), inset 5px 5px 35px rgba(0,0,0,0.25)",
  };

  const loaderSpanStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    width: "50%",
    height: "100%",
    background: "transparent",
    transformOrigin: "top left",
    animation: "radar81 2s linear infinite",
    borderTop: "1px dashed #fff",
  };

  const loaderSpanBeforeStyle = {
    content: '""',
    position: "absolute",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    background: "seagreen",
    transformOrigin: "top left",
    transform: "rotate(-55deg)",
    filter: "blur(30px) drop-shadow(20px 20px 20px seagreen)",
  };

  // Add the red dot style with blinking effect
  const redDotStyle = {
    position: "absolute",
    top: "50%",
    left: "6%",
    width: "10px",
    height: "10px",

    backgroundColor: "black",
    borderRadius: "50%",
    animation: "blink 1s infinite", // Blinking effect
    transform: "translate(-50%, -50%)", // Center it inside the loader
  };

  // Keyframes for the blinking red dot
  const redDotKeyframes = `
    @keyframes blink {
      0% {
        opacity: 1;
      }
      50% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }
  `;

  // Injecting the keyframes into the document style to make the animation work
  React.useEffect(() => {
    const styleTag = document.createElement("style");
    styleTag.innerHTML = redDotKeyframes;
    document.head.appendChild(styleTag);
    return () => {
      document.head.removeChild(styleTag);
    };
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-black text-white overflow-hidden">
      <div className="text-center">
        <h1 className="text-9xl font-extrabold glitch-text">404</h1>
        <p className="text-2xl mt-4">Page Not Found</p>
        <p className="text-lg mt-2 italic">"This is the end of the line"</p>

        {/* Loader animation */}
        <div className="ml-8 m-2" style={loaderStyle}>
          <div style={loaderBeforeStyle}></div>
          <div style={loaderAfterStyle}></div>
          <span style={loaderSpanStyle}>
            <span style={loaderSpanBeforeStyle}></span>
          </span>

          {/* Red blinking dot */}
          <div style={redDotStyle}></div>
          <div
            style={{
              ...redDotStyle,
              left: "64%",
              top: "10%",
            }}
          ></div>
          <div
            style={{
              ...redDotStyle,
              left: "40%",
              top: "90%",
            }}
          ></div>
          <div
            style={{
              ...redDotStyle,
              left: "60%",
              //   top: "90%",
            }}
          ></div>
        </div>

        <button className="mt-8 py-2 px-6 bg-gradient-to-r from-green-500 to-pink-500 hover:from-pink-500 hover:to-green-500 text-white rounded-full">
          <a href="/" className="text-white no-underline">
            Go Back Home
          </a>
        </button>
      </div>
    </div>
  );
}

export default Notfound;
