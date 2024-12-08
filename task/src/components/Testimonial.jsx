import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import React from "react";

function Testimonial() {
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
            marginBottom: "8px", // Added some spacing
          }}
        >
          What Our Pharma Partners Say
        </Typography>
        <Typography
          variant="h5"
          sx={{ textAlign: "center", maxWidth: "600px" }}
        >
          Driving Transformations, One Brand at a Time
        </Typography>
      </Grid>

      {/* Testimonial Card */}
      <Grid item xs={12} sm={6} md={4}>
        <Card
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "16px",
          }}
        >
          {/* Image Section */}
          <CardMedia
            component="img"
            height="200"
            image="https://via.placeholder.com/150" // Replace with actual image URL
            alt="Testimonial Image"
            sx={{ borderRadius: "50%", marginBottom: "16px" }} // Circular image styling
          />
          {/* Testimonial Text */}
          <CardContent sx={{ textAlign: "center" }}>
            <Typography
              variant="h6"
              sx={{ fontWeight: "bold", marginBottom: "8px" }}
            >
              John Doe
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              "This product has transformed our business! We saw remarkable
              results within the first few weeks."
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}

export default Testimonial;
