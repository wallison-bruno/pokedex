import styled from 'styled-components/native';
import {FlatList} from 'react-native';
import {PokemonDTO} from '../../dtos';

export const Container = styled.View`
  flex: 1;
  margin: 20px;
`;

export const PokeList = styled(
  FlatList as new () => FlatList<PokemonDTO>,
).attrs({
  contentContainerStyle: {
    width: '100%',
    marginTop: 14,
    paddingBottom: 24,
  },
})``;
