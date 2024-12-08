import React from "react";
import Button from "@mui/material/Button";
import { Grid } from "@mui/material";
import { styled } from "@mui/material/styles";

// Styled component for WholePage
const TopBar = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  position: "sticky",
  height: "125px",
  top: 0,
  zIndex: 1000,
  backdropFilter: "blur(10px)",
  background: "rgba(255, 255, 255, 0.8)",
  padding: "10px 20px",
});

const CustomButton = styled(Button)({
  color: "black",
  borderColor: "black",
  borderRadius: "30px",
  width: "150px",
  fontWeight: "bold",
  textTransform: "capitalize",
});

function Navbar() {
  return (
    <TopBar>
      <Grid container alignItems="center" justifyContent="space-between">
        <Grid item>
          <img
            src="/assets/logo.png"
            alt="logo"
            style={{ height: "100px", width: "172px" }}
          />
        </Grid>
        <Grid item>
          <CustomButton variant="outlined">Contact Us</CustomButton>
        </Grid>
      </Grid>
    </TopBar>
  );
}

export default Navbar;
