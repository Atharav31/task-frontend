import { Grid, Typography, Box, Paper } from "@mui/material";
import React from "react";

function Insites() {
  const insights = [
    {
      icon: "/assets/i1.png", // Use the correct path for your images
      title: "Market Trends Analysis",
      description: "Predictive insights to guide real estate strategies.",
    },
    {
      icon: "/assets/i2.png", // Use the correct path for your images
      title: "Targeted Buyer Persona",
      description: "Understand and connect with your ideal property buyers.",
    },
    {
      icon: "/assets/i3.png", // Use the correct path for your images
      title: "Competitor Insights",
      description: "Stand out in the property market with informed strategies.",
    },
    {
      icon: "/assets/i4.png", // Use the correct path for your images
      title: "Visual Content Appeal",
      description:
        "Captivate buyers with appealing visuals and immersive experiences.",
    },
  ];

  return (
    <Box sx={{ padding: "32px" }}>
      <Grid container spacing={4}>
        {/* Heading Section */}
        <Grid
          item
          xs={12}
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            textAlign: "center",
            marginBottom: "32px",
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontWeight: "bold",
              marginBottom: "8px",
            }}
          >
            Navigating Real Estate's Digital Landscape
          </Typography>
          <Typography variant="body1">
            Insights for Real Estate Marketing Advantage
          </Typography>
        </Grid>

        {/* Left Side: Insights Section */}
        <Grid item xs={12} md={6}>
          <Grid container spacing={2}>
            {insights.map((insight, index) => (
              <Grid item xs={12} key={index}>
                <Paper
                  elevation={3}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    padding: "16px",
                    borderRadius: "8px",
                  }}
                >
                  <Box
                    sx={{
                      marginRight: "16px",
                    }}
                  >
                    <img
                      src={insight.icon}
                      alt={`${insight.title} Icon`} // Use the insight.title dynamically
                      style={{ width: "42px", height: "42px" }}
                    />
                  </Box>
                  <Box>
                    <Typography
                      variant="h6"
                      sx={{ fontWeight: "bold", marginBottom: "4px" }}
                    >
                      {insight.title}
                    </Typography>
                    <Typography variant="body2">
                      {insight.description}
                    </Typography>
                  </Box>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Grid>

        {/* Right Side: Illustration Section */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            component="img"
            src="/assets/teacher.png" // Replace with your illustration URL
            alt="We Are Expert Illustration"
            sx={{
              maxWidth: "100%",
              height: "auto",
              borderRadius: "8px",
              backgroundColor: "#F5F5F5",
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
}

export default Insites;
