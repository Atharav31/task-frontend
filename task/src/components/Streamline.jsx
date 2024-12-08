import { Grid, Typography } from "@mui/material";
import React from "react";
import { GetStarted } from "../Utility/utility";

function Streamline() {
  return (
    <Grid container spacing={4} sx={{ padding: { xs: "16px", sm: "32px" } }}>
      {/* Centered Header */}
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
          Driving Property Inquiries to Conversions{" "}
        </Typography>
        <Typography sx={{ textAlign: "center", maxWidth: "600px" }}>
          Streamlined Strategies for Real Estate Success
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
          src="/assets/searchHouse.png"
          alt="logo"
          style={{
            maxWidth: "100%",
            height: "auto",
          }}
        />
      </Grid>

      <Grid
        item
        xs={12}
        sm={6}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
        }}
      >
        <Typography
          variant="h6"
          sx={{
            fontWeight: "bold",
            marginBottom: "16px",
            textAlign: "justify",
          }}
        >
          Optimized Path to Property Purchase
        </Typography>
        <Typography
          sx={{
            marginBottom: "16px",
            // textAlign: "justify",
          }}
        >
          In the dynamic realm of real estate, the journey from a property
          inquiry to a successful conversion demands a well-crafted approach. At
          Osumare, we specialize in guiding potential buyers through this
          journey seamlessly, maximizing inquiries-turned-conversions with
          expert strategies.
        </Typography>
        <GetStarted />
      </Grid>
    </Grid>
  );
}

export default Streamline;
