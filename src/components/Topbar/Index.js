import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

export default function SearchAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="sticky" sx={{ backgroundColor: "#D52027" }}>
        <Toolbar>
          <Typography
            variant="h5"
            sx={{
              fontFamily: "Poppins",
              fontWeight: "bold",
            }}
          >
            softcircles
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
