// File: DriveProperty.js
import { Grid, Typography } from "@mui/material";
import React from "react";
import PropertyCard from "../Utility/PropertyCard";

function DriveProperty() {
  // Define an array of data objects with icon, title, and description
  const data = [
    {
      icon: "/assets/a1.png",
      title: "Effective CTAs",
      description:
        " See how our strategic CTAs drove a significant increase in property inquiries and accelerated sales for a real estate agency.",
    },
    {
      icon: "/assets/a2.png",
      title: "Conversion-Optimized Landing Pages",
      description:
        "Tailored landing pages are designed for maximum property lead conversion. They provide seamless user experiences and clear pathways for inquiry submission.",
    },
    {
      icon: "/assets/a3.png",
      title: "Trust Building with Social Proof",
      description:
        "Discover how leveraging client testimonials boosted buyer confidence, leading to higher conversion rates for a property development project",
    },
    {
      icon: "/assets/a4.png",
      title: "Mobile-First Success:",
      description:
        " Learn how our mobile-responsive design approach resulted in a 25% increase in inquiries from mobile users for a real estate agency.",
    },
  ];

  return (
    <Grid container spacing={4} sx={{ padding: { xs: "16px", sm: "32px" } }}>
      <Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            textAlign: "center",
            marginBottom: "16px",
          }}
        >
          Our Expert in Action{" "}
        </Typography>
      </Grid>

      {/* Map through the data array and use the PropertyCard utility */}
      {data.map((item, index) => (
        <Grid item xs={12} md={6} key={index}>
          <PropertyCard
            icon={item.icon}
            title={item.title}
            description={item.description}
          />
        </Grid>
      ))}
    </Grid>
  );
}

export default DriveProperty;
