import React from 'react';
import {StatusBar} from 'react-native';
import {Container, Logo} from './styles';

export function Header() {
  return (
    <>
      <StatusBar
        translucent={true}
        barStyle={'dark-content'}
        backgroundColor="transparent"
      />
      <Container>
        <Logo source={require('../../assets/images/pokemon.png')} />
      </Container>
    </>
  );
}
