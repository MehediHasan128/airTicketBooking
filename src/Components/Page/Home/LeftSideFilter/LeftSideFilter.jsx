import {
  Box,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Slider,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { pink } from "@mui/material/colors";

// React Icon
import { BsSunrise, BsSunset } from "react-icons/bs";
import { MdOutlineWbSunny } from "react-icons/md";
import SimilerLeftSection from "../similerLeftSection/similerLeftSection";

function valueLabelFormat(value) {
  let scaledValue = value;

  return `${scaledValue}`;
}

function calculateValue(value) {
  return value;
}

const LeftSideFilter = () => {
  const [value, setValue] = useState(3500);

  const handleChange = (event, newValue) => {
    if (typeof newValue === "number") {
      setValue(newValue);
    }
  };

  return (
    <Box>
      {/* Countdown section */}
      <Box className="flex justify-center">
        <div>
          <div className="mb-3">
            <Typography variant="h5">
              <p>Session Timeout in</p>
            </Typography>
          </div>

          {/* Countdown */}
          <div className="flex gap-5 text-center auto-cols-max">
            <div>
              <div className="p-2 rounded-box bg-red-400">
                <span className="countdown font-mono text-5xl">
                  <span style={{ "--value": 24 }}></span>
                </span>
              </div>
              min
            </div>
            <div>
              <Typography variant="h4">
                <p className="mt-[10px]">:</p>
              </Typography>
            </div>
            <div>
              <div className="p-2 rounded-box bg-red-400">
                <span className="countdown font-mono text-5xl">
                  <span style={{ "--value": 37 }}></span>
                </span>
              </div>
              sec
            </div>
          </div>
        </div>
      </Box>

      <div className="my-8 border">
        <hr />
      </div>

      {/* Price Section */}
      <Box>
        <div>
          {/* Slider text */}
          <Typography variant="h5">
            <p className="font-medium">One way Price</p>
          </Typography>

          {/* Slider */}
          <Box sx={{ width: "90%" }}>
            <Slider
              value={value}
              min={2000}
              step={1}
              max={6500}
              color="warning"
              scale={calculateValue}
              getAriaValueText={valueLabelFormat}
              valueLabelFormat={valueLabelFormat}
              onChange={handleChange}
              valueLabelDisplay="auto"
              aria-labelledby="non-linear-slider"
            />
            <Typography variant="body1" id="non-linear-slider" gutterBottom>
              <p className="font-semibold">
                2,500 Taka - {valueLabelFormat(calculateValue(value))} Taka
              </p>
            </Typography>
          </Box>
        </div>
      </Box>

      <div className="my-8 border">
        <hr />
      </div>

      {/* Departure Time */}
      <Box>
        <Typography variant="h5">
          <p className="font-medium">Departure time in Dhaka</p>
        </Typography>

        {/* Departue Box */}
        <Box className="mt-5 flex flex-wrap gap-5">
          <div className="text-center border-2 border-black w-fit p-5 rounded-lg shadow-lg">
            <BsSunrise className="text-3xl w-fit mx-auto" />
            <Typography variant="body1">
              <p className="font-semibold">Morning</p>
            </Typography>
            <Typography variant="body2">
              <p>06:00-11:59 (5)</p>
            </Typography>
          </div>
          <div className="text-center border-2 border-black w-fit p-5 rounded-lg shadow-lg">
            <MdOutlineWbSunny className="text-3xl w-fit mx-auto" />
            <Typography variant="body1">
              <p className="font-semibold">After Noon</p>
            </Typography>
            <Typography variant="body2">
              <p>12:00-17:59 (5)</p>
            </Typography>
          </div>
          <div className="text-center border-2 border-black w-fit p-5 rounded-lg shadow-lg">
            <BsSunset className="text-3xl w-fit mx-auto" />
            <Typography variant="body1">
              <p className="font-semibold">Evening</p>
            </Typography>
            <Typography variant="body2">
              <p>18:00-23:59 (7)</p>
            </Typography>
          </div>
        </Box>
      </Box>

      <div className="my-5 border">
        <hr />
      </div>

      {/* Stop section */}
      <Box>
        <SimilerLeftSection
          heading={"Stop From Dhaka"}
          title={"Non Stop (15)"}
          price={"BDT 3,050"}
        />
      </Box>

      <div className="my-5 border">
        <hr />
      </div>

      {/* Baggage Allowance section */}
      <Box>
        <SimilerLeftSection
          heading={"Check in Baggage Allowance"}
          title={"20 KG (15)"}
        />
      </Box>

      <div className="my-5 border">
        <hr />
      </div>

      {/* Refund section */}
      <Box>
        <SimilerLeftSection
          heading={"Refundable"}
          title={"Partially Refundable (15)"}
        />
      </Box>

      <div className="my-5 border">
        <hr />
      </div>

      {/* Departing or arriving section */}
      <Box className="flex justify-start gap-20 items-center">
        <div>
          <SimilerLeftSection heading={"Departing from"} title={"DAC"} />
        </div>
        <div>
          <SimilerLeftSection heading={"Arriving at"} title={"CGP"} />
        </div>
      </Box>

      <div className="my-5 border">
        <hr />
      </div>

      {/* Airlines Section */}
      <Box>
        <div>
          <Typography variant="h6">
            <p className="font-medium">Airline</p>
          </Typography>
        </div>
        <div>
          <FormControl sx={{ width: "100%" }}>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="Biman Bangladesh Airlines"
              name="radio-buttons-group"
            >
              <div className="flex justify-between items-center">
                <FormControlLabel
                  value="Biman Bangladesh Airlines"
                  control={
                    <Radio
                      sx={{
                        color: pink[800],
                        "&.Mui-checked": {
                          color: pink[600],
                        },
                      }}
                    />
                  }
                  label="Biman Bangladesh Airlines"
                />
                <label>
                  <Typography variant="h6">
                    <p className="text-gray-500">BDT 3,020</p>
                  </Typography>
                </label>
              </div>
              <div className="flex justify-between items-center">
                <FormControlLabel
                  value="US Bangla Airlines"
                  control={
                    <Radio
                      sx={{
                        color: pink[800],
                        "&.Mui-checked": {
                          color: pink[600],
                        },
                      }}
                    />
                  }
                  label="US Bangla Airlines"
                />
                <label>
                  <Typography variant="h6">
                    <p className="text-gray-500">BDT 5,600</p>
                  </Typography>
                </label>
              </div>
              <div className="flex justify-between items-center">
                <FormControlLabel
                  value="AirAstra"
                  control={
                    <Radio
                      sx={{
                        color: pink[800],
                        "&.Mui-checked": {
                          color: pink[600],
                        },
                      }}
                    />
                  }
                  label="AirAstra"
                />
                <label>
                  <Typography variant="h6">
                    <p className="text-gray-500">BDT 6,000</p>
                  </Typography>
                </label>
              </div>
              <div className="flex justify-between items-center">
                <FormControlLabel
                  value="NovoAir"
                  control={
                    <Radio
                      sx={{
                        color: pink[800],
                        "&.Mui-checked": {
                          color: pink[600],
                        },
                      }}
                    />
                  }
                  label="NovoAir"
                />
                <label>
                  <Typography variant="h6">
                    <p className="text-gray-500">BDT 2,500</p>
                  </Typography>
                </label>
              </div>
            </RadioGroup>
          </FormControl>
        </div>
      </Box>

      <div className="my-5 border">
        <hr />
      </div>

      <Box>
        <SimilerLeftSection
          heading={"Trabsit Time in (Dhaka - Chittagong)"}
          title={"No Transit (15)"}
        />
      </Box>

      {/* Button Section */}
      <button className="border border-red-500 w-full py-4 rounded-lg text-red-500 font-medium my-10 text-xl hover:bg-red-500 hover:text-white duration-500">
        Clear Filter
      </button>
    </Box>
  );
};

export default LeftSideFilter;
