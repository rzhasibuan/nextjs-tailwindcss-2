// const { default: Qoute } = require("../components/Qoute");
import Ring from "../components/Ring";

function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-300">
      <div className="w-5/12">
        <Ring />
      </div>
      {/* <h1>Hello nextjs with tailwind css</h1> */}
    </div>
  );
}
export default Home;
