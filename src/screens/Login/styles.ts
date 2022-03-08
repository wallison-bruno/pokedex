import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: space-between;
  background-color: ${({theme}) => theme.colors.background}; ;
`;

export const Logo = styled.Image.attrs({})`
  width: 206px;
`;

export const Phrase = styled.Text`
  font-size: 24px
  color: ${({theme}) => theme.colors.text_dark};
  font-family: ${({theme}) => theme.fonts.bold};
  line-height: 41px
  margin-bottom: 40px;
`;

export const InputsContent = styled.View``;

export const ContentLogin = styled.View`
  width: 100%;
  padding-horizontal: 24px;
`;

export const Figure = styled.Image.attrs({})`
  width: 100%;
`;

export const ContentLogo = styled.View`
  margin-vertical: 56px;
  width: 100%;
  align-items: center;
`;

export const Indicator = styled.ActivityIndicator.attrs({})`
  margin: 10px;
`;
