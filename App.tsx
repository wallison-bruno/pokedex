import React from 'react';
import {ThemeProvider} from 'styled-components';
import theme from './src/global/styles/theme';
import {PokemonProvider} from './src/hooks/usePokrmons';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {AuthProvider} from './src/hooks/auth';
import {Routs} from './src/routes';
import {DarkThemeProvider} from './src/hooks/useDarkTheme';
export default function App() {
  return (
    <DarkThemeProvider>
      <AuthProvider>
        <GestureHandlerRootView style={{flex: 1}}>
          <PokemonProvider>
            <ThemeProvider theme={theme}>
              <Routs />
            </ThemeProvider>
          </PokemonProvider>
        </GestureHandlerRootView>
      </AuthProvider>
    </DarkThemeProvider>
  );
}
