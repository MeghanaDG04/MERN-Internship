import React, { useState, useEffect } from 'react'
import {
  Box, Typography, Paper, Table, TableBody, TableCell, TableContainer,
  TableHead, TableRow, IconButton, Button, TextField, Dialog, DialogTitle,
  DialogContent, DialogActions, Alert
} from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'
import AddIcon from '@mui/icons-material/Add'
import InventoryIcon from '@mui/icons-material/Inventory'
import axios from 'axios'

export default function ManageProduct() {

  const [products, setProducts] = useState([])
  const [open, setOpen] = useState(false)
  const [success, setSuccess] = useState('')
  const [editId, setEditId] = useState(null)

  const [form, setForm] = useState({
    name: '',
    price: '',
    category: '',
    description: ''
  })

  // ⭐ FETCH PRODUCTS
  const fetchProducts = () => {
    axios.get('http://localhost:7000/product/getproducts')
      .then((res) => {
        setProducts(res.data.pdata)
      })
      .catch((err) => console.log(err))
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  // ⭐ INPUT CHANGE
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  // ⭐ OPEN EDIT
  const handleEdit = (product) => {
    setForm({
      name: product.name,
      price: product.price,
      category: product.category,
      description: product.description
    })
    setEditId(product._id)
    setOpen(true)
  }

  // ⭐ ADD / UPDATE SAVE
  const handleSave = () => {

    if (!form.name.trim() || !form.price) return

    if (editId) {
      // UPDATE
      axios.put(`http://localhost:7000/product/editproduct/${editId}`, form)
        .then(() => {
          setSuccess("Product updated successfully!")
          setTimeout(() => setSuccess(''), 3000)
          setOpen(false)
          setEditId(null)
          setForm({ name: '', price: '', category: '', description: '' })
          fetchProducts()
        })
        .catch(err => console.log(err))

    } else {
      // ADD
      axios.post('http://localhost:7000/product/addproduct', form)
        .then(() => {
          setSuccess("Product added successfully!")
          setTimeout(() => setSuccess(''), 3000)
          setOpen(false)
          setForm({ name: '', price: '', category: '', description: '' })
          fetchProducts()
        })
        .catch(err => console.log(err))
    }
  }

  // ⭐ DELETE
  const handleDelete = (id) => {
    axios.delete(`http://localhost:7000/product/deleteproduct/${id}`)
      .then(() => fetchProducts())
      .catch(err => console.log(err))
  }

  return (
    <Box>

      {/* HEADER */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
        <Typography variant="h4" fontWeight={700}>
          Manage Products
        </Typography>

        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={() => {
            setEditId(null)
            setForm({ name: '', price: '', category: '', description: '' })
            setOpen(true)
          }}
        >
          Add Product
        </Button>
      </Box>

      {success && <Alert severity="success" sx={{ mb: 2 }}>{success}</Alert>}

      {/* TABLE */}
      <Paper>
        <TableContainer>
          <Table>

            <TableHead>
              <TableRow>
                <TableCell>#</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Category</TableCell>
                <TableCell>Price</TableCell>
                <TableCell>Description</TableCell>
                <TableCell align="center">Action</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>

              {products.length > 0 ? (
                products.map((product, index) => (
                  <TableRow key={product._id}>
                    <TableCell>{index + 1}</TableCell>

                    <TableCell>
                      <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
                        <InventoryIcon fontSize="small" />
                        {product.name}
                      </Box>
                    </TableCell>

                    <TableCell>{product.category}</TableCell>
                    <TableCell>₹{product.price}</TableCell>
                    <TableCell>{product.description}</TableCell>

                    <TableCell align="center">

                      <IconButton
                        color="primary"
                        onClick={() => handleEdit(product)}
                      >
                        <EditIcon />
                      </IconButton>

                      <IconButton
                        color="error"
                        onClick={() => handleDelete(product._id)}
                      >
                        <DeleteIcon />
                      </IconButton>

                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={6} align="center">
                    No products found
                  </TableCell>
                </TableRow>
              )}

            </TableBody>

          </Table>
        </TableContainer>
      </Paper>

      {/* DIALOG */}
      <Dialog open={open} onClose={() => setOpen(false)} fullWidth>

        <DialogTitle>
          {editId ? "Edit Product" : "Add Product"}
        </DialogTitle>

        <DialogContent>

          <TextField
            fullWidth
            label="Product Name"
            name="name"
            value={form.name}
            onChange={handleChange}
            sx={{ mb: 2 }}
          />

          <TextField
            fullWidth
            label="Category"
            name="category"
            value={form.category}
            onChange={handleChange}
            sx={{ mb: 2 }}
          />

          <TextField
            fullWidth
            type="number"
            label="Price"
            name="price"
            value={form.price}
            onChange={handleChange}
            sx={{ mb: 2 }}
          />

          <TextField
            fullWidth
            multiline
            rows={3}
            label="Description"
            name="description"
            value={form.description}
            onChange={handleChange}
          />

        </DialogContent>

        <DialogActions>
          <Button onClick={() => setOpen(false)}>Cancel</Button>
          <Button variant="contained" onClick={handleSave}>
            {editId ? "Update" : "Add"}
          </Button>
        </DialogActions>

      </Dialog>

    </Box>
  )
}