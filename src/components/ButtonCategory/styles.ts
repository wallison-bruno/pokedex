import styled, {css} from 'styled-components/native';
interface ContainerProps {
  isSelected: boolean;
}
export const Container = styled.TouchableOpacity<ContainerProps>`
  align-items: center;
  border-width: 1px;
  border-color: ${({theme}) => theme.colors.title};
  border-radius: 8px;
  width: 100%;
  ${({isSelected: isSelected}) =>
    isSelected &&
    css`
      background-color: ${({theme}) => theme.colors.primary};
      border-color: ${({theme}) => theme.colors.primary};
    `}
`;

export const Title = styled.Text<ContainerProps>`
  font-family: ${({theme}) => theme.fonts.regular};
  color: ${({theme}) => theme.colors.title};
  font-size: 14px;
  padding-vertical: 10px;
  ${({isSelected: isSelected}) =>
    isSelected &&
    css`
      color: ${({theme}) => theme.colors.text_dark};
      font-family: ${({theme}) => theme.fonts.medium};
    `}
`;
