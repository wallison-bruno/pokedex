import styled from 'styled-components/native';
import {TouchableOpacity} from 'react-native';

export const Container = styled(TouchableOpacity)`
  background-color: ${({theme}) => theme.colors.primary};
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 62px;
  border-radius: 8px;
  margin-top: 10px;
`;

export const Title = styled.Text`
  font-family: ${({theme}) => theme.fonts.medium};
  color: ${({theme}) => theme.colors.text_dark};
  font-size: 16px;
  padding: 18px;
`;

export const Indicator = styled.ActivityIndicator.attrs({})`
  margin: 10px;
`;
