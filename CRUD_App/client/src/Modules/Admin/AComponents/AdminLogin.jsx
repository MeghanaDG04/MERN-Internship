import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Box, TextField, Button, Typography, Paper, Alert, Avatar } from '@mui/material'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'

export default function AdminLogin() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleLogin = (e) => {
    e.preventDefault()
    setError('')

    if (email === 'admin@gmail.com' && password === 'Admin@123') {
      localStorage.setItem('adminLoggedIn', JSON.stringify({ email, role: 'admin' }))
      navigate('/admin/dashboard')
    } else {
      setError('Invalid email or password')
    }
  }

  return (
    <Box sx={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    }}>
      <Paper elevation={10} sx={{
        p: 5,
        width: 400,
        borderRadius: 4,
        background: 'rgba(255,255,255,0.95)',
        backdropFilter: 'blur(10px)',
        textAlign: 'center',
      }}>
        <Avatar sx={{
          m: 'auto', mb: 2,
          bgcolor: '#764ba2',
          width: 56, height: 56,
        }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography variant="h5" fontWeight={700} mb={1}>
          Admin Login
        </Typography>
        <Typography variant="body2" color="text.secondary" mb={3}>
          Sign in to access the admin panel
        </Typography>

        {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}

        <form onSubmit={handleLogin}>
          <TextField
            fullWidth label="Email" type="email" variant="outlined"
            value={email} onChange={(e) => setEmail(e.target.value)}
            required sx={{ mb: 2 }}
          />
          <TextField
            fullWidth label="Password" type="password" variant="outlined"
            value={password} onChange={(e) => setPassword(e.target.value)}
            required sx={{ mb: 3 }}
          />
          <Button
            type="submit" fullWidth variant="contained" size="large"
            sx={{
              py: 1.5, borderRadius: 3, fontWeight: 700, fontSize: '1rem',
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              '&:hover': { background: 'linear-gradient(135deg, #5a6fd6 0%, #6a4190 100%)' },
            }}
          >
            Sign In
          </Button>
        </form>
      </Paper>
    </Box>
  )
}
