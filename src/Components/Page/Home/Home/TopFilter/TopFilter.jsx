import {
  Box,
  Divider,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";

import { PiArrowsLeftRightLight } from "react-icons/pi";
import { pink } from "@mui/material/colors";

const TopFilter = () => {
  return (
    <div>
      <>
        <Box className="bg-white px-10 py-3 rounded-xl shadow-md">
            {/* Radio group section */}
          <Box>
            <FormControl>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
              >
                <FormControlLabel
                  value="One Way"
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
                  label="One Way"
                />
                <FormControlLabel
                  value="Round Trip"
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
                  label="Round Trip"
                />
                <FormControlLabel
                  value="Multi City"
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
                  label="Multi City"
                />
              </RadioGroup>
            </FormControl>
          </Box>

          <Box className="flex gap-10">
            <Box className="relative">
              <div className="flex">
                <div className="border w-80 px-5 py-3 rounded-lg text-gray-600">
                  <Typography variant="body1">
                    <p className="text-xs">From</p>
                  </Typography>
                  <Typography variant="h5">
                    <p className="font-semibold">Dhaka</p>
                  </Typography>
                  <Typography variant="body1">
                    <p className="text-xs">
                      Hazrat Shahjalal International Airport
                    </p>
                  </Typography>
                </div>
                <div className="border w-80 px-10 py-3 rounded-lg text-gray-600">
                  <Typography variant="body1">
                    <p className="text-xs">To</p>
                  </Typography>
                  <Typography variant="h5">
                    <p className="font-semibold">Chittagong</p>
                  </Typography>
                  <Typography variant="body1">
                    <p className="text-xs">Shah Amanat International</p>
                  </Typography>
                </div>
              </div>
              <div className="w-fit border p-2 rounded-full bg-white shadow-md absolute top-5 left-[46%]">
                <PiArrowsLeftRightLight className="text-4xl text-red-600" />
              </div>
            </Box>
            <Box>
              <div className="flex gap-3">
                <div className="flex items-center justify-between gap-10 border px-5 py-3 rounded-lg text-gray-600">
                  <div>
                    <Typography variant="body1">
                      <p className="text-xs">Departure</p>
                    </Typography>
                    <Typography variant="h6">
                      <p className="font-semibold">14 Jan 24</p>
                    </Typography>
                    <Typography variant="body1">
                      <p className="text-xs">Sunday</p>
                    </Typography>
                  </div>
                  <Divider orientation="vertical" />
                  <div>
                    <Typography variant="body1">
                      <p className="text-xs">Return</p>
                    </Typography>
                    <Typography variant="body1">
                      <p className="text-sm">Tap to book return ticket</p>
                    </Typography>
                    <Typography variant="body1">
                      <p className="text-xs">For more saving</p>
                    </Typography>
                  </div>
                </div>
                <div className="border w-72 px-5 py-3 rounded-lg text-gray-600">
                  <Typography variant="body1">
                    <p className="text-xs">Travelers & Booking Class</p>
                  </Typography>
                  <Typography variant="h5">
                    <p className="font-semibold">1 Traveler</p>
                  </Typography>
                  <Typography variant="body1">
                    <p className="text-xs">Economy</p>
                  </Typography>
                </div>
              </div>
            </Box>
          </Box>

          {/* Feat section */}
          <Box className="mt-3 flex items-center gap-3">
            <div>
              <Typography variant="body1">
                <p className="font-semibold">Fare Type:</p>
              </Typography>
            </div>
            <div>
              <FormControl>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                >
                  <div className="flex gap-3">
                    <div className="bg-red-100 px-2 rounded-md">
                      <FormControlLabel
                        value="Regular Fares"
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
                        label="Regular Fares"
                      />
                    </div>
                    <div className="bg-red-100 px-2 rounded-md">
                      <FormControlLabel
                        value="Seaman Fares"
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
                        label="Seaman Fares"
                      />
                    </div>
                  </div>
                </RadioGroup>
              </FormControl>
            </div>
          </Box>
        </Box>
      </>
    </div>
  );
};

export default TopFilter;
