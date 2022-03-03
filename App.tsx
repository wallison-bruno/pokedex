import React from 'react';
import {ThemeProvider} from 'styled-components';
import theme from './src/global/styles/theme';
import {PokemonProvider} from './src/hooks/usePokrmons';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {AuthProvider} from './src/hooks/auth';
import {Routs} from './src/routes';

export default function App() {
  return (
    <AuthProvider>
      <GestureHandlerRootView style={{flex: 1}}>
        <PokemonProvider>
          <ThemeProvider theme={theme}>
            <Routs />
          </ThemeProvider>
        </PokemonProvider>
      </GestureHandlerRootView>
    </AuthProvider>
  );
}
