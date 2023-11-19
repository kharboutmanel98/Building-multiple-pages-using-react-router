import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import Slider from "@mui/material/Slider";
// import Box from "@mui/material/Box";
import Chip from '@mui/material/Chip';
const label = { inputProps: { "aria-label": "Checkbox demo" } };

// import { Avatar } from "@mui/material";
// import { deepOrange, deepPurple } from "@mui/material/colors";

export default function material() {
  return (
    // mui button
    <>
      <Stack direction="row" spacing={2}>
        <Button
          onClick={() => {
            alert("clicked");
          }}
          color="primary"
          variant="contained"
        >
          Primary
        </Button>
        <Button variant="contained" color="success" size="large">
          Success
        </Button>
        <Button variant="outlined" color="error" size="medium">
          Error
        </Button>
        <Checkbox {...label} />
        <Chip label="primary" color="primary"/>
        <Chip label="success" variant="outlined" color="success" />
      </Stack>

      <Slider
        style={{ width: "100px" }}
        aria-label="Default"
        valueLabelDisplay="auto"
      />
    </>

    // mui Avatar
    // <Stack direction="row" spacing={2}>
    //   <Avatar>H</Avatar>
    //   <Avatar sx={{ bgcolor: deepOrange[500] }}>N</Avatar>
    //   <Avatar sx={{ bgcolor: deepPurple[500] }}>OP</Avatar>
    // </Stack>
  );
}
