import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import { ThemeContextProvider } from './context/ThemeContext';
import { ChakraProvider } from '@chakra-ui/react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ChakraProvider>
    <BrowserRouter>
    <ThemeContextProvider>
       <App />
       </ThemeContextProvider>
    </BrowserRouter>
  </ChakraProvider>
);

reportWebVitals();
