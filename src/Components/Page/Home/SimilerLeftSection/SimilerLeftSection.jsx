import { Box, Radio, Typography } from "@mui/material";
import { pink } from "@mui/material/colors";

const SimilerLeftSection = ({ heading, title, price }) => {
  return (
    <>
      <Box>
        <Typography variant="h6">
          <p className="font-medium">{heading}</p>
        </Typography>

        <div className="flex items-center justify-between mt-3 text-gray-400">
          <div className="flex items-center">
            <Radio
              sx={{
                color: pink[800],
                "&.Mui-checked": {
                  color: pink[600],
                },
              }}
            />
            <label>
              <Typography variant="h6">
                <p>{title}</p>
              </Typography>
            </label>
          </div>
          <Typography variant="h6">
            <p>{price}</p>
          </Typography>
        </div>
      </Box>
    </>
  );
};

export default SimilerLeftSection;
