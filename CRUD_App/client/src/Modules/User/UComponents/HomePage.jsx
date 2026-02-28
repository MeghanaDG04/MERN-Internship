import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Grid,
  Paper,
  Button,
  TextField,
  IconButton,
  LinearProgress,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";

export default function Dashboard() {
  const [habit, setHabit] = useState("");
  const [habits, setHabits] = useState(
    JSON.parse(localStorage.getItem("streaklyHabits")) || []
  );

  useEffect(() => {
    localStorage.setItem("streaklyHabits", JSON.stringify(habits));
  }, [habits]);

  const addHabit = () => {
    if (!habit.trim()) return;

    const newHabit = {
      id: Date.now(),
      name: habit,
      streak: 0,
      completedToday: false,
    };

    setHabits([...habits, newHabit]);
    setHabit("");
  };

  const toggleComplete = (id) => {
    setHabits(
      habits.map((h) =>
        h.id === id
          ? {
              ...h,
              completedToday: !h.completedToday,
              streak: h.completedToday ? h.streak : h.streak + 1,
            }
          : h
      )
    );
  };

  const deleteHabit = (id) => {
    setHabits(habits.filter((h) => h.id !== id));
  };

  const completedCount = habits.filter((h) => h.completedToday).length;
  const bestStreak =
    habits.length > 0 ? Math.max(...habits.map((h) => h.streak)) : 0;

  return (
  <Box
    sx={{
      minHeight: "100vh",
      background:
        "linear-gradient(-45deg,#0f2027,#1e3c72,#2a5298,#203a43)",
      backgroundSize: "400% 400%",
      animation: "gradientMove 15s ease infinite",
      px: { xs: 2, md: 6 },
      py: 5,
      position: "relative",
      overflow: "hidden",
    }}
  >
    {/* Floating Glow Effects */}
    <Box className="glow glow1" />
    <Box className="glow glow2" />

    {/* Header */}
    <Box mb={5}>
      <Typography
        variant="h3"
        fontWeight="bold"
        color="white"
        sx={{ letterSpacing: 1 }}
      >
        🔥 Streakly
      </Typography>
      <Typography color="rgba(255,255,255,0.7)">
        Stay consistent. Build powerful habits daily.
      </Typography>
    </Box>

    {/* Add Habit Section */}
    <Paper
      sx={{
        p: 4,
        mb: 5,
        borderRadius: 5,
        background:
          "linear-gradient(135deg,rgba(255,255,255,0.15),rgba(255,255,255,0.05))",
        backdropFilter: "blur(20px)",
        boxShadow: "0 10px 40px rgba(0,0,0,0.4)",
      }}
    >
      <Typography color="white" mb={3} fontWeight={600}>
        Add New Habit
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          gap: 2,
        }}
      >
        <TextField
          fullWidth
          value={habit}
          onChange={(e) => setHabit(e.target.value)}
          placeholder="Enter habit..."
          sx={{
            input: { color: "white" },
            fieldset: { borderColor: "rgba(255,255,255,0.4)" },
          }}
        />

        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={addHabit}
          sx={{
            background:
              "linear-gradient(135deg,#00c6ff,#0072ff)",
            px: 4,
            boxShadow: "0 6px 20px rgba(0,114,255,0.5)",
            "&:hover": {
              transform: "scale(1.05)",
            },
          }}
        >
          Add Habit
        </Button>
      </Box>
    </Paper>

    {/* Stats Section */}
    <Grid container spacing={3} mb={5}>
      {[
        { label: "Total Habits", value: habits.length },
        { label: "Completed Today", value: completedCount },
        { label: "Best Streak", value: bestStreak },
      ].map((stat, index) => (
        <Grid item xs={12} sm={4} key={index}>
          <Paper
            sx={{
              p: 4,
              borderRadius: 5,
              textAlign: "center",
              background:
                "linear-gradient(135deg,rgba(255,255,255,0.15),rgba(255,255,255,0.05))",
              backdropFilter: "blur(20px)",
              color: "white",
              transition: "0.4s",
              "&:hover": {
                transform: "translateY(-10px) scale(1.02)",
              },
            }}
          >
            <Typography sx={{ opacity: 0.8 }}>
              {stat.label}
            </Typography>
            <Typography variant="h3" fontWeight="bold" mt={1}>
              {stat.value}
            </Typography>
          </Paper>
        </Grid>
      ))}
    </Grid>

    {/* Habit Cards */}
    <Grid container spacing={3}>
      {habits.map((h) => (
        <Grid item xs={12} sm={6} md={4} key={h.id}>
          <Paper
            sx={{
              p: 4,
              borderRadius: 5,
              background:
                "linear-gradient(135deg,rgba(255,255,255,0.15),rgba(255,255,255,0.05))",
              backdropFilter: "blur(20px)",
              color: "white",
              transition: "0.4s",
              boxShadow: "0 8px 30px rgba(0,0,0,0.4)",
              "&:hover": {
                transform: "scale(1.05)",
              },
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Typography fontWeight={600}>
                {h.name}
              </Typography>

              <IconButton onClick={() => deleteHabit(h.id)}>
                <DeleteIcon sx={{ color: "white" }} />
              </IconButton>
            </Box>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                mt: 2,
              }}
            >
              <LocalFireDepartmentIcon
                sx={{ color: "#ff9800" }}
              />
              <Typography ml={1}>
                {h.streak} Day Streak
              </Typography>
            </Box>

            <LinearProgress
              variant="determinate"
              value={(h.streak % 10) * 10}
              sx={{
                mt: 2,
                height: 8,
                borderRadius: 5,
                backgroundColor:
                  "rgba(255,255,255,0.2)",
              }}
            />

            <Button
              fullWidth
              sx={{
                mt: 3,
                background: h.completedToday
                  ? "linear-gradient(135deg,#4caf50,#2e7d32)"
                  : "linear-gradient(135deg,#00c6ff,#0072ff)",
              }}
              variant="contained"
              onClick={() => toggleComplete(h.id)}
            >
              {h.completedToday
                ? "Completed ✔"
                : "Mark Done"}
            </Button>
          </Paper>
        </Grid>
      ))}
    </Grid>

    {/* Animations */}
    <style>
      {`
        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .glow {
          position: absolute;
          border-radius: 50%;
          background: rgba(255,255,255,0.08);
          filter: blur(80px);
          animation: float 10s infinite ease-in-out;
        }

        .glow1 {
          width: 300px;
          height: 300px;
          top: -100px;
          left: -100px;
        }

        .glow2 {
          width: 250px;
          height: 250px;
          bottom: -100px;
          right: -100px;
          animation-delay: 3s;
        }

        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-40px); }
          100% { transform: translateY(0px); }
        }
      `}
    </style>
  </Box>
);
}