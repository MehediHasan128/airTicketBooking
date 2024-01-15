import { Typography } from "@mui/material";
import Footer from "../../Footer/Footer";
import Navbar from "../../Navbar/Navbar";
import LeftSideFilter from "../LeftSideFilter/LeftSideFilter";
import AirlinesTicket from "./AirlinesTicket/AirlinesTicket";
import TopFilter from "./TopFilter/TopFilter";

import { FaFilter } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";

const Home = () => {
  return (
    <div className="bg-slate-50 min-h-screen">
      <Navbar />
      <div className="max-w-[1450px] mx-auto md:my-5 mt-5">
        <TopFilter />
        <main>
          <div className="flex flex-col lg:flex-row gap-5 mt-16">
            {/* Modal Section */}
            <div className="flex lg:hidden items-center justify-between bg-white px-7 py-4 mx-5 rounded-md shadow-md">
              <Typography variant="h6">
                <p>Filter your search results</p>
              </Typography>

              <div>
                <button
                  className="p-3"
                  onClick={() =>
                    document.getElementById("my_modal_5").showModal()
                  }
                >
                  <FaFilter className="text-2xl" />
                </button>
                <dialog
                  id="my_modal_5"
                  className="modal modal-bottom sm:modal-middle"
                >
                  <div className="modal-box">
                    <form className="flex justify-end" method="dialog">
                      {/* if there is a button in form, it will close the modal */}
                      <button className="p-3">
                        <RxCross2 className="text-2xl" />
                      </button>
                    </form>
                    <div className="modal-action">
                      <LeftSideFilter className="text-2xl" />
                    </div>
                  </div>
                </dialog>
              </div>
            </div>

            {/* left side filter */}
            <div className="hidden lg:flex w-[30%] bg-white rounded-xl p-5 shadow-md h-fit">
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
