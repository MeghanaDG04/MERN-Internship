import React, { useState } from "react";
import { Box, Typography, Button, Stack, Paper } from "@mui/material";

export default function CounterComponent() {
  const [count, setCount] = useState(0);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        background: "linear-gradient(to right, #667eea, #764ba2)",
      }}
    >
      <Paper elevation={6} sx={{ padding: 5, textAlign: "center", borderRadius: 3 }}>
        <Typography variant="h4" gutterBottom>
          Counter App
        </Typography>

        <Typography variant="h3" sx={{ marginBottom: 3 }}>
          {count}
        </Typography>

        <Stack direction="row" spacing={2} justifyContent="center">
          <Button
            variant="contained"
            color="success"
            onClick={() => setCount(count + 1)}
          >
            Increment
          </Button>

          <Button
            variant="contained"
            color="error"
            onClick={() => setCount(count - 1)}
          >
            Decrement
          </Button>

          <Button
            variant="outlined"
            onClick={() => setCount(0)}
          >
            Reset
          </Button>
        </Stack>
      </Paper>
    </Box>
  );
}