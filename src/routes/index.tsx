import React, {useState} from 'react';
import {useAuth} from '../hooks/auth';
import {Home} from '../screens/Home';
import {Login} from '../screens/Login';
import {ThemeProvider} from 'styled-components';
import themeDark from '../global/styles/themeDark';
import themeLight from '../global/styles/theme';
import {useDarkTheme} from '../hooks/useDarkTheme';
export function Routs() {
  const {token} = useAuth();
  const {isDark} = useDarkTheme();
  return (
    <>
      <ThemeProvider theme={isDark ? themeDark : themeLight}>
        {token === '' ? <Login /> : <Home />}
      </ThemeProvider>
    </>
  );
}
