import { Grid, Typography } from "@mui/material";
import React from "react";
import { GetStarted } from "../Utility/utility";

function PeaceOfMind() {
  return (
    <>
      <Grid container spacing={4}>
        <Grid
          item
          xs={12}
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontWeight: "bold",
              textAlign: "center",
              marginBottom: "16px",
            }}
          >
            Your Peace of Mind
          </Typography>
          <Typography sx={{ textAlign: "center", maxWidth: "600px" }}>
            Through our conversion-focused strategies, we ensure that property
            seekers are not just visitors, but engaged prospects ready to make
            their next move in the real estate market
          </Typography>
        </Grid>
        <Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
          <GetStarted />
        </Grid>
      </Grid>
    </>
  );
}

export default PeaceOfMind;
