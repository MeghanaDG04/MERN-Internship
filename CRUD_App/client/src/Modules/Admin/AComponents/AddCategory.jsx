import React, { useState } from 'react'
import { Box, Typography, Paper, TextField, Button, Alert } from '@mui/material'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline'

export default function AddCategory() {
  const [category, setCategory] = useState('')
  const [success, setSuccess] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!category.trim()) return

    const existing = JSON.parse(localStorage.getItem('categories')) || []
    existing.push({ name: category.trim(), id: Date.now() })
    localStorage.setItem('categories', JSON.stringify(existing))
    setCategory('')
    setSuccess(true)
    setTimeout(() => setSuccess(false), 3000)
  }

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
      <Paper elevation={0} sx={{
        p: 5, width: 500, borderRadius: 4,
        background: 'rgba(255,255,255,0.9)',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(0,0,0,0.05)',
        textAlign: 'center',
      }}>
        <AddCircleOutlineIcon sx={{ fontSize: 48, color: '#667eea', mb: 2 }} />
        <Typography variant="h5" fontWeight={700} mb={1}>
          Add Category
        </Typography>
        <Typography variant="body2" color="text.secondary" mb={3}>
          Create a new category for your system
        </Typography>

        {success && <Alert severity="success" sx={{ mb: 2 }}>Category added successfully!</Alert>}

        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth label="Category Name" variant="outlined"
            value={category} onChange={(e) => setCategory(e.target.value)}
            required sx={{ mb: 3 }}
          />
          <Button
            type="submit" fullWidth variant="contained" size="large"
            sx={{
              py: 1.5, borderRadius: 50, fontWeight: 700, fontSize: '1rem',
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              '&:hover': { background: 'linear-gradient(135deg, #5a6fd6 0%, #6a4190 100%)' },
            }}
          >
            Add Category
          </Button>
        </form>
      </Paper>
    </Box>
  )
}
