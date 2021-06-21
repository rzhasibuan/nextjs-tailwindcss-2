// const { default: Qoute } = require("../components/Qoute");
import Qoute from "../components/Qoute";

function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-300">
      {/* <h1>Hello nextjs with tailwind css</h1> */}
      <div className="w-5/12">
        <Qoute />
      </div>
    </div>
  );
}
export default Home;
