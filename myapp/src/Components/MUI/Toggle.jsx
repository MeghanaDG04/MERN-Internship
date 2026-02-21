import React, { useState } from "react";
import {ThemeProvider,createTheme,} from "@mui/material/styles";
import {
  CssBaseline,
  Box,
  Typography,
  Button,
  Paper,
} from "@mui/material";

export default function Toggle() {
  const [darkMode, setDarkMode] = useState(false);

  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Paper elevation={6} sx={{ padding: 5, textAlign: "center", borderRadius: 3 }}>
          <Typography variant="h4" gutterBottom>
            {darkMode ? "Dark Mode" : "Light Mode"}
          </Typography>

          <Button
            variant="contained"
            onClick={() => setDarkMode(!darkMode)}
          >
            Switch to {darkMode ? "Light Mode" : "Dark Mode"}
          </Button>
        </Paper>
      </Box>
    </ThemeProvider>
  );
}