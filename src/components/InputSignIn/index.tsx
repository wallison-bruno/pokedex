import React from 'react';
import {Container, Input} from './styles';
import {TextInputProps} from 'react-native';
import {Control, Controller} from 'react-hook-form';

interface Props extends TextInputProps {
  name: string;
  control: Control;
}

export function InputSignIn({name, control, ...rest}: Props) {
  return (
    <Container>
      <Controller
        control={control}
        render={({field: {onChange, onBlur, value}}) => (
          <Input
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            {...rest}
          />
        )}
        name={name}
      />
    </Container>
  );
}
