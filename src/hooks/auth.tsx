import React, {createContext, ReactNode, useContext, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useEffect} from 'react';
import {api} from '../api/api';

interface Count {
  email: string;
  password: string;
}

interface Node {
  children: ReactNode;
}

interface ContextData {
  token: string;
  signIn(count: any): Promise<void>; // any porque o onSubmit espera o 'tipo' any
  signOut(): Promise<void>;
  isLoadingSingNin: boolean;
}

const AuthContext = createContext({} as ContextData);
const storageKey = `@pokemons:token`;

function AuthProvider({children}: Node) {
  const [token, setToken] = useState('');
  const [isLoadingSingNin, setIsLoadingSingNin] = useState(false);

  async function signOut() {
    await AsyncStorage.removeItem(storageKey);
    setToken('');
  }

  async function signIn({email, password}: any) {
    //autenticação
    setIsLoadingSingNin(true);
    try {
      const {data} = await api.post('https://reqres.in/api/login', {
        email,
        password,
      });

      await AsyncStorage.setItem(storageKey, JSON.stringify(data?.token));
      const tokenApi = JSON.stringify(data?.token);
      setToken(tokenApi);

      setIsLoadingSingNin(false);
    } catch (error) {
      setIsLoadingSingNin(false);
    }
    setIsLoadingSingNin(false);
  }

  useEffect(() => {
    async function getStorageUser() {
      const tokenStorage = await AsyncStorage.getItem(storageKey);
      setToken(tokenStorage! ? JSON.parse(tokenStorage) : '');
    }
    getStorageUser();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        token,
        signOut,
        signIn,
        isLoadingSingNin,
      }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);
  return context;
}

export {AuthProvider, useAuth};
