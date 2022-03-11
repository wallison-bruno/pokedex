import React from 'react';

import {TouchableOpacityProps} from 'react-native';

import {Container, Title, Indicator} from './styles';

interface Props extends TouchableOpacityProps {
  title: string;
  isLoading?: boolean;
}

export function Button({title, isLoading = true, ...rest}: Props) {
  return (
    <Container {...rest}>
      {isLoading ? <Title>{title}</Title> : <Indicator />}
    </Container>
  );
}
