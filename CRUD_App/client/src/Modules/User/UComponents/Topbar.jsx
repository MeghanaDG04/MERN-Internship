import * as React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  AppBar, Box, Toolbar, IconButton, Typography, Container,
  Avatar, Button, Tooltip, Badge, Drawer, List, ListItem,
  ListItemButton, ListItemIcon, ListItemText, Divider, Menu, MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import ShoppingBag from "@mui/icons-material/ShoppingBag";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import PersonIcon from "@mui/icons-material/Person";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import LogoutIcon from "@mui/icons-material/Logout";

const pages = [
  { name: "Home", path: "/homepage", icon: <HomeIcon /> },
  { name: "About", path: "/about", icon: <InfoIcon /> },
];

const settings = [
  { name: "Profile", path: "/profile", icon: <PersonIcon /> },
  { name: "Account", path: "/account", icon: <ManageAccountsIcon /> },
  { name: "Logout", path: "/login", icon: <LogoutIcon /> },
];

function Topbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenUserMenu = (event) => setAnchorElUser(event.currentTarget);
  const handleCloseUserMenu = () => setAnchorElUser(null);

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <AppBar
        position="sticky"
        sx={{
          background: "linear-gradient(195deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
          boxShadow: "0 4px 20px rgba(0,0,0,0.4)",
          borderBottom: "1px solid rgba(102,126,234,0.2)",
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters sx={{ minHeight: { xs: 56, md: 64 } }}>

            {/* Mobile hamburger */}
            <IconButton
              onClick={() => setDrawerOpen(true)}
              sx={{
                display: { xs: "flex", md: "none" },
                mr: 1,
                color: "rgba(255,255,255,0.8)",
              }}
            >
              <MenuIcon />
            </IconButton>

            {/* Logo */}
            <Box
              sx={{ display: "flex", alignItems: "center", cursor: "pointer", mr: { xs: 0, md: 4 } }}
              onClick={() => navigate("/homepage")}
            >
              <Avatar
                sx={{
                  mr: 1,
                  width: { xs: 32, md: 38 },
                  height: { xs: 32, md: 38 },
                  background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                }}
              >
                <ShoppingBag sx={{ fontSize: { xs: 18, md: 22 } }} />
              </Avatar>
              <Typography
                variant="h6"
                noWrap
                sx={{
                  fontWeight: 700,
                  letterSpacing: ".1rem",
                  background: "linear-gradient(135deg, #667eea, #764ba2)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  fontSize: { xs: "1.1rem", md: "1.3rem" },
                }}
              >
                ShopSphere
              </Typography>
            </Box>

            {/* Desktop nav links */}
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" }, gap: 0.5 }}>
              {pages.map((page) => (
                <Button
                  key={page.name}
                  startIcon={React.cloneElement(page.icon, {
                    sx: { fontSize: 18, color: isActive(page.path) ? "#667eea" : "rgba(255,255,255,0.5)" },
                  })}
                  sx={{
                    px: 2.5, py: 1,
                    color: isActive(page.path) ? "#fff" : "rgba(255,255,255,0.7)",
                    fontWeight: isActive(page.path) ? 600 : 400,
                    bgcolor: isActive(page.path) ? "rgba(102,126,234,0.25)" : "transparent",
                    borderRadius: 2,
                    textTransform: "none",
                    fontSize: "0.95rem",
                    transition: "all 0.2s ease",
                    "&:hover": { backgroundColor: "rgba(102,126,234,0.2)" },
                  }}
                  onClick={() => navigate(page.path)}
                >
                  {page.name}
                </Button>
              ))}
            </Box>

            <Box sx={{ flexGrow: { xs: 1, md: 0 } }} />

            {/* Right actions */}
            <Box sx={{ display: "flex", alignItems: "center", gap: { xs: 0, sm: 0.5 } }}>
              <Tooltip title="Wishlist" arrow>
                <IconButton
                  sx={{
                    color: "rgba(255,255,255,0.7)",
                    transition: "all 0.2s",
                    "&:hover": { color: "#ff5252", bgcolor: "rgba(255,82,82,0.1)" },
                  }}
                >
                  <FavoriteIcon sx={{ fontSize: { xs: 20, md: 24 } }} />
                </IconButton>
              </Tooltip>

              <Tooltip title="Cart" arrow>
                <IconButton
                  sx={{
                    color: "rgba(255,255,255,0.7)",
                    transition: "all 0.2s",
                    "&:hover": { color: "#667eea", bgcolor: "rgba(102,126,234,0.1)" },
                  }}
                >
                  <Badge
                    badgeContent={0}
                    color="error"
                    sx={{ "& .MuiBadge-badge": { fontSize: 10, minWidth: 16, height: 16 } }}
                  >
                    <ShoppingCartIcon sx={{ fontSize: { xs: 20, md: 24 } }} />
                  </Badge>
                </IconButton>
              </Tooltip>

              <Tooltip title="My Account" arrow>
                <IconButton onClick={handleOpenUserMenu} sx={{ ml: { xs: 0.5, md: 1 } }}>
                  <Avatar
                    sx={{
                      width: { xs: 30, md: 36 },
                      height: { xs: 30, md: 36 },
                      background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                      fontSize: "0.85rem",
                      fontWeight: 700,
                      transition: "box-shadow 0.2s",
                      "&:hover": { boxShadow: "0 0 0 3px rgba(102,126,234,0.4)" },
                    }}
                  >
                    U
                  </Avatar>
                </IconButton>
              </Tooltip>

              {/* User dropdown */}
              <Menu
                anchorEl={anchorElUser}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
                transformOrigin={{ horizontal: "right", vertical: "top" }}
                anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
                PaperProps={{
                  sx: {
                    background: "#16213e",
                    color: "#fff",
                    borderRadius: 3,
                    border: "1px solid rgba(102,126,234,0.2)",
                    mt: 1.5,
                    minWidth: 180,
                    overflow: "visible",
                    "&::before": {
                      content: '""',
                      display: "block",
                      position: "absolute",
                      top: 0,
                      right: 14,
                      width: 10,
                      height: 10,
                      bgcolor: "#16213e",
                      transform: "translateY(-50%) rotate(45deg)",
                      borderLeft: "1px solid rgba(102,126,234,0.2)",
                      borderTop: "1px solid rgba(102,126,234,0.2)",
                    },
                  },
                }}
              >
                <Box sx={{ px: 2, py: 1.5 }}>
                  <Typography variant="subtitle2" fontWeight={600}>User</Typography>
                  <Typography variant="caption" sx={{ color: "rgba(255,255,255,0.5)" }}>
                    Welcome back!
                  </Typography>
                </Box>
                <Divider sx={{ borderColor: "rgba(102,126,234,0.15)" }} />
                {settings.map((setting) => (
                  <MenuItem
                    key={setting.name}
                    onClick={() => {
                      navigate(setting.path);
                      handleCloseUserMenu();
                    }}
                    sx={{
                      py: 1.2, px: 2, gap: 1.5,
                      transition: "all 0.15s",
                      "&:hover": { bgcolor: "rgba(102,126,234,0.15)" },
                      ...(setting.name === "Logout" && { color: "#ff5252" }),
                    }}
                  >
                    {React.cloneElement(setting.icon, {
                      sx: {
                        fontSize: 20,
                        color: setting.name === "Logout" ? "#ff5252" : "#667eea",
                      },
                    })}
                    {setting.name}
                  </MenuItem>
                ))}
              </Menu>
            </Box>

          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        PaperProps={{
          sx: {
            width: 280,
            background: "linear-gradient(195deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
            color: "#fff",
          },
        }}
      >
        {/* Drawer header */}
        <Box sx={{ p: 2.5, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Avatar
              sx={{
                width: 36,
                height: 36,
                background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
              }}
            >
              <ShoppingBag sx={{ fontSize: 20 }} />
            </Avatar>
            <Typography
              variant="h6"
              fontWeight={700}
              sx={{
                background: "linear-gradient(135deg, #667eea, #764ba2)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              ShopSphere
            </Typography>
          </Box>
          <IconButton onClick={() => setDrawerOpen(false)} sx={{ color: "rgba(255,255,255,0.5)" }}>
            <CloseIcon />
          </IconButton>
        </Box>

        <Divider sx={{ borderColor: "rgba(102,126,234,0.15)" }} />

        {/* Nav links */}
        <List sx={{ px: 1, mt: 1 }}>
          {pages.map((page) => (
            <ListItem key={page.name} disablePadding sx={{ mb: 0.5 }}>
              <ListItemButton
                onClick={() => {
                  navigate(page.path);
                  setDrawerOpen(false);
                }}
                sx={{
                  borderRadius: 2,
                  mx: 1,
                  bgcolor: isActive(page.path) ? "rgba(102,126,234,0.3)" : "transparent",
                  "&:hover": { bgcolor: "rgba(102,126,234,0.2)" },
                }}
              >
                <ListItemIcon
                  sx={{
                    color: isActive(page.path) ? "#667eea" : "rgba(255,255,255,0.6)",
                    minWidth: 40,
                  }}
                >
                  {page.icon}
                </ListItemIcon>
                <ListItemText
                  primary={page.name}
                  primaryTypographyProps={{
                    fontSize: "0.95rem",
                    fontWeight: isActive(page.path) ? 600 : 400,
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>

        <Divider sx={{ borderColor: "rgba(102,126,234,0.15)", my: 1 }} />

        {/* Account links */}
        <Typography variant="caption" sx={{ px: 3, color: "rgba(255,255,255,0.4)", textTransform: "uppercase", letterSpacing: 1 }}>
          Account
        </Typography>
        <List sx={{ px: 1, mt: 0.5 }}>
          {settings.map((setting) => (
            <ListItem key={setting.name} disablePadding sx={{ mb: 0.5 }}>
              <ListItemButton
                onClick={() => {
                  navigate(setting.path);
                  setDrawerOpen(false);
                }}
                sx={{
                  borderRadius: 2,
                  mx: 1,
                  "&:hover": {
                    bgcolor: setting.name === "Logout"
                      ? "rgba(255,82,82,0.15)"
                      : "rgba(102,126,234,0.2)",
                  },
                }}
              >
                <ListItemIcon
                  sx={{
                    color: setting.name === "Logout" ? "#ff5252" : "rgba(255,255,255,0.6)",
                    minWidth: 40,
                  }}
                >
                  {setting.icon}
                </ListItemIcon>
                <ListItemText
                  primary={setting.name}
                  primaryTypographyProps={{
                    fontSize: "0.95rem",
                    ...(setting.name === "Logout" && { color: "#ff5252" }),
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
}

export default Topbar;
