// File: PropertyCard.js
import { Box, Typography } from "@mui/material";
import React from "react";

function PropertyCard({ icon, title, description }) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "16px",
        textAlign: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "64px",
          height: "64px",
          margin: "0 auto 16px",
          backgroundColor: "#f4f4f4",
          borderRadius: "50%",
        }}
      >
        <img
          src={icon}
          alt={`${title} Icon`}
          style={{ width: "92px", height: "92px" }}
        />
      </Box>
      <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: "8px" }}>
        {title}
      </Typography>
      <Typography sx={{ padding: "0 8px" }}>{description}</Typography>
    </Box>
  );
}

export default PropertyCard;
