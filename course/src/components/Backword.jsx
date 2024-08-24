import { useNavigate } from "react-router-dom";

function Backword() {
  const navigate = useNavigate();
  return (
    <div>
      <button
        className="fixed z-10 btn   btn-warning  rounded-full p-3 m-3 hover:bg-yellow-50 "
        onClick={() => navigate(-1)}
      >
        Go Back ←
      </button>
    </div>
  );
}

export default Backword;
