import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import AppHeader from './AppHeader';
import { teal } from '@mui/material/colors';
import { anonymousUser, AuthContext } from './AuthContext';




const defaultTheme = createTheme({
  palette: {
    primary: teal,
    secondary: {
      main: '#96000f',
    },
  },
})

const fakeAuth = {
  user:{
    name: 'Daniel',
  }
}
function App() {
  const [user, setUser] = useState({ user: anonymousUser})

  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <AuthContext.Provider value={user}>
        <AppHeader onLogin={() => setUser(fakeAuth)} onLogOut={() => setUser({ user: anonymousUser})} />
        <main>
          <Outlet />
        </main>
      </AuthContext.Provider>
    </ThemeProvider>
  );
}

export default App;
