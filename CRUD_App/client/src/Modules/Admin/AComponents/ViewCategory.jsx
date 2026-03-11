import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
//import axios from "axios";

export default function ViewCategory() {
  const [categories, setCategories] = useState([]);

  // Edit states
  const [open, setOpen] = useState(false);
  const [editId, setEditId] = useState(null);
  const [editName, setEditName] = useState("");

  

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("categories")) || [];
    setCategories(stored);
  }, []);

  // Delete category
  const handleDelete = (id) => {
    const updated = categories.filter((cat) => cat.id !== id);
    setCategories(updated);
    localStorage.setItem("categories", JSON.stringify(updated));
    // axios.delete(`http://localhost:7000/product/deleteproduct/${categories}`)
    // .then(() => {

    // })
    // .catch((error) => {
    //   console.log(error);
    // })

  };

  // Open edit dialog
  const handleEdit = (id) => {
    const selected = categories.find((cat) => cat.id === id);
    setEditId(id);
    setEditName(selected.name);
    setOpen(true);
  };

  // Update category
  const handleUpdate = () => {
    const updated = categories.map((cat) =>
      cat.id === editId ? { ...cat, name: editName } : cat
    );

    setCategories(updated);
    localStorage.setItem("categories", JSON.stringify(updated));
    setOpen(false);
  };

  return (
    <Box>
      <Typography variant="h4" fontWeight={700} mb={1}>
        View Categories
      </Typography>

      <Typography variant="body1" color="text.secondary" mb={4}>
        All categories listed below.
      </Typography>

      <Paper
        elevation={0}
        sx={{
          borderRadius: 3,
          overflow: "hidden",
          background: "rgba(255,255,255,0.9)",
          backdropFilter: "blur(10px)",
          border: "1px solid rgba(0,0,0,0.05)",
        }}
      >
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow
                sx={{
                  background:
                    "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                }}
              >
                <TableCell sx={{ color: "#fff", fontWeight: 700 }}>
                  #
                </TableCell>
                <TableCell sx={{ color: "#fff", fontWeight: 700 }}>
                  Category Name
                </TableCell>
                <TableCell
                  sx={{ color: "#fff", fontWeight: 700 }}
                  align="center"
                >
                  Action
                </TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {categories.length > 0 ? (
                categories.map((cat, index) => (
                  <TableRow
                    key={cat.id}
                    sx={{
                      "&:hover": {
                        bgcolor: "rgba(102,126,234,0.05)",
                      },
                      transition: "0.2s",
                    }}
                  >
                    <TableCell>{index + 1}</TableCell>
                    <TableCell>{cat.name}</TableCell>

                    <TableCell align="center">
                      <IconButton
                        color="secondary"
                        size="small"
                        onClick={() => handleEdit(cat.id)}
                      >
                        <EditIcon />
                      </IconButton>

                      <IconButton
                        color="error"
                        size="small"
                        onClick={() => handleDelete(cat.id)}
                      >
                        <DeleteIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={3} align="center" sx={{ py: 4 }}>
                    <Typography color="text.secondary">
                      No categories found
                    </Typography>
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>

      {/* EDIT DIALOG */}
      <Dialog open={open} onClose={() => setOpen(false)} fullWidth>
        <DialogTitle>Edit Category</DialogTitle>

        <DialogContent sx={{ mt: 1 }}>
          <TextField
            fullWidth
            label="Category Name"
            value={editName}
            onChange={(e) => setEditName(e.target.value)}
          />
        </DialogContent>

        <DialogActions>
          <Button onClick={() => setOpen(false)}>Cancel</Button>
          <Button variant="contained" onClick={handleUpdate}>
            Update
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}