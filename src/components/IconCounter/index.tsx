import React from 'react';
import {Container, Number} from './styles';
interface Props {
  numero: number;
}
export function IconCounter({numero}: Props) {
  return (
    <Container>
      <Number>{numero}</Number>
    </Container>
  );
}
