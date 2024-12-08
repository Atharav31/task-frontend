import { Grid, Typography } from "@mui/material";
import React from "react";

function Footer() {
  return (
    <>
      <div
        style={{
          border: "1px solid #ddd",
          borderRadius: "10px",
          margin: "20px",
          background:
            "linear-gradient(261.57deg, rgba(0, 111, 237, 0.12) 18.01%, rgba(179, 214, 255, 0.12) 90.03%)",
          padding: "20px",
        }}
      >
        <Grid container spacing={4}>
          {/* Left Section */}
          <Grid item xs={6} sm={3} style={{}}>
            <img src="/assets/logo.png" alt="logo" style={{ height: "50px" }} />
            <Typography variant="body1" style={{ marginTop: "20px" }}>
              The best digital marketing agency in Pune with a proven track
              record of consistently delivering quality service.
            </Typography>
            <Typography variant="h6" style={{ marginTop: "20px" }}>
              Address
            </Typography>
            <Typography variant="body1">
              Survey No. 43, Pathare Thube Nagar, Nagar Road, Kharadi, Pune-14,
              Maharashtra, India.
            </Typography>
            <Typography variant="h6" style={{ marginTop: "20px" }}>
              Contacts
            </Typography>
            <Typography variant="body1">hello@osumare.in</Typography>
            <Typography variant="body1">+91 8459 8762 26</Typography>
          </Grid>

          {/* Menu Section */}
          <Grid item xs={6} sm={4} style={{ textAlign: "center" }}>
            <Typography variant="h6">Menu</Typography>
            <Typography variant="body1">Home</Typography>
            <Typography variant="body1">About</Typography>
            <Typography variant="body1">Services</Typography>
            <Typography variant="body1">Work</Typography>
            <Typography variant="body1">Blog</Typography>
            <Typography variant="body1">Career</Typography>
          </Grid>

          {/* Social Section */}
          <Grid item xs={6} sm={3} style={{}}>
            <Typography variant="h6">Social</Typography>
            <div style={{ display: "flex", gap: "5px", marginTop: "10px" }}>
              <img
                src="/assets/s1.png"
                alt="X"
                style={{ height: "40px", width: "40px" }}
              />
              <img
                src="/assets/s2.png"
                alt="Facebook"
                style={{ height: "40px", width: "40px" }}
              />
              <img
                src="/assets/s3.png"
                alt="Youtube"
                style={{ height: "40px", width: "40px" }}
              />
              <img
                src="/assets/s4.png"
                alt="Instagram"
                style={{ height: "40px", width: "40px" }}
              />
            </div>
            <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
              <img
                src="/assets/s5.png"
                alt="WhatsApp"
                style={{ height: "40px", width: "40px" }}
              />
              <img
                src="/assets/s6.png"
                alt="Pinterest"
                style={{ height: "40px", width: "40px" }}
              />
            </div>
          </Grid>
        </Grid>
      </div>
      <Grid container justifyContent="center" style={{ marginTop: "20px" }}>
        <Typography variant="body2">
          &copy; 2023 Osumare. All rights reserved.
        </Typography>
      </Grid>
    </>
  );
}

export default Footer;
