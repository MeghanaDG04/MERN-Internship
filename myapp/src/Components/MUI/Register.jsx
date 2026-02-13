import React from 'react';
import { 
  Typography, 
  Button, 
  Paper, 
  TextField, 
  Box 
} from '@mui/material';

export default function Register() {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f4f6f8'
      }}
    >
      <Paper
        elevation={6}
        sx={{
          width: 420,
          padding: 4,
          borderRadius: 3
        }}
      >
        <Typography
          variant="h5"
          align="center"
          fontWeight="bold"
          gutterBottom
        >
          Register
        </Typography>

        <Typography
          variant="body2"
          align="center"
          color="text.secondary"
          mb={3}
        >
          Create your account
        </Typography>

        <TextField
          label="Name"
          fullWidth
          margin="normal"
        />

        <TextField
          label="Email"
          type="email"
          fullWidth
          margin="normal"
        />

        <TextField
          label="Password"
          type="password"
          fullWidth
          margin="normal"
        />

        <TextField
          label="Phone"
          type="number"
          fullWidth
          margin="normal"
        />

        <TextField
          label="Address"
          multiline
          rows={3}
          fullWidth
          margin="normal"
        />

        <Button
          variant="contained"
          color="secondary"
          fullWidth
          size="large"
          sx={{ mt: 2, borderRadius: 2 }}
        >
          Register
        </Button>
      </Paper>
    </Box>
  );
}
