import React, { useContext } from 'react'
import LiveTvOutlinedIcon from '@mui/icons-material/LiveTvOutlined';
import { AppBar, Toolbar, Link, Typography, Box, Button } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { AuthContext } from './AuthContext';
import { anonymousUser } from './AuthContext';

function HeaderLink({ children, to }) {
  return <Link component={RouterLink}
    to={to}
    variant='button'
    color="inherit"
    sx={{ my: 1, mx: 1.5 }}>{children}</Link>
}

export default function AppHeader({onLogin, onLogOut}) {
  return (
    <AppBar position="static">
      <Toolbar>
        <LiveTvOutlinedIcon sx={{ mr: 2 }} />
        <Typography variant="h6" color="inherit" noWrap>The Movies DB</Typography>
        <Box sx={{ flexGrow: 1 }} >
          <nav>
            <HeaderLink to="https://PashaKychergithub.io/app-movies-db-ts/">Home</HeaderLink>
            <HeaderLink to="https://PashaKychergithub.io/app-movies-db-ts/movies">Movies</HeaderLink>
            <HeaderLink to="https://PashaKychergithub.io/app-movies-db-ts/about">About</HeaderLink>
          </nav>
        </Box>
        <AuthSection onLogin={onLogin} onLogOut={onLogOut} />
      </Toolbar>
    </AppBar>
  )}

function AuthSection({onLogin, onLogOut}) {
  const auth = useContext(AuthContext)
  const loggedIn = auth.user !== anonymousUser

  if (loggedIn) {
    return (
      <>
        <Typography>Hell, {auth.user.name}!</Typography>
        <Button variant='outlined' color="inherit" sx={{ ml: 1.5 }} onClick={onLogOut}>Logout</Button>
      </>
    )}
  return (<Button variant='outlined' color="inherit" onClick={onLogin}>Login IN</Button>)
};
