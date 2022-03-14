import styled from 'styled-components/native';
import {TextInput} from 'react-native';

export const Container = styled.View`
  width: 100%;
`;

export const Input = styled(TextInput).attrs({})`
  color: ${({theme}) => theme.colors.title_secondary};
  border-radius: 8px;
  border-width: 1px
  border-color:${({theme}) => theme.colors.title_secondary};
  padding: 18px;
  margin-bottom: 15px;
  font-family: ${({theme}) => theme.fonts.regular};
  font-size: 14px;
  
`;
