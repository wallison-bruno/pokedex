import styled from 'styled-components/native';
import {LogOut} from 'react-native-feather';
import {TouchableOpacity} from 'react-native';
export const Container = styled(TouchableOpacity)`
  flex-direction: row;
  background-color: ${({theme}) => theme.colors.background};
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  padding-horizontal: 10px;
  padding-vertical: 2px;
  border-width: 1px;
  border-color: ${({theme}) => theme.fonts.regular};
`;

export const Icon = styled(LogOut).attrs({
  width: 14,
})`
  color: ${({theme}) => theme.colors.text_dark};
`;

export const Title = styled.Text`
  font-family: ${({theme}) => theme.fonts.regular};
  color: ${({theme}) => theme.colors.text_dark};
  font-size: 14px;
  margin-right: 40px;
`;
