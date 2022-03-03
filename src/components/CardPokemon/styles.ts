import styled, {css} from 'styled-components/native';
import {Heart} from 'react-native-feather';
interface Favorite {
  isFavorite: boolean;
}
export const Container = styled.View`
  width: 160px;
  border-radius: 8px;
  elevation: 10;
  background-color: ${({theme}) => theme.colors.background};
  padding: 10px;
  align-items: center;
  margin: 8px;
`;

export const ContainerIcon = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: flex-end;
`;
export const Icon = styled(Heart).attrs({
  width: 28,
  height: 28,
})<Favorite>`
  color: ${({theme}) => theme.colors.secondary};
  ${({isFavorite: isFavorite}) =>
    isFavorite &&
    css`
      color: ${({theme}) => theme.colors.attention};
    `}
`;

export const HeartButtom = styled.TouchableOpacity``;

export const Sprite = styled.Image`
  width: 100%;
  height: 90px;
`;
export const PokeLabels = styled.View`
  width: 100%;
  margin-top: -5px;
  margin-bottom: 4px;
  justify-content: center;
`;
export const PokeName = styled.Text`
  text-transform: capitalize;
  font-size: 18px;
  color: ${({theme}) => theme.colors.text_dark};
  font-family: ${({theme}) => theme.fonts.semiBold};
`;
export const PokeId = styled.Text`
  font-size: 14px;
  color: ${({theme}) => theme.colors.title_secondary};
  font-family: ${({theme}) => theme.fonts.medium};
`;
export const ContainerPokerType = styled.View`
  width: 100%;
  flex-direction: row;
`;

export const ContainerItem = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
