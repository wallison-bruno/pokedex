import React from 'react';

import {TouchableOpacityProps} from 'react-native';

import {Container, Title, Icon} from './styles';

interface Props extends TouchableOpacityProps {}

export function ExitButton({...rest}: Props) {
  return (
    <Container {...rest}>
      <Title>Sair</Title>
      <Icon />
    </Container>
  );
}
