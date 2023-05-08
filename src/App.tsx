import { ColorScheme, ColorSchemeProvider, MantineProvider } from '@mantine/core';

import { useState } from 'react';

import { Route, Routes } from 'react-router-dom';
import CV from './pages/CV';
import Home from './pages/Home';

import './config/i18next';
export default function App() {
  const [colorScheme, setColorScheme] = useState<ColorScheme>('light');
  const toggleColorScheme = (value?: ColorScheme) => {
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));
  };

  return (
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
      <MantineProvider
        theme={{
          colorScheme,
          fontFamily: 'Montserrat, helvetica neue, Helvetica, Arial, sans-serif;',
        }}
        withGlobalStyles
        withNormalizeCSS
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/CV" element={<CV />} />
        </Routes>
      </MantineProvider>
    </ColorSchemeProvider>
  );
}
