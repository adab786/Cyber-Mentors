import React, { Suspense } from "react";

const Spline = React.lazy(() => import("@splinetool/react-spline"));

export default function Cube() {
  // console.log(Cube.current);
  return (
    <div className="">
      <Suspense fallback={<div>Loading...</div>}>
        <Spline
          style={{ height: "50vh", width: "50vw", opacity: 0.5, color: "red" }}
          scene="https://prod.spline.design/erTDH4vYlF5nEvAj/scene.splinecode"
        />
      </Suspense>
    </div>
  );
}
