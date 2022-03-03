import React from 'react';

import {TouchableOpacityProps} from 'react-native';

import {Container, Title} from './styles';

interface Props extends TouchableOpacityProps {
  title: string;
  isSelected: boolean;
}

export function ButtonCategory({title, isSelected, ...rest}: Props) {
  return (
    <Container {...rest} isSelected={isSelected}>
      <Title isSelected={isSelected}>{title}</Title>
    </Container>
  );
}
