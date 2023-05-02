import { ColorScheme, ColorSchemeProvider, MantineProvider } from '@mantine/core';
import { useState } from 'react';
import { Route, Router, Routes } from 'react-router-dom';
import About from './pages/About';
import CV from './pages/CV';
import Home from './pages/Home';

export default function App() {
  const [colorScheme, setColorScheme] = useState<ColorScheme>('light');
  const toggleColorScheme = (value?: ColorScheme) => {
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));
  };

  return (
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
      <MantineProvider
        theme={{ fontFamily: 'Montserrat, helvetica neue, Helvetica, Arial, sans-serif;' }}
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
