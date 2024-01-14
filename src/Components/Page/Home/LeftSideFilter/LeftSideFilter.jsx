import { Box, Slider, Typography } from "@mui/material";
import { useState } from "react";


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
    if (typeof newValue === 'number') {
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
              <p className="font-semibold">2,500 Taka - {valueLabelFormat(calculateValue(value))} Taka</p>
            </Typography>
          </Box>
        </div>
      </Box>
    </Box>
  );
};

export default LeftSideFilter;
