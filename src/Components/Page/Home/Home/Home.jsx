import Footer from "../../Footer/Footer";
import Navbar from "../../Navbar/Navbar";
import LeftSideFilter from "../LeftSideFilter/LeftSideFilter";
import AirlinesTicket from "./AirlinesTicket/AirlinesTicket";
import TopFilter from "./TopFilter/TopFilter";

const Home = () => {
  return (
    <div className="bg-slate-50 min-h-screen">
      <Navbar />
      <div className="max-w-[1450px] mx-auto my-5">
        <TopFilter />
        <main>
          <div className="flex flex-col lg:flex-row gap-5 mt-16">
            {/* left side filter */}
            <div className="lg:w-[30%] bg-white rounded-xl p-5 shadow-md h-fit">
              <LeftSideFilter />
            </div>

            {/* Ticket section */}
            <div className="lg:w-[70%] px-5">
              <AirlinesTicket />
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
