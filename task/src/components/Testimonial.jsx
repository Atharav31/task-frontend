import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  Box,
  IconButton,
} from "@mui/material";

function Testimonial() {
  return (
    <Box sx={{ padding: { xs: "16px", sm: "32px" }, textAlign: "center" }}>
      {/* Header Section */}
      <Typography
        variant="h4"
        sx={{
          fontWeight: "bold",
          marginBottom: { xs: "16px", sm: "8px" },
          fontSize: { xs: "1.5rem", sm: "2rem" },
        }}
      >
        What Our Pharma Partners Say
      </Typography>
      <Typography
        variant="h6"
        sx={{
          color: "text.secondary",
          marginBottom: "32px",
          fontSize: { xs: "0.9rem", sm: "1.2rem" },
        }}
      >
        Driving Transformations, One Brand at a Time
      </Typography>

      {/* Testimonial Card */}
      <Grid container justifyContent="center">
        <Grid item xs={12} md={10} lg={8}>
          <Card
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              alignItems: "center",
              justifyContent: "space-between",
              padding: "16px",
              borderRadius: "16px",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
            }}
          >
            <Box
              sx={{
                position: "relative",
                width: { xs: "100%", sm: "50%" },
                maxWidth: "800px",
                maxHeight: "400px",
                marginRight: { xs: 0, sm: "16px" },
                marginBottom: { xs: "16px", sm: 0 },
              }}
            >
              <CardMedia
                component="img"
                image="/assets/Tabish.png" // Replace with actual video thumbnail/image URL
                alt="Video Thumbnail"
                sx={{
                  borderRadius: "16px",
                  height: "auto",
                  width: "100%",
                }}
              />
              <IconButton
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  color: "white",
                  backgroundColor: "rgba(0, 0, 0, 0.5)",
                  borderRadius: "50%",
                }}
              >
                <img
                  src="/assets/play.png"
                  alt="Play Icon"
                  style={{ width: "50px", height: "50px" }}
                />
              </IconButton>
            </Box>

            {/* Testimonial Content */}
            <Box sx={{ textAlign: "left", flex: 1 }}>
              <CardContent>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "8px",
                    flexWrap: "wrap",
                  }}
                >
                  <CardMedia
                    component="img"
                    image="/assets/Tabish.png" // Replace with actual profile image
                    alt="Profile Image"
                    sx={{
                      borderRadius: "50%",
                      width: "70px",
                      height: "70px",
                      marginRight: "8px",
                    }}
                  />
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: "bold",

                      marginRight: "8px",
                      fontSize: { xs: "1rem", sm: "1.5rem" },
                    }}
                  >
                    Tabish Khan
                  </Typography>
                  <img
                    src="/assets/quote.png"
                    alt="Quote Icon"
                    style={{ width: "24px" }}
                  />
                </Box>
                <Typography
                  variant="body1"
                  sx={{
                    color: "text.secondary",
                    fontStyle: "italic",
                    fontSize: { xs: "0.85rem", sm: "1rem" },
                  }}
                >
                  Osumare's expertise in pharma marketing is unparalleled. Their
                  strategies helped us navigate complex regulations while
                  driving remarkable growth.
                </Typography>
              </CardContent>
            </Box>
          </Card>
        </Grid>
      </Grid>

      {/* Navigation Buttons */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "16px",
          gap: "16px",
        }}
      >
        <IconButton>
          <img
            src="/assets/prev.png"
            alt="Previous"
            style={{ width: "50px", height: "50px" }}
          />
        </IconButton>
        <IconButton>
          <img
            src="/assets/next.png"
            alt="Next"
            style={{ width: "50px", height: "50px" }}
          />
        </IconButton>
      </Box>
    </Box>
  );
}

export default Testimonial;
