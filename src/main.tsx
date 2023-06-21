import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { CssBaseline } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { UserProvider } from './context/UserContext.tsx';
import App from './pages/App.tsx';
import Challenge from './pages/Dashboard/Challenge.tsx';
import CreateChallenge from './pages/Dashboard/CreateChallenge.tsx';
import Protected from './components/Protected.tsx';
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/:challengeId",
    element: <Protected><Challenge/></Protected>
  },
  {
    path: "/create",
    element: <Protected><CreateChallenge/></Protected>
  }
]);
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
        <UserProvider>
          <ThemeProvider theme={darkTheme}>
            <CssBaseline enableColorScheme>
              <RouterProvider router={router}/>
            </CssBaseline>
          </ThemeProvider>
      </UserProvider>
  </React.StrictMode>,
)