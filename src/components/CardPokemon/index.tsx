import React, {useState} from 'react';
import {ButtonPokeCard} from '../ButtonPokeCard';
import {TypePokemon} from '../TypePokemon';
import {useTheme} from 'styled-components';
import {usePokemons} from '../../hooks/usePokrmons';
import {PokemonDTO} from '../../dtos';
import {
  Container,
  ContainerIcon,
  Icon,
  Sprite,
  PokeLabels,
  PokeName,
  PokeId,
  ContainerPokerType,
  HeartButtom,
  ContainerItem,
} from './styles';

export function CardPokemon({img, name, id, type, isFavorite}: PokemonDTO) {
  const theme = useTheme();
  const {handleDisLikedPokemon, handleLikedPokemon} = usePokemons();
  const [marker, setMarker] = useState(isFavorite);

  function handlerMarker() {
    !marker ? addPokemonFavorite() : RemovePokemonFavorite();
  }

  function addPokemonFavorite() {
    setMarker(!marker);
    handleLikedPokemon(id);
  }

  function RemovePokemonFavorite() {
    setMarker(!marker);
    handleDisLikedPokemon(id);
  }

  return (
    <ContainerItem>
      <Container>
        <ContainerIcon>
          <HeartButtom
            onPress={() => {
              handlerMarker();
            }}>
            <Icon
              isFavorite={isFavorite}
              fill={isFavorite ? theme.colors.attention : undefined}
            />
          </HeartButtom>
        </ContainerIcon>
        <Sprite
          source={{
            uri: img,
          }}
          resizeMode={'contain'}
        />
        <PokeLabels>
          <PokeName>{name}</PokeName>
          <PokeId>ID: {id}</PokeId>
        </PokeLabels>
        <ContainerPokerType>
          {type && type.map(item => <TypePokemon label={item.type.name} />)}
        </ContainerPokerType>
        <ButtonPokeCard title="Ver Detalhes" />
      </Container>
    </ContainerItem>
  );
}
