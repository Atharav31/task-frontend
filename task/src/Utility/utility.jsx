import { Button } from "@mui/material";

export const GetStarted = () => {
  return (
    <Button
      variant="contained"
      sx={{
        backgroundColor: "#0684FB",
        padding: { xs: "10px 20px", sm: "12px 24px" },
        borderRadius: "30px",
        width: { xs: "100%", sm: "auto" },
        fontSize: { xs: "0.875rem", sm: "1rem" },
        transition: "all 0.3s ease", // Smooth transition for hover effect
        "&:hover": {
          boxShadow: "0 0 20px 2px rgba(6, 132, 251, 0.7)", // Glowing effect
        },
      }}
    >
      Get Started
    </Button>
  );
};
