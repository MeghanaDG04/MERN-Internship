import React, { useState, useEffect } from 'react'
import {
  Box, Typography, Paper, Table, TableBody, TableCell, TableContainer,
  TableHead, TableRow, IconButton, Button, TextField, Dialog, DialogTitle,
  DialogContent, DialogActions, Alert,
} from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import AddIcon from '@mui/icons-material/Add'
import InventoryIcon from '@mui/icons-material/Inventory'

export default function ManageProduct() {
  const [products, setProducts] = useState([])
  const [open, setOpen] = useState(false)
  const [success, setSuccess] = useState('')
  const [form, setForm] = useState({ name: '', price: '', category: '', description: '' })

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('products')) || []
    setProducts(stored)
  }, [])

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleAdd = () => {
    if (!form.name.trim() || !form.price) return
    const newProduct = { ...form, id: Date.now() }
    const updated = [...products, newProduct]
    setProducts(updated)
    localStorage.setItem('products', JSON.stringify(updated))
    setForm({ name: '', price: '', category: '', description: '' })
    setOpen(false)
    setSuccess('Product added successfully!')
    setTimeout(() => setSuccess(''), 3000)
  }

  const handleDelete = (id) => {
    const updated = products.filter((p) => p.id !== id)
    setProducts(updated)
    localStorage.setItem('products', JSON.stringify(updated))
  }

  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
        <Typography variant="h4" fontWeight={700}>
          Manage Products
        </Typography>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={() => setOpen(true)}
          sx={{
            borderRadius: 2, px: 3, fontWeight: 600,
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            '&:hover': { background: 'linear-gradient(135deg, #5a6fd6 0%, #6a4190 100%)' },
          }}
        >
          Add Product
        </Button>
      </Box>
      <Typography variant="body1" color="text.secondary" mb={4}>
        View, add and manage all products.
      </Typography>

      {success && <Alert severity="success" sx={{ mb: 2 }}>{success}</Alert>}

      <Paper elevation={0} sx={{
        borderRadius: 3,
        overflow: 'hidden',
        background: 'rgba(255,255,255,0.9)',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(0,0,0,0.05)',
      }}>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow sx={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
                <TableCell sx={{ color: '#fff', fontWeight: 700 }}>#</TableCell>
                <TableCell sx={{ color: '#fff', fontWeight: 700 }}>Name</TableCell>
                <TableCell sx={{ color: '#fff', fontWeight: 700 }}>Category</TableCell>
                <TableCell sx={{ color: '#fff', fontWeight: 700 }}>Price</TableCell>
                <TableCell sx={{ color: '#fff', fontWeight: 700 }}>Description</TableCell>
                <TableCell sx={{ color: '#fff', fontWeight: 700 }} align="center">Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {products.length > 0 ? products.map((product, index) => (
                <TableRow key={product.id} sx={{
                  '&:hover': { bgcolor: 'rgba(102,126,234,0.05)' },
                  transition: 'background 0.2s',
                }}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <InventoryIcon sx={{ color: '#667eea', fontSize: 20 }} />
                      {product.name}
                    </Box>
                  </TableCell>
                  <TableCell>{product.category}</TableCell>
                  <TableCell>₹{product.price}</TableCell>
                  <TableCell>{product.description}</TableCell>
                  <TableCell align="center">
                    <IconButton color="error" onClick={() => handleDelete(product.id)} size="small">
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              )) : (
                <TableRow>
                  <TableCell colSpan={6} align="center" sx={{ py: 4 }}>
                    <Typography color="text.secondary">No products found</Typography>
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>

      {/* Add Product Dialog */}
      <Dialog open={open} onClose={() => setOpen(false)} maxWidth="sm" fullWidth>
        <DialogTitle sx={{ fontWeight: 700 }}>Add New Product</DialogTitle>
        <DialogContent sx={{ pt: '16px !important' }}>
          <TextField
            fullWidth label="Product Name" name="name"
            value={form.name} onChange={handleChange}
            required sx={{ mb: 2 }}
          />
          <TextField
            fullWidth label="Category" name="category"
            value={form.category} onChange={handleChange}
            sx={{ mb: 2 }}
          />
          <TextField
            fullWidth label="Price" name="price" type="number"
            value={form.price} onChange={handleChange}
            required sx={{ mb: 2 }}
          />
          <TextField
            fullWidth label="Description" name="description" multiline rows={3}
            value={form.description} onChange={handleChange}
          />
        </DialogContent>
        <DialogActions sx={{ px: 3, pb: 2 }}>
          <Button onClick={() => setOpen(false)}>Cancel</Button>
          <Button
            variant="contained" onClick={handleAdd}
            sx={{
              borderRadius: 2, px: 3,
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              '&:hover': { background: 'linear-gradient(135deg, #5a6fd6 0%, #6a4190 100%)' },
            }}
          >
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  )
}
