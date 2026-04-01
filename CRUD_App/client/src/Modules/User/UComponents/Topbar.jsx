import * as React from "react";
import { useNavigate, useLocation, 
  //useNavigation 
} from "react-router-dom";
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
import LogoutIcon from "@mui/icons-material/Logout";

const pages = [
  { name: "Home", path: "/homepage", icon: <HomeIcon /> },
  { name: "About", path: "/about", icon: <InfoIcon /> },
];

const settings = [
  { name: "Profile", path: "/myprofile", icon: <PersonIcon /> },
  { name: "Logout", path: "/login", icon: <LogoutIcon /> },
];

//const navigate = useNavigate();
// const handlesettings = (setting) => {
//   if(setting.name === "Logout"){
//     alert("Are you sure you want to log out?");
//     localStorage.removeItem("Token");
//     navigate("/login");
//   }else{
//     navigate(setting.path);
//   }
// }

function Topbar() {

  const navigate = useNavigate();
  const location = useLocation();

  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const [username, setUsername] = React.useState("User");

  const token = localStorage.getItem("Token");

  const handleOpenUserMenu = (event) => setAnchorElUser(event.currentTarget);
  const handleCloseUserMenu = () => setAnchorElUser(null);

  const isActive = (path) => location.pathname === path;

  // FETCH LOGGED IN USER
  const getUserProfile = async () => {
    try {

      const res = await fetch("http://localhost:7000/user/getprofile", {
        method: "GET",
        headers: {
          "auth-token": token,
        },
      });

      const data = await res.json();

      if (data.udata) {
        setUsername(data.udata.name);
      }

    } catch (error) {
      console.log("Profile fetch error", error);
    }
  };

  React.useEffect(() => {
    getUserProfile();
  }, []);

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

            {/* Desktop nav */}
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" }, gap: 0.5 }}>
              {pages.map((page) => (
                <Button
                  key={page.name}
                  startIcon={page.icon}
                  sx={{
                    px: 2.5,
                    py: 1,
                    color: isActive(page.path) ? "#fff" : "rgba(255,255,255,0.7)",
                    fontWeight: isActive(page.path) ? 600 : 400,
                    bgcolor: isActive(page.path) ? "rgba(102,126,234,0.25)" : "transparent",
                    borderRadius: 2,
                    textTransform: "none",
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

              <Tooltip title="Wishlist">
                <IconButton sx={{ color: "rgba(255,255,255,0.7)" }}>
                  <FavoriteIcon />
                </IconButton>
              </Tooltip>

              <Tooltip title="Cart">
                <IconButton sx={{ color: "rgba(255,255,255,0.7)" }}>
                  <Badge badgeContent={0} color="error">
                    <ShoppingCartIcon />
                  </Badge>
                </IconButton>
              </Tooltip>

              {/* USER AVATAR */}
              <Tooltip title="My Account">
                <IconButton onClick={handleOpenUserMenu}>
                  <Avatar
                    sx={{
                      width: { xs: 30, md: 36 },
                      height: { xs: 30, md: 36 },
                      background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                      fontWeight: 700,
                    }}
                  >
                    {username.charAt(0).toUpperCase()}
                  </Avatar>
                </IconButton>
              </Tooltip>

              {/* USER MENU */}
              <Menu
                anchorEl={anchorElUser}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >

                <Box sx={{ px: 2, py: 1 }}>
                  <Typography variant="subtitle2" fontWeight={600}>
                    {username}
                  </Typography>
                  <Typography variant="caption">
                    Welcome back!
                  </Typography>
                </Box>

                <Divider />

                {settings.map((setting) => (
                  <MenuItem
                    key={setting.name}
                    onClick={() => {

                      if (setting.name === "Logout") {
                        localStorage.removeItem("Token");
                        navigate("/login");
                      } else {
                        navigate(setting.path);
                      }

                      handleCloseUserMenu();
                    }}
                  >
                    {setting.icon}
                    {setting.name}
                  </MenuItem>
                ))}
              </Menu>

            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Drawer remains unchanged */}
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        {/* same drawer code */}
      </Drawer>
    </>
  );
}

export default Topbar;