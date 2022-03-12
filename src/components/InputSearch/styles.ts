import styled from 'styled-components/native';
import {Search} from 'react-native-feather';
import {TextInput} from 'react-native';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  height: 54px;
  width: 100%;
  color: ${({theme}) => theme.colors.title_secondary};
  border-radius: 8px;
  border-width: 1px
  border-color:${({theme}) => theme.colors.border};
  padding-right: 16px;
  padding-left: 9px;
  margin-bottom: 15px;
`;

export const Input = styled(TextInput)`
  flex: 1;
  font-family: ${({theme}) => theme.fonts.medium};
  font-size: 14px;
`;

export const Icon = styled(Search)`
  color: ${({theme}) => theme.colors.text_dark};
`;
