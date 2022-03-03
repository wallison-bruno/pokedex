import React from 'react';
import {
  Container,
  Logo,
  Phrase,
  InputsContent,
  Figure,
  ContentLogin,
  ContentLogo,
  Indicator,
} from './styles';
import {InputSignIn} from '../../components/InputSignIn';
import {Button} from '../../components/Button';
import {ActivityIndicator, StatusBar} from 'react-native';
import {useAuth} from '../../hooks/auth';
import {useForm} from 'react-hook-form';

export function Login() {
  const {control, handleSubmit} = useForm();
  const {signIn, isLoadingSingNin} = useAuth();

  return (
    <Container>
      <StatusBar
        translucent={false}
        barStyle={'dark-content'}
        backgroundColor="transparent"
      />
      <ContentLogo>
        <Logo source={require('../../assets/images/pokemon-logo.png')} />
      </ContentLogo>
      <ContentLogin>
        <Phrase>
          Comece a coletar{'\n'}
          Pokémons!
        </Phrase>
        <InputsContent>
          <InputSignIn placeholder="Email" name="email" control={control} />
          <InputSignIn
            placeholder="Senha"
            secureTextEntry={true}
            name="password"
            control={control}
          />
        </InputsContent>
        <Button title="Entrar" onPress={handleSubmit(signIn)} />
        {isLoadingSingNin && <Indicator />}
      </ContentLogin>
      <Figure source={require('../../assets/images/login-imagem.png')} />
    </Container>
  );
}