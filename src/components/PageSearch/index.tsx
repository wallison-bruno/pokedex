import React from 'react';
import {InputSearch} from '../InputSearch';
import {Container, PokeList} from './styles';
import {useForm} from 'react-hook-form';
import {api} from '../../api/api';
import {usePokemons} from '../../hooks/usePokrmons';
import {CardPokemon} from '../CardPokemon';
import {PokemonDTO} from '../../dtos';

interface Form {
  name: string;
}

export function PageSearch() {
  const {
    control,
    handleSubmit,
    reset,
    formState: {errors},
  } = useForm();

  const {listSearchPokemon, handleAddListSearchPokemon} = usePokemons();

  async function getAllPokemons(form: Form) {
    const name = form.name ? form.name.toLowerCase() : '';
    try {
      const {data} = await api.get(`https://pokeapi.co/api/v2/pokemon/${name}`);

      if (data?.id) {
        const Pokemon = {
          img: data?.sprites.front_default,
          name: data?.name,
          id: data?.id,
          type: data?.types,
          isFavorite: false,
        } as PokemonDTO;
        handleAddListSearchPokemon(Pokemon);
      }
    } catch (error) {}
  }

  return (
    <Container>
      <InputSearch
        name="name"
        control={control}
        placeholder="Procure por pokémons"
        autoCorrect={false}
        keyboardType="web-search"
        onSubmitEditing={handleSubmit(getAllPokemons)}
      />

      <PokeList
        numColumns={2}
        data={listSearchPokemon}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => (
          <CardPokemon
            name={item.name}
            id={item.id}
            img={item.img}
            type={item.type}
            isFavorite={item.isFavorite}
          />
        )}
      />
    </Container>
  );
}
