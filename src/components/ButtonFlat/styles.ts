import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  align-items: center;
  border-width: 1px;
  border-color: ${({theme}) => theme.colors.title};
  border-radius: 8px;
  width: 100%;
`;

export const Title = styled.Text`
  font-family: ${({theme}) => theme.fonts.medium};
  color: ${({theme}) => theme.colors.title};
  font-size: 16px;
  padding-vertical: 10px;
`;
