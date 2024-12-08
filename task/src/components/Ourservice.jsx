import React from "react";
import { Grid, Typography } from "@mui/material";
import ServiceCard from "../Utility/ServiceCard";
import { GetStarted } from "../Utility/utility";

function OurService() {
  const services = [
    {
      icon: "/assets/os1.png",
      title: "Automotive SEO",
      description:
        "Drive Your Success with Automotive SEO: Ignite Online Visibility and Outrace the Competition. Accelerate Your Business Growth Today.",
    },
    {
      icon: "/assets/os2.png",
      title: "PPC Precision",
      description:
        "Maximize visibility and drive quality traffic with meticulously targeted Pay-Per-Click campaigns.",
    },
    {
      icon: "/assets/os3.png",
      title: "Social Acceleration",
      description:
        "Engage and influence your audience across social media platforms, amplifying your brand's presence and connection.",
    },
    {
      icon: "/assets/os4.png",
      title: "Content Excellence",
      description:
        "Craft compelling, automotive-specific content that resonates with enthusiasts and drives engagement.",
    },
    {
      icon: "/assets/os5.png",
      title: "Web Design",
      description:
        "Transform visitors into customers with high-performance websites designed for seamless user experiences and increased conversions.",
    },
    {
      icon: "/assets/os6.png",
      title: "Data-Driven Insights",
      description:
        "Leverage data to refine your strategies, making informed decisions that drive revenue growth.",
    },
    {
      icon: "/assets/os7.png",
      title: "End-to-End Solutions",
      description:
        "From initial awareness to post-purchase loyalty, we offer full-funnel solutions that guide customers through every step of their journey.",
    },
    {
      icon: "/assets/os8.png",
      title: "Video Marketing",
      description:
        "Unleash the Power of Video Marketing: Captivate, Engage, and Elevate Your Brand with Compelling Visual Stories.",
    },
  ];

  return (
    <div style={{ backgroundColor: "#F5F5F5" }}>
      {/* Header Section */}
      <Grid container spacing={4} sx={{ padding: { xs: "16px", sm: "32px" } }}>
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
            Our Service Offerings
          </Typography>
          <Typography sx={{ textAlign: "center", maxWidth: "600px" }}>
            We offer a wide range of services to help you succeed in the digital
            space.
          </Typography>
        </Grid>
      </Grid>

      {/* Service Cards Section */}
      <Grid container spacing={4} sx={{ padding: { xs: "16px", sm: "32px" } }}>
        {services.map((service, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <ServiceCard
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          </Grid>
        ))}
      </Grid>

      {/* Get Started Button Section */}
      <Grid
        container
        justifyContent="center"
        sx={{ padding: { xs: "16px", sm: "32px" }, textAlign: "center" }}
      >
        <Grid item>
          <GetStarted />
        </Grid>
      </Grid>
    </div>
  );
}

export default OurService;
