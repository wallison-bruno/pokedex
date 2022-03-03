import React from 'react';
import {
  Container,
  Image,
  Phrase,
  Indication,
  BoxButton,
  PokeList,
  ContainerEmpty,
  ContainerPhrase,
  PhraseNumber,
} from './styles';
import {ButtonFlat} from '../ButtonFlat';
import {usePokemons} from '../../hooks/usePokrmons';
import {CardPokemon} from '../CardPokemon';

export function PageEmpty() {
  const {listLikedPokemon} = usePokemons();
  return (
    <Container>
      {listLikedPokemon.length === 0 ? (
        <ContainerEmpty>
          <Image source={require('../../assets/images/astronaut.png')} />
          <Phrase>Está meio vazio por aqui!</Phrase>
          <Indication>
            Procure por pokémons para adioná-{'\n'}los aos seus favoritos.
          </Indication>
          <BoxButton>
            <ButtonFlat title="Procurar Pokémons" />
          </BoxButton>
        </ContainerEmpty>
      ) : (
        <>
          <ContainerPhrase>
            <PhraseNumber>
              Olá, você tem {listLikedPokemon.length}{' '}
              {listLikedPokemon.length === 1
                ? 'pokemon salvo!'
                : 'pokemons salvos!'}
            </PhraseNumber>
          </ContainerPhrase>
          <PokeList
            numColumns={2}
            data={listLikedPokemon}
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false}
            renderItem={({item}) =>
              item.isFavorite && (
                <CardPokemon
                  name={item.name}
                  id={item.id}
                  img={item.img}
                  type={item.type}
                  isFavorite={item.isFavorite}
                />
              )
            }
          />
        </>
      )}
    </Container>
  );
}
