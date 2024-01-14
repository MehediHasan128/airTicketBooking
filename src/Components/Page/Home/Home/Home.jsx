import Navbar from "../../Navbar/Navbar";
import LeftSideFilter from "../LeftSideFilter/LeftSideFilter";
import TopFilter from "./TopFilter/TopFilter";

const Home = () => {
  return (
    <div className="bg-slate-50 min-h-screen">
      <Navbar />
      <div className="max-w-[1600px] mx-auto">
        <TopFilter />
        
        <main>
            <div className="flex gap-10 border mt-10">
                {/* left side filter */}
                <div className="w-[30%] bg-white rounded-xl p-5 border border-red-600">
                    <LeftSideFilter />
                </div>

                {/* Ticket section */}
                <div className="w-[70%] border border-green-500">
                    <h1>This is ticket section</h1>
                </div>
            </div>
        </main>
      </div>
    </div>
  );
};

export default Home;
