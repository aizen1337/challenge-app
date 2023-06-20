import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { useUser } from '../context/useUser';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
export default function Navbar() {
    const {currentUser, logOut} = useUser()
    async function handleLogout() {
        await logOut();
    }
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorElUser(event.currentTarget);
    };
    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorElNav(event.currentTarget);
    };
    const handleCloseNavMenu = () => {
      setAnchorElNav(null);
    };
    const handleCloseUserMenu = () => {
      setAnchorElUser(null);
    };
  return (
    <AppBar position="fixed" color='transparent'>
      <Container maxWidth="md">
        <Toolbar disableGutters sx={{
            justifyContent: 'space-between'
        }}>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="error"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
                <MenuItem onClick={handleCloseNavMenu}>
                <Link to="/create">
                  <Typography textAlign="center" sx={{
                    color: 'crimson',
                    fontWeight: '700'
                  }}>
                    Create a challenge
                  </Typography>
                  </Link>
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu}>
                <Link to="/">
                  <Typography textAlign="center" sx={{
                    color: 'crimson',
                    fontWeight: '700'
                  }}>
                    Home            
                  </Typography>
                  </Link>
                </MenuItem>
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            color={'error'}
            sx={{
              mr: 2,
              display: {xs: 'none', md: 'flex'},
              alignItems: 'center',
              justifyContent: 'center',
              gap: 1,
              fontFamily: 'system-ui',
              fontWeight: 700,
              letterSpacing: '.1rem',
              color: 'red',
              '&:hover': {
                color: 'crimson',
              },
              textDecoration: 'none',
            }}
          >
            <HomeOutlinedIcon/>
            Home
          </Typography>
          <Link to="/create">
          <Typography
            variant="h6"
            noWrap
            component="a"
            sx={{
              display: {xs: 'none', md: 'flex'},
              alignItems: 'center',
              justifyContent: 'center',
              gap: 1,
              fontFamily: 'system-ui',
              fontWeight: 700,
              color: 'red',
              '&:hover': {
                color: 'crimson',
              },
              textDecoration: 'none',
            }}
          >
           Create a challenge
           <AddCircleOutlineOutlinedIcon/>
          </Typography>
          </Link>
          {
          currentUser 
          &&
          <Box sx={{ 
            flexGrow: 0, 
            display: 'flex',
            alignItems: 'center',
            gap: 2
             }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src={currentUser.photoURL || "/static/images/avatar/2.jpg"} />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
                <MenuItem onClick={async () => {
                    handleCloseUserMenu
                    handleLogout()
                    }}
                    >
                    Logout
                </MenuItem>
            </Menu>
            <Typography
            display={
                'h3'
            }
            sx={{
              display: {xs: 'none', md: 'flex'},
              color: 'red',
              fontWeight: '600'
            }}
            >
                {currentUser.displayName}
            </Typography>
            </Box>
            }
        </Toolbar>
      </Container>
    </AppBar>
  );
}