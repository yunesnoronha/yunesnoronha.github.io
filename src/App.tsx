import { ColorScheme, ColorSchemeProvider, MantineProvider } from '@mantine/core';
import i18next from 'i18next';
import { useState } from 'react';
import { I18nextProvider } from 'react-i18next';
import { Route, Routes } from 'react-router-dom';
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
        theme={{
          colorScheme,
          fontFamily: 'Montserrat, helvetica neue, Helvetica, Arial, sans-serif;',
        }}
        withGlobalStyles
        withNormalizeCSS
      >
        <I18nextProvider i18n={i18next}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/CV" element={<CV />} />
          </Routes>
        </I18nextProvider>
      </MantineProvider>
    </ColorSchemeProvider>
  );
}
