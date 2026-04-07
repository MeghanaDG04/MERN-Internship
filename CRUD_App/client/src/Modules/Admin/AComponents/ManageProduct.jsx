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

import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'

import axios from 'axios'

export default function ManageProduct() {

  const [products, setProducts] = useState([])
  const [categories, setCategories] = useState([])
  const [open, setOpen] = useState(false)
  const [success, setSuccess] = useState('')
  const [editId, setEditId] = useState(null)
  const [oldImage, setOldImage] = useState('')

  const [form, setForm] = useState({
    name: '',
    price: '',
    quantity: '',
    category: '',
    description: '',
    productimage: null
  })

  // FETCH PRODUCTS
  const fetchProducts = () => {
    axios.get('http://localhost:7000/product/getproducts')
      .then((res) => {
        setProducts(res.data.pdata)
      })
      .catch((err) => console.log(err))
  }

  // FETCH CATEGORIES
  const fetchCategories = () => {
    axios.get('http://localhost:7000/category/getCategory')
      .then((res) => {
        setCategories(res.data.cdata)
      })
      .catch((err) => console.log(err))
  }

  useEffect(() => {
    fetchProducts()
    fetchCategories()
  }, [])

  const handleChange = (e) => {

    if (e.target.name === 'productimage') {
      setForm({ ...form, productimage: e.target.files[0] })
    } else {
      setForm({ ...form, [e.target.name]: e.target.value })
    }

  }

  // EDIT PRODUCT
  const handleEdit = (product) => {

    setForm({
      name: product.name,
      price: product.price,
      quantity: product.quantity,
      category: product.category?._id,
      description: product.description,
      productimage: null
    })

    setOldImage(product.productimage)
    setEditId(product._id)
    setOpen(true)

  }

  // SAVE PRODUCT
  const handleSave = () => {

    if (!form.name.trim() || !form.price) return

    const formData = new FormData()

    formData.append("name", form.name)
    formData.append("price", form.price)
    formData.append("quantity", form.quantity)
    formData.append("category", form.category)
    formData.append("description", form.description)

    if (form.productimage) {
      formData.append("productimage", form.productimage)
    }

    if (editId) {

      axios.put(`http://localhost:7000/product/editproduct/${editId}`, formData)
        .then((res) => {

          setSuccess("Product updated successfully!")

          setTimeout(() => setSuccess(''), 3000)

          setOpen(false)
          setEditId(null)
          setOldImage('')

          setForm({
            name: '',
            price: '',
            quantity: '',
            category: '',
            description: '',
            productimage: null
          })

          fetchProducts()
          console.log(res);

        })
        .catch(err => console.log(err))

    }
    else {

      axios.post('http://localhost:7000/product/addproduct', formData)
        .then((res) => {

          setSuccess("Product added successfully!")

          setTimeout(() => setSuccess(''), 3000)

          setOpen(false)

          setForm({
            name: '',
            price: '',
            quantity: '',
            category: '',
            description: '',
            productimage: null
          })

          fetchProducts()
          console.log(res);

        })
        .catch(err => console.log(err))

    }

  }

  const handleDelete = (id) => {

    axios.delete(`http://localhost:7000/product/deleteproduct/${id}`)
      .then(() => {
        fetchProducts()
      })
      .catch(err => console.log(err))

  }

  return (
    <Box>

      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>

        <Typography variant="h4" fontWeight={700}>
          Manage Products
        </Typography>

        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={() => {

            setEditId(null)
            setOldImage('')

            setForm({
              name: '',
              price: '',
              quantity: '',
              category: '',
              description: '',
              productimage: null
            })

            setOpen(true)

          }}
        >
          Add Product
        </Button>

      </Box>

      {success && <Alert severity="success" sx={{ mb: 2 }}>{success}</Alert>}

      <Paper>

        <TableContainer>
          <Table>

            <TableHead>
              <TableRow>
                <TableCell>#</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Category</TableCell>
                <TableCell>Price</TableCell>
                <TableCell>Quantity</TableCell>
                <TableCell>Description</TableCell>
                <TableCell>Image</TableCell>
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

                    <TableCell>{product.category?.category}</TableCell>
                    <TableCell>₹{product.price}</TableCell>
                    <TableCell>{product.quantity}</TableCell>
                    <TableCell>{product.description}</TableCell>

                    <TableCell>

                      {product.productimage && (

                        <img
                          src={`http://localhost:7000/image/${product.productimage}`}
                          alt="product"
                          width="60"
                          height="60"
                          style={{ objectFit: "cover", borderRadius: "6px" }}
                        />

                      )}

                    </TableCell>

                    <TableCell align="center">

                      <IconButton color="primary" onClick={() => handleEdit(product)}>
                        <EditIcon />
                      </IconButton>

                      <IconButton color="error" onClick={() => handleDelete(product._id)}>
                        <DeleteIcon />
                      </IconButton>

                    </TableCell>

                  </TableRow>

                ))

              ) : (

                <TableRow>
                  <TableCell colSpan={8} align="center">
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

          <FormControl fullWidth sx={{ mb: 2 }}>

            <InputLabel>Category</InputLabel>

            <Select
              name="category"
              value={form.category}
              label="Category"
              onChange={handleChange}
            >

              {categories.map((cat) => (

                <MenuItem key={cat._id} value={cat._id}>
                  {cat.category}
                </MenuItem>

              ))}

            </Select>

          </FormControl>

          <TextField
            fullWidth
            type="number"
            label="Price"
            name="price"
            value={form.price}
            onChange={handleChange}
            sx={{ mb: 2 }}
          />

          {/* SHOW OLD IMAGE */}

          {oldImage && (

            <Box sx={{ mb: 2 }}>

              {/* <Typography variant="body2"></Typography> */}

              <img
                src={`http://localhost:7000/image/${oldImage}`}
                alt="product"
                width="120"
                style={{ borderRadius: 6 }}
              />

            </Box>

          )}

          <TextField
            fullWidth
            type="file"
            name="productimage"
            onChange={handleChange}
            InputLabelProps={{ shrink: true }}
            sx={{ mb: 2 }}
          />

          <TextField
            fullWidth
            type="number"
            label="Quantity"
            name="quantity"
            value={form.quantity}
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