import { Grid, Typography, Button } from "@mui/material";
import React from "react";

function PeaceOfMind() {
  return (
    <Grid
      container
      spacing={2}
      sx={{
        minHeight: "200px", // Full screen height
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: `radial-gradient(circle at center, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0) 60%), linear-gradient(to right, #e3f2fd, #ffe6e6)`, // Glow spot + gradient
        padding: "16px",
      }}
    >
      <Grid
        item
        xs={12}
        sx={{
          textAlign: "center",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            marginBottom: "16px",
            color: "#000", // Text color
          }}
        >
          Your Peace of Mind
        </Typography>
        <Typography
          sx={{
            maxWidth: "600px",
            margin: "0 auto",
            color: "#5a5a5a", // Subtext color
          }}
        >
          Through our conversion-focused strategies, we ensure that property
          seekers are not just visitors, but engaged prospects ready to make
          their next move in the real estate market.
        </Typography>
      </Grid>
      <Grid
        item
        xs={12}
        sx={{
          display: "flex",
          justifyContent: "center",
          marginTop: "24px",
        }}
      >
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#007bff",
            color: "#fff",
            borderRadius: "24px", // Rounded button
            padding: "12px 24px",
            textTransform: "none",
            fontWeight: "bold",
            "&:hover": {
              backgroundColor: "#0056b3",
            },
          }}
        >
          Get started
        </Button>
      </Grid>
    </Grid>
  );
}

export default PeaceOfMind;
