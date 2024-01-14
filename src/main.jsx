import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'


// Responsive font
import { ThemeProvider } from "@emotion/react";
import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import Home from './Components/Page/Home/Home/Home';

let theme = createTheme();
theme = responsiveFontSizes(theme);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
        <Home />
    </ThemeProvider>
  </React.StrictMode>,
)
