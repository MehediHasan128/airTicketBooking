import { Box, Slider, Typography } from "@mui/material";
import { useState } from "react";

// React Icon
import { BsSunrise, BsSunset } from "react-icons/bs";
import { MdOutlineWbSunny } from "react-icons/md";

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
          <Box sx={{ width: 250 }}>
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
    </Box>
  );
};

export default LeftSideFilter;
