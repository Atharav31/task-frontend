import React from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";

const ServiceCard = ({ icon, title, description }) => {
  return (
    <Card
      sx={{
        borderRadius: "16px",
        boxShadow: "0px 4px 16px rgba(0, 0, 0, 0.1)",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "300px", // Set fixed height
      }}
    >
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
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
            style={{ width: "42px", height: "42px" }}
          />
        </Box>
        <Typography
          variant="h6"
          sx={{ fontWeight: "bold", marginBottom: "8px" }}
        >
          {title}
        </Typography>
        <Typography sx={{ textAlign: "center", padding: "0 8px" }}>
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
