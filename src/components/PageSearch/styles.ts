import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  margin: 20px;
`;

export const PokeList = styled.FlatList.attrs({
  contentContainerStyle: {
    width: '100%',
    marginTop: 14,
    paddingBottom: 24,
  },
})``;
