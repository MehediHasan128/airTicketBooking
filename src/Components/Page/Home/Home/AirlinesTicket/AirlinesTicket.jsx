import { Box, Button, ButtonGroup, Divider, Typography } from "@mui/material";
import { BiSolidRightArrow, BiSolidLeftArrow } from "react-icons/bi";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import TicketCard from "../../TicketCard/TicketCard";
import biman from "../../../../../assets/images/bimanLogo.png";
import usBangla from "../../../../../assets/images/usBanglaLogo.png";
import airAstra from "../../../../../assets/images/airAstra.png";
import novo from "../../../../../assets/images/novo.png";

const AirlinesTicket = () => {
  return (
    <div>
      <Box className="w-[80%] mx-auto">
        <div className="flex items-center justify-between">
          <Typography variant="h3">
            <BiSolidLeftArrow className="text-red-500" />
          </Typography>
          <Typography variant="h4">
            <p>Flight from Dhaka to Chittagong</p>
          </Typography>
          <Typography variant="h3">
            <BiSolidRightArrow className="text-red-500" />
          </Typography>
        </div>
      </Box>

      <Box className="flex justify-between gap-5 my-5 bg-white p-3 rounded-lg">
        <div className="bg-gray-100 flex-1 p-4 rounded-md">
          <Typography variant="h6">
            <p className="font-semibold">Cheapest</p>
          </Typography>
          <Typography variant="body1">
            <p>To get the cheapest available flights</p>
          </Typography>
        </div>
        <Divider orientation="vertical" variant="middle" flexItem />
        <div className="flex-1 p-4 rounded-md">
          <Typography variant="h6">
            <p className="font-semibold">Shortest</p>
          </Typography>
          <Typography variant="body1">
            <p>To get the shortest available flights</p>
          </Typography>
        </div>
      </Box>

      <Box className="space-y-5">
        <TicketCard
          ticketPrice={"3,202"}
          airlineLogo={biman}
          time={"45 minutes"}
        />
        <TicketCard
          ticketPrice={"4,502"}
          airlineLogo={biman}
          time={"45 minutes"}
        />
        <TicketCard
          ticketPrice={"2,500"}
          airlineLogo={usBangla}
          time={"1 hour 20 minutes"}
        />
        <TicketCard
          ticketPrice={"2,500"}
          airlineLogo={airAstra}
          time={"1 hour 20 minutes"}
        />
        <TicketCard
          ticketPrice={"2,500"}
          airlineLogo={novo}
          time={"1 hour 20 minutes"}
        />
      </Box>

      <Box className="flex justify-end mt-5">
        <ButtonGroup variant="outlined" aria-label="outlined button group">
          <Button>
            <MdKeyboardArrowLeft className="text-xl" />
          </Button>
          <Button sx={{backgroundColor: 'red', color: 'white'}}>1</Button>
          <Button>2</Button>
          <Button>
            <MdKeyboardArrowRight className="text-xl" />
          </Button>
        </ButtonGroup>
      </Box>
    </div>
  );
};

export default AirlinesTicket;
