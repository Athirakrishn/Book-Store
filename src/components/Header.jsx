import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';

const pages = ['Home', 'About Us', 'Books'];
const settings = ['Profile', 'Contact', 'Logout'];

function Header() {

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
   <AppBar 
  position="static" 
  sx={{ background: "linear-gradient(90deg, rgb(0, 255, 200), rgb(2, 104, 117))" }}
>
  <Container maxWidth="xl">
    <Toolbar disableGutters>
      
      {/* Desktop Logo */}
      <Typography
        variant="h6"
        noWrap
        component="a"
        href="#"
        sx={{
          mr: 2,
          display: { xs: 'none', md: 'flex' },
          fontFamily: 'monospace',
          fontWeight: 700,
          letterSpacing: '.3rem',
          color: 'white',
          textDecoration: 'none',
          alignItems: "center",
          gap: 1
        }}
      >
        <img 
          src="https://i.pinimg.com/736x/ff/a9/32/ffa932be25e0bfa85d6c54b82bff0a27.jpg"  
          alt="Book Loom Logo" 
          width="40" 
          height="40" 
          style={{ borderRadius: "50%" }}  
        />
        BOOK LOOM
      </Typography>

      {/* Mobile Menu */}
      <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
        <IconButton
          size="large"
          aria-label="open navigation menu"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleOpenNavMenu}
          color="inherit"
        >
          <MenuIcon />
        </IconButton>
        <Menu
          id="menu-appbar"
          anchorEl={anchorElNav}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
          keepMounted
          transformOrigin={{ vertical: 'top', horizontal: 'left' }}
          open={Boolean(anchorElNav)}
          onClose={handleCloseNavMenu}
          sx={{ display: { xs: 'block', md: 'none' } }}
        >
          {pages.map((page) => (
            <MenuItem key={page} onClick={handleCloseNavMenu}>
              <Typography textAlign="center">{page}</Typography>
            </MenuItem>
          ))}
        </Menu>
      </Box>

      {/* Mobile Logo */}
      <Typography
        variant="h5"
        noWrap
        component="a"
        href="#"
        sx={{
          mr: 2,
          display: { xs: 'flex', md: 'none' },
          flexGrow: 1,
          fontFamily: 'monospace',
          fontWeight: 700,
          letterSpacing: '.3rem',
          color: 'white',
          textDecoration: 'none',
          alignItems: "center",
          gap: 1
        }}
      >
        <img 
          src="https://i.pinimg.com/736x/ff/a9/32/ffa932be25e0bfa85d6c54b82bff0a27.jpg"  
          alt="Book Loom Logo" 
          width="30" 
          height="30" 
          style={{ borderRadius: "50%" }}  
        />
        BOOK LOOM
      </Typography>

      {/* Desktop Menu */}
      <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
        {pages.map((page) => (
          <Button
            key={page}
            onClick={handleCloseNavMenu}
            sx={{ 
              my: 2, 
              color: 'white', 
              display: 'block',
              fontWeight: "500",
              "&:hover": { backgroundColor: "rgba(255,255,255,0.1)" }
            }}
          >
            {page}
          </Button>
        ))}
      </Box>

      {/* User Menu */}
      <Box sx={{ flexGrow: 0 }}>
        <Tooltip title="Settings">
          <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
            <img 
              src="https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png"  
              alt="User Avatar"  
              width={30} 
              height={30} 
              style={{ borderRadius: "50%" }}
            />
          </IconButton>
        </Tooltip>
        <Menu
          sx={{ mt: '45px' }}
          id="menu-appbar"
          anchorEl={anchorElUser}
          anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
          keepMounted
          transformOrigin={{ vertical: 'top', horizontal: 'right' }}
          open={Boolean(anchorElUser)}
          onClose={handleCloseUserMenu}
        >
          {settings.map((setting) => (
            <MenuItem key={setting} onClick={handleCloseUserMenu}>
              <Typography textAlign="center">{setting}</Typography>
            </MenuItem>
          ))}
        </Menu>
      </Box>
    </Toolbar>
  </Container>
</AppBar>

  );
 
}

export default Header