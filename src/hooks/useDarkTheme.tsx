import React, {createContext, ReactNode, useContext, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useEffect} from 'react';
import {api} from '../api/api';

interface Node {
  children: ReactNode;
}

interface ContextData {
  isDark: boolean;
  handleIsDark(): Promise<void>;
}

const AuthContext = createContext({} as ContextData);
const storageKey = `@pokemons:token`;

function DarkThemeProvider({children}: Node) {
  const [isDark, setIsDark] = useState(false);

  async function handleIsDark() {
    setIsDark(!isDark);
  }

  return (
    <AuthContext.Provider
      value={{
        isDark,
        handleIsDark,
      }}>
      {children}
    </AuthContext.Provider>
  );
}

function useDarkTheme() {
  const context = useContext(AuthContext);
  return context;
}

export {DarkThemeProvider, useDarkTheme};
