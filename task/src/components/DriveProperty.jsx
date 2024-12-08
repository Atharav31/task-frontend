// File: DriveProperty.js
import { Grid, Typography } from "@mui/material";
import React from "react";
import PropertyCard from "../Utility/PropertyCard";

function DriveProperty() {
  // Define an array of data objects with icon, title, and description
  const data = [
    {
      icon: "/assets/d1.png",
      title: "Call-to-Action Optimization",
      description:
        "Our carefully crafted CTAs guide potential buyers through the property journey, enhancing engagement and conversion rates.",
    },
    {
      icon: "/assets/d2.png",
      title: "Landing Page Efficiency",
      description:
        "Tailored landing pages are designed for maximum property lead conversion. They provide seamless user experiences and clear pathways for inquiry submission.",
    },
    {
      icon: "/assets/d3.png",
      title: "Social Proof Utilization",
      description:
        "Leverage the power of testimonials and success stories from satisfied buyers to build trust and credibility, encouraging hesitant prospects to take action",
    },
    {
      icon: "/assets/d4.png",
      title: "Mobile-Friendly Experience",
      description:
        "With a responsive design approach, our strategies ensure a seamless browsing experience across all devices. This responsiveness enhances engagement and conversions by accommodating the preferences of on-the-go property seekers.",
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
          Driving Property Inquiries to Conversions
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
