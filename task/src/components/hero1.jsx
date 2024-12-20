import { Button, Grid, Typography } from "@mui/material";
import React from "react";
import { GetStarted } from "../Utility/utility";

function Hero1() {
  return (
    <>
      {" "}
      <div
        style={{
          backgroundImage: 'url("/assets/background.png")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          position: "relative", // Added to ensure the image is positioned below content
        }}
      >
        <Grid
          container
          direction="column"
          alignItems="center"
          justifyContent="center"
          spacing={4}
          sx={{
            zIndex: 2, // Make sure the content is on top of the image
            position: "relative", // To layer over the background
          }}
        >
          <Grid item>
            <Typography
              variant="h3"
              sx={{
                fontWeight: "bold",
                marginBottom: "16px",
                maxWidth: "899px",
                height: "auto",
                fontSize: { xs: "1.5rem", sm: "2.5rem", md: "3rem" }, // Responsive typography
              }}
            >
              Elevate{" "}
              <span style={{ color: "#0684FB", fontWeight: "bold" }}>
                Real Estate Success
              </span>
              with Osumare's Digital Expertise
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="h6"
              sx={{
                marginBottom: "32px",
                fontSize: { xs: "1rem", sm: "1.25rem", md: "1.5rem" }, // Responsive subheading
              }}
            >
              Tailored Solutions for Thriving in the Digital Real Estate
              Landscape
            </Typography>
          </Grid>
          <Grid item>
            <GetStarted />
          </Grid>
        </Grid>
      </div>
      <img
        src="/assets/house.png"
        alt="hero1"
        style={{
          position: "relative",
          width: "100%",
          height: "auto",
          zIndex: 1,
          top: "-153px",
        }}
      />
    </>
  );
}

export default Hero1;
