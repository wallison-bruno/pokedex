import {FlatList} from 'react-native';
import styled from 'styled-components/native';
import {PokemonDTO} from '../../dtos';

export const Container = styled.View`
  flex: 1;
  margin-horizontal: 10px;
`;

export const BoxButton = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

export const BoxSingleButton = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  margin-horizontal: 18px;
  margin-bottom: 18px;
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

export const ContainerItem = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
