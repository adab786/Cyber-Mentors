/* eslint-disable react/prop-types */

function Dasycard({ item }) {
  return (
    <div className=" hover:scale-105 hover:shadow-lg h-fit hover:bg-slate-200 card bg-slate-180 text-black border-2 w-72 top-10 m-2  shadow-xl ">
      <figure className="px-10 pt-10">
        <img
          src="https://picsum.photos/450/300?grayscale"
          alt="image"
          className="rounded-xl w-full h-32 object-cover"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{item?.title}</h2>
        <p> {item?.instructor} </p>
        <p> Duration: {item?.duration} </p>
        <p>Price:{item?.price} </p>
        <input
          type="file"
          className="file-input file-input-bordered  bg-white  w-full max-w-xs  "
        />
        <div className="card-actions">
          <button className="hover:bg-blue-300 hover:text-black  btn btn-secondry">
            Upload
          </button>
        </div>
      </div>
    </div>
  );
}

export default Dasycard;
