import { Grid, Typography } from "@mui/material";
import React from "react";
import { GetStarted } from "./utility";

function Hero2() {
  return (
    <Grid container spacing={4} sx={{ padding: { xs: "16px", sm: "32px" } }}>
      {/* Centered Header */}
      <Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            textAlign: "center",
            marginBottom: "16px",
          }}
        >
          Real Estate-Focused Digital Mastery
        </Typography>
      </Grid>

      {/* Left Image Section */}
      <Grid
        item
        xs={12}
        sm={6}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src="/assets/two.png"
          alt="logo"
          style={{
            maxWidth: "100%",
            height: "auto",
          }}
        />
      </Grid>

      {/* Right Text Section */}
      <Grid
        item
        xs={12}
        sm={6}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start", // Align content to the start for better layout
        }}
      >
        <Typography
          variant="h6"
          sx={{
            fontWeight: "bold",
            marginBottom: "16px",
            textAlign: "justify", // Ensures consistent alignment for titles
          }}
        >
          Unlock the Potential of Digital Real Estate Excellence
        </Typography>
        <Typography
          sx={{
            marginBottom: "16px",
            textAlign: "justify", // Ensures consistent alignment for the paragraph
          }}
        >
          At Osumare, we understand that the real estate landscape demands a
          digital presence that aligns with the intricacies of property
          marketing. Our range of specialized services is meticulously designed
          to catapult your brand's success in the ever-evolving digital property
          market.
        </Typography>
        <GetStarted />
      </Grid>
    </Grid>
  );
}

export default Hero2;
