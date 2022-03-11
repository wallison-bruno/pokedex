import styled from 'styled-components/native';
import {FlatList} from 'react-native';
import {PokemonDTO} from '../../dtos';

export const Container = styled.View`
  flex: 1;
`;
export const ContainerEmpty = styled.View`
  flex: 1;
  align-items: center;
`;
export const Image = styled.Image``;
export const Phrase = styled.Text`
  margin-top: 40px;
  margin-bottom: 8px;
  font-size: 26px;
  font-family: ${({theme}) => theme.fonts.semiBold};
  color: ${({theme}) => theme.colors.text_dark};
`;
export const Indication = styled.Text`
  font-size: 16px;
  text-align: center;
  font-family: ${({theme}) => theme.fonts.regular};
  color: ${({theme}) => theme.colors.title};
  margin-bottom: 32px;
  line-height: 24px;
`;

export const BoxButton = styled.View`
  width: 70%;
`;
export const PokeList = styled(
  FlatList as new () => FlatList<PokemonDTO>,
).attrs({
  contentContainerStyle: {
    width: '100%',
    marginTop: 14,
    paddingBottom: 24,
    paddingHorizontal: 10,
  },
})``;

export const ContainerPhrase = styled.View`
  align-items: center;
`;
export const PhraseNumber = styled.Text`
  margin-top: 40px;
  margin-bottom: 8px;
  font-size: 20px;
  font-family: ${({theme}) => theme.fonts.regular};
  color: ${({theme}) => theme.colors.text_dark};
`;
