import React from 'react';

import {TouchableOpacityProps} from 'react-native';

import {Container, Title, Icon} from './styles';
import {useTheme} from 'styled-components';

interface Props extends TouchableOpacityProps {}

export function DarkButton({...rest}: Props) {
  const theme = useTheme();
  return (
    <Container {...rest}>
      <Icon fill={theme.colors.text} />
      <Title>Tema escuro</Title>
    </Container>
  );
}
