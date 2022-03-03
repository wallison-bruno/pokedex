import React from 'react';

import {TouchableOpacityProps} from 'react-native';

import {Container, Title} from './styles';

interface Props {
  label: string;
}

export function TypePokemon({label}: Props) {
  return (
    <Container nameType={label}>
      <Title>{label}</Title>
    </Container>
  );
}
