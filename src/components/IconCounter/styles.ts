import styled from 'styled-components/native';

export const Container = styled.View`
  width: 20px;
  height: 20px;
  border-radius: 10px;
  background-color: ${({theme}) => theme.colors.text_dark};
  justify-content: center;
  align-items: center;
  margin-top: -5px;
`;

export const Number = styled.Text`
  font-family: ${({theme}) => theme.fonts.medium};
  color: ${({theme}) => theme.colors.background};
  font-size: 10px;
`;
