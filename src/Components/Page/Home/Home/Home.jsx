import Navbar from "../../Navbar/Navbar";
import LeftSideFilter from "../LeftSideFilter/LeftSideFilter";
import AirlinesTicket from "./AirlinesTicket/AirlinesTicket";
import TopFilter from "./TopFilter/TopFilter";

const Home = () => {
  return (
    <div className="bg-slate-50 min-h-screen">
      <Navbar />
      <div className="max-w-[1600px] mx-auto my-5">
        <TopFilter />
        
        <main>
            <div className="flex gap-5 mt-16">
                {/* left side filter */}
                <div className="w-[30%] bg-white rounded-xl p-5 shadow-md h-fit">
                    <LeftSideFilter />
                </div>

                {/* Ticket section */}
                <div className="w-[70%] px-5">
                    <AirlinesTicket />
                </div>
            </div>
        </main>
      </div>
    </div>
  );
};

export default Home;
