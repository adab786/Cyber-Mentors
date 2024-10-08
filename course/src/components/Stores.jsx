import Backword from "./Backword";
import Dasycard from "./Dasycard";
import { useState, useEffect } from "react";

function Stores() {
  const [state, setstate] = useState();

  const getdata = async () => {
    const response = await fetch(
      "https://cyber-mentors-git-main-adab786s-projects.vercel.app/course"
    );
    const data = await response.json();
    // console.log(data);
    // const filtered = data.filter(
    //   (item) => item.price > 950 && item.price < 999
    // );

    setstate(data);
  };
  useEffect(() => {
    getdata();
  }, []);

  if (!state) {
    return (
      <h1 className="text-zinc-100 animate-pulse text-3xl font-Gameplay flex justify-center mt-[20%] m-2">
        Work in{" "}
        <span className="text-red-800" role="img" aria-label="emoji">
          🐌
        </span>
        <span
          className="  text-red-800
        "
        >
          Progress ...
        </span>
      </h1>
    );
  }

  return (
    <div>
      <Backword />
      <div className="absolute w-full h-full flex flex-wrap justify-evenly  bg-slate-100   p-12">
        {state?.map((item) => (
          <Dasycard key={item._id} item={item} />
        ))}

        {/* <Dasycard /> */}
      </div>
    </div>
  );
}

export default Stores;
