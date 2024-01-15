import { Box, Typography } from "@mui/material";
import { HiArrowLongRight } from "react-icons/hi2";
import { MdKeyboardArrowDown } from "react-icons/md";

const TicketCard = ({ ticketPrice, airliensName, airlineLogo, time }) => {
  return (
    <>
      <Box className="bg-white p-5 rounded-lg shadow-xl">
        <Box className="flex flex-col md:flex-row justify-between">
          <div className="md:w-[30%]">
            <div className="mb-16">
              <img className="w-[30%]" src={airlineLogo} alt="" />
              <Typography variant="caption text">
                <p className="font-semibold text-gray-400">{airliensName}</p>
              </Typography>
            </div>
          </div>

          <div className="flex justify-between md:w-[70%]">
            <div>
              <Typography variant="caption text">
                <p className="font-semibold text-gray-400 mb-2">Depart</p>
              </Typography>
              <Typography variant="h5">
                <p className="font-semibold">19:00</p>
              </Typography>
              <Typography variant="body1">
                <p className="font-semibold mb-2">Sat, 13 Jan 2024</p>
              </Typography>
              <Typography variant="body1">
                <p>Dhaka (DAC)</p>
              </Typography>
            </div>
            <div className="text-center flex-1">
              <Typography variant="body1">
                <p className="text-gray-400">{time}</p>
              </Typography>
              <div className="w-full mx-auto">
                <div className="flex items-center justify-center">
                  <hr className="border-2 w-[30%] relative left-4 border-red-500" />
                  <HiArrowLongRight className="text-7xl text-red-500" />
                </div>
              </div>
              <Typography variant="body1">
                <p className="text-gray-400">Non Stop</p>
              </Typography>
            </div>
            <div className="text-right">
              <div className="mb-16">
                <Typography variant="caption text">
                  <p className="text-gray-400 font-semibold mb-2">Arrive</p>
                </Typography>
                <Typography variant="h6">
                  <p className="font-semibold">19:45</p>
                </Typography>
                <Typography variant="body1">
                  <p className="font-semibold mb-2">Sat, 13 Jan 2024</p>
                </Typography>
                <Typography variant="body1">
                  <p>Chittagong (CGP)</p>
                </Typography>
              </div>
            </div>
          </div>
        </Box>

        <Box className="flex items-center justify-between">
          <div>
            <Typography variant="caption text">
              <p className="font-semibold text-gray-400 mb-3">Price</p>
            </Typography>
            <Typography variant="h5">
              <p className="font-semibold mb-2">BDT {ticketPrice}</p>
            </Typography>
            <Typography variant="body1">
              <p className="font-semibold text-green-500">
                Partially Refundable
              </p>
            </Typography>
          </div>
          <div>
            <button className="px-5 py-3 bg-red-600 text-white rounded-md font-medium">
              Book Now
            </button>
            <div className="mt-5 flex items-center gap-1 text-red-600">
              <Typography variant="body1">
                <p className="font-semibold">Flight Details</p>
              </Typography>
              <MdKeyboardArrowDown className="text-2xl" />
            </div>
          </div>
        </Box>
      </Box>
    </>
  );
};

export default TicketCard;
