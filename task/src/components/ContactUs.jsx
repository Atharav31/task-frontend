import { Card, Grid, TextField, Typography, Button } from "@mui/material";
import React from "react";
import { GetStarted } from "../Utility/utility";

function ContactUs() {
  return (
    <>
      <Grid
        container
        spacing={4}
        sx={{
          background: `radial-gradient(circle at center, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0) 60%), linear-gradient(to right, #e3f2fd, #ffe6e6)`, // Glow spot + gradient
          padding: { xs: "16px", sm: "32px" },
        }}
      >
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
              marginBottom: "8px",
            }}
          >
            Connect with Our Digital Marketing Experts
          </Typography>
          <Typography sx={{ textAlign: "center", maxWidth: "600px" }}>
            Reach Out for Tailored Strategies and Results-Driven Solutions.
            Let's Elevate Your Online Presence Together
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <Card sx={{ padding: "16px" }}>
            <Grid container spacing={2}>
              {/* Left Side */}
              <Grid item xs={12} sm={6}>
                <Typography variant="body1" sx={{ marginBottom: "8px" }}>
                  Name
                </Typography>
                <TextField
                  fullWidth
                  type="text"
                  placeholder="Enter your name"
                  sx={{ marginBottom: "16px" }}
                />
                <Typography variant="body1" sx={{ marginBottom: "8px" }}>
                  Phone
                </Typography>
                <TextField
                  fullWidth
                  type="text"
                  placeholder="Enter your number"
                  sx={{ marginBottom: "16px" }}
                />
                <Typography variant="body1" sx={{ marginBottom: "8px" }}>
                  Email
                </Typography>
                <TextField
                  fullWidth
                  type="email"
                  placeholder="Enter your email"
                  sx={{ marginBottom: "16px" }}
                />
              </Grid>

              {/* Right Side */}
              <Grid item xs={12} sm={6}>
                <Typography variant="body1" sx={{ marginBottom: "8px" }}>
                  Message
                </Typography>
                <TextField
                  fullWidth
                  multiline
                  rows={10}
                  placeholder="Enter your message"
                  sx={{ marginBottom: "16px" }}
                />
              </Grid>

              {/* Submit Button */}
              <Grid
                item
                xs={12}
                sx={{ display: "flex", justifyContent: "center" }}
              >
                <GetStarted />
              </Grid>
            </Grid>
          </Card>
        </Grid>
      </Grid>
    </>
  );
}

export default ContactUs;
