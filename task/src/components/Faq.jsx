import {
  Box,
  Grid,
  Paper,
  Typography,
  Collapse,
  IconButton,
} from "@mui/material";
import React, { useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqData = [
    {
      question: "3. How does Osumare measure campaign success?",
      answer:
        "We believe in measurable results. Our data-driven approach means that every campaign's performance is tracked, analyzed, and refined for optimal outcomes. We provide regular reports that detail key metrics, giving you clear insights into how our strategies are driving growth for your brand.",
    },
    {
      question: "3. How does Osumare measure campaign success?",
      answer:
        "We believe in measurable results. Our data-driven approach means that every campaign's performance is tracked, analyzed, and refined for optimal outcomes. We provide regular reports that detail key metrics, giving you clear insights into how our strategies are driving growth for your brand.",
    },
    {
      question: "3. How does Osumare measure campaign success?",
      answer:
        "We believe in measurable results. Our data-driven approach means that every campaign's performance is tracked, analyzed, and refined for optimal outcomes. We provide regular reports that detail key metrics, giving you clear insights into how our strategies are driving growth for your brand.",
    },

    // Add more FAQ items as needed
  ];

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <Grid
        container
        spacing={4}
        sx={{
          padding: { xs: "16px", sm: "32px" },
          backgroundColor: "#f5f5f5",
          height: "90vh",
        }}
      >
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
            Frequently Asked Questions
          </Typography>
          <Typography sx={{ textAlign: "center", maxWidth: "600px" }}>
            Pinpoint your audience with precision, ensuring your marketing
            efforts reach those most likely to engage with your brand.
          </Typography>
          <Grid
            sx={{
              marginTop: "16px",
              boxShadow: "0px 4px 16px rgba(0, 0, 0, 0.1)",
              backgroundColor: "#fff",
              padding: "16px",
            }}
          >
            {faqData.map((item, index) => (
              <>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    backgroundColor:
                      openIndex === index ? "#0648fb" : "inherit", // Apply the color when the question is selected
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: "bold",

                      transition: "color 0.3s", // Smooth color transition
                    }}
                  >
                    {` ${item.question}`}
                  </Typography>
                  <IconButton onClick={() => handleToggle(index)}>
                    <ExpandMoreIcon
                      sx={{
                        transform:
                          openIndex === index
                            ? "rotate(180deg)"
                            : "rotate(0deg)",
                        transition: "transform 0.3s",
                      }}
                    />
                  </IconButton>
                </Box>
                <Collapse in={openIndex === index} timeout="auto" unmountOnExit>
                  <Typography variant="body1" sx={{ marginTop: "8px" }}>
                    {item.answer}
                  </Typography>
                </Collapse>
              </>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default Faq;
