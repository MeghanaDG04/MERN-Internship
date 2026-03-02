import React from 'react'
import { Box, Typography, Paper } from '@mui/material'
import Grid from '@mui/material/Grid'
import PeopleIcon from '@mui/icons-material/People'
import CategoryIcon from '@mui/icons-material/Category'
import BookOnlineIcon from '@mui/icons-material/BookOnline'

const getCount = (key) => {
  try {
    const data = JSON.parse(localStorage.getItem(key))
    return Array.isArray(data) ? data.length : 0
  } catch {
    return 0
  }
}

const statCards = [
  {
    title: 'Total Users',
    key: 'userdetails',
    icon: <PeopleIcon sx={{ fontSize: 40 }} />,
    gradient: 'linear-gradient(135deg, #1A73E8 0%, #49a3f1 100%)',
  },
  {
    title: 'Total Categories',
    key: 'categories',
    icon: <CategoryIcon sx={{ fontSize: 40 }} />,
    gradient: 'linear-gradient(135deg, #43A047 0%, #66BB6A 100%)',
  },
  {
    title: 'Total Bookings',
    key: null,
    icon: <BookOnlineIcon sx={{ fontSize: 40 }} />,
    gradient: 'linear-gradient(135deg, #FB8C00 0%, #FFA726 100%)',
  },
]

export default function AHome() {
  return (
    <Box>
      <Typography variant="h4" fontWeight={700} mb={1}>
        Dashboard
      </Typography>
      <Typography variant="body1" color="text.secondary" mb={4}>
        Welcome back, Admin! Here's what's happening.
      </Typography>

      <Grid container spacing={3}>
        {statCards.map((card) => (
          <Grid size={{ xs: 12, sm: 6, md: 4 }} key={card.title}>
            <Paper
              elevation={0}
              sx={{
                p: 3,
                borderRadius: 3,
                background: card.gradient,
                color: '#fff',
                position: 'relative',
                overflow: 'hidden',
                transition: 'transform 0.3s, box-shadow 0.3s',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: '0 12px 40px rgba(0,0,0,0.15)',
                },
              }}
            >
              <Box sx={{
                position: 'absolute', top: -10, right: -10,
                width: 100, height: 100, borderRadius: '50%',
                background: 'rgba(255,255,255,0.15)',
              }} />
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Box>
                  <Typography variant="body2" sx={{ opacity: 0.9, mb: 0.5 }}>
                    {card.title}
                  </Typography>
                  <Typography variant="h3" fontWeight={700}>
                    {card.key ? getCount(card.key) : 24}
                  </Typography>
                </Box>
                <Box sx={{ opacity: 0.8 }}>{card.icon}</Box>
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>

      <Paper
        elevation={0}
        sx={{
          mt: 4, p: 4, borderRadius: 3,
          background: 'rgba(255,255,255,0.8)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255,255,255,0.3)',
        }}
      >
        <Typography variant="h6" fontWeight={600} mb={2}>
          Quick Overview
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Manage your users, categories, and bookings from this dashboard.
          Use the sidebar to navigate between different sections.
        </Typography>
      </Paper>
    </Box>
  )
}
