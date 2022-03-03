import styled from 'styled-components/native';
import {Moon} from 'react-native-feather';

export const Container = styled.TouchableOpacity`
  flex-direction: row;
  background-color: ${({theme}) => theme.colors.secondary};
  align-items: center;
  border-radius: 22px;
  padding-horizontal: 20px;
  padding-vertical: 5px;
  justify-content: center;
`;

export const Icon = styled(Moon).attrs({
  width: 19,
})`
  color: ${({theme}) => theme.colors.text};
`;

export const Title = styled.Text`
  font-family: ${({theme}) => theme.fonts.regular};
  color: ${({theme}) => theme.colors.text};
  font-size: 14px;
  margin-left: 8px;
`;
