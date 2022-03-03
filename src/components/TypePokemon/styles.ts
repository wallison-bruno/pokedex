import styled, {css} from 'styled-components/native';
interface TypePokemon {
  nameType: string;
}
export const Container = styled.TouchableOpacity<TypePokemon>`
  align-items: center;
  border-radius: 8px;
  margin-right: 4px;
  background-color: ${({theme}) => theme.colors.border};
  ${({nameType: nameType}) =>
    nameType === 'normal' &&
    css`
      background-color: ${({theme}) => theme.colors.text_dark};
    `}
  ${({nameType: nameType}) =>
    nameType === 'water' &&
    css`
      background-color: ${({theme}) => theme.colors.blue};
    `}
  ${({nameType: nameType}) =>
    nameType === 'fire' &&
    css`
      background-color: ${({theme}) => theme.colors.attention};
    `}
     ${({nameType: nameType}) =>
    (nameType === 'electric' || nameType === 'flying') &&
    css`
      background-color: ${({theme}) => theme.colors.primary};
    `}
     ${({nameType: nameType}) =>
    (nameType === 'grass' || nameType === 'bug') &&
    css`
      background-color: ${({theme}) => theme.colors.green};
    `}
`;

export const Title = styled.Text`
  font-size: 8px;
  padding-horizontal: 10px;
  padding-vertical: 3px;
  color: ${({theme}) => theme.colors.background};
  font-family: ${({theme}) => theme.fonts.medium};
`;
