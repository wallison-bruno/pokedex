import React, {useEffect, useState} from 'react';
import {ButtonCategory} from '../ButtonCategory';
import {CardPokemon} from '../CardPokemon';
import {api} from '../../api/api';
import {usePokemons} from '../../hooks/usePokrmons';
import {Container, BoxButton, BoxSingleButton, PokeList} from './styles';

interface Pokemon {
  img: string;
  name: string;
  id: number;
  type: Type[];
  isFavorite: boolean;
}

interface AtributesType {
  name: string;
  url: string;
}

interface Type {
  type: AtributesType;
}

interface ApiPokemon {
  id: number;
  name: string;
  sprites: {
    front_default: string;
  };
  types: Type[];
}

export function PageSeeAll() {
  const [buttonSelected, setButtonSelected] = useState('');
  const {handleAddListPokemon, listPokemon, handleSetListPokemon} =
    usePokemons();

  function handleButtonSelected(
    nameButton: 'all' | 'fire' | 'electric' | 'water',
  ) {
    setButtonSelected(nameButton);
  }

  async function getPokemon(url: string) {
    try {
      const {data} = await api.get<ApiPokemon>(url);
      const Pokemon = {
        img: data.sprites.front_default,
        name: data.name,
        id: data.id,
        type: data.types,
        isFavorite: false,
      } as Pokemon;
      handleAddListPokemon(Pokemon);
    } catch (error) {}
  }

  async function getAllPokemons() {
    try {
      handleSetListPokemon([]);
      const {data} = await api.get(
        `https://pokeapi.co/api/v2/pokemon?limit=20&offset=0`,
      );
      console.log(JSON.stringify(data, null, 2));
      if (data) {
        data.results.map(async (item: any) => {
          await getPokemon(item.url);
        });
      }
    } catch (error) {}
  }

  async function getFirePokemons() {
    try {
      handleSetListPokemon([]);
      const {data} = await api.get(`https://pokeapi.co/api/v2/type/10`);
      console.log(JSON.stringify(data.pokemon, null, 2));
      if (data) {
        data.pokemon.map(async (item: any) => {
          await getPokemon(item.pokemon.url);
        });
      }
    } catch (error) {}
  }

  async function getElectricPokemons() {
    handleSetListPokemon([]);
    try {
      const {data} = await api.get(`https://pokeapi.co/api/v2/type/13`);
      console.log(JSON.stringify(data.pokemon, null, 2));
      if (data) {
        data.pokemon.map(async (item: any) => {
          await getPokemon(item.pokemon.url);
        });
      }
    } catch (error) {}
  }

  async function getWaterPokemons() {
    try {
      handleSetListPokemon([]);
      const {data} = await api.get(`https://pokeapi.co/api/v2/type/11`);
      console.log(JSON.stringify(data.pokemon, null, 2));
      if (data) {
        data.pokemon.map(async (item: any) => {
          await getPokemon(item.pokemon.url);
        });
      }
    } catch (error) {}
  }

  useEffect(() => {}, []);
  return (
    <Container>
      <BoxButton>
        <BoxSingleButton>
          <ButtonCategory
            title="Todos"
            disabled={buttonSelected === 'all'}
            isSelected={buttonSelected === 'all'}
            onPress={() => {
              handleButtonSelected('all');
              getAllPokemons();
            }}
          />
        </BoxSingleButton>
        <BoxSingleButton>
          <ButtonCategory
            title="Fogo"
            disabled={buttonSelected === 'fire'}
            isSelected={buttonSelected === 'fire'}
            onPress={() => {
              handleButtonSelected('fire');
              getFirePokemons();
            }}
          />
        </BoxSingleButton>
      </BoxButton>
      <BoxButton>
        <BoxSingleButton>
          <ButtonCategory
            title="Elétrico"
            disabled={buttonSelected === 'electric'}
            isSelected={buttonSelected === 'electric'}
            onPress={() => {
              handleButtonSelected('electric');
              getElectricPokemons();
            }}
          />
        </BoxSingleButton>
        <BoxSingleButton>
          <ButtonCategory
            title="Água"
            disabled={buttonSelected === 'water'}
            isSelected={buttonSelected === 'water'}
            onPress={() => {
              handleButtonSelected('water');
              getWaterPokemons();
            }}
          />
        </BoxSingleButton>
      </BoxButton>
      <PokeList
        numColumns={2}
        data={listPokemon}
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
