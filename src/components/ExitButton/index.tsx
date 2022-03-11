import React from 'react';

import {TouchableOpacityProps} from 'react-native';

import {Container, Title, Icon} from './styles';

export function ExitButton({...rest}: TouchableOpacityProps) {
  return (
    <Container {...rest}>
      <Title>Sair</Title>
      <Icon />
    </Container>
  );
}
