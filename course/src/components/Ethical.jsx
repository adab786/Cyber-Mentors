import { Link } from "react-router-dom";
import Table from "./Table";
import Backword from "./Backword";
function Ethical() {
  return (
    <div>
      <Backword />
      <div className="shadow-cyan-500/50 mockup-code  bg-accent  w-[80%] m-auto top-3  text-xl text-primary-content">
        <pre data-prefix="->">
          <code>some precautions from my side before accessing any tools</code>
        </pre>
        <pre data-prefix="->">
          <code>
            <Link
              className="btn h-fit"
              to="https://info4mhtcet.blogspot.com/2023/02/before-accessing-any-tool-in.html"
            >
              Click here
            </Link>
          </code>
        </pre>
      </div>
      {/* ------------------------------------------------------------------------------ */}
      <Table />
    </div>
  );
}

export default Ethical;
