import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
interface PokemonProviderProps {
  children: ReactNode;
}

interface Pokemon {
  img: string;
  name: string;
  id: number;
  type: string;
  isFavorite: boolean;
}

interface PokemonData {
  listPokemon: Pokemon[];
  listLikedPokemon: Pokemon[];
  listSearchPokemon: Pokemon[];
  handleSetListPokemon: (listPokemon: Pokemon[]) => void;
  handleAddListPokemon: (pokemon: Pokemon) => void;
  handleRemoveListPokemon: (pokemon: Pokemon) => void;
  handleAddListSearchPokemon: (pokemon: Pokemon) => void;
  handleLikedPokemon: (id: number) => void;
  handleDisLikedPokemon: (id: number) => void;
}
export const PokemonContext = createContext<PokemonData>({} as PokemonData);

export function PokemonProvider({children}: PokemonProviderProps) {
  const [listPokemon, setListPokemon] = useState<Pokemon[]>([]);
  const [listLikedPokemon, setListLikedPokemon] = useState<Pokemon[]>([]);
  const [listSearchPokemon, setListSearchPokemon] = useState<Pokemon[]>([]);

  function handleSetListPokemon(list: Pokemon[]) {
    setListPokemon(list);
  }

  function handleSetLisSearchPokemon(list: Pokemon[]) {
    setListSearchPokemon(list);
  }

  function handleAddListPokemon(pokemon: Pokemon) {
    setListPokemon(oldArray => [...oldArray, pokemon]);
  }

  function handleAddListLikedPokemon(pokemon: Pokemon) {
    setListLikedPokemon(oldArray => [...oldArray, pokemon]);
  }

  function handleAddListSearchPokemon(pokemon: Pokemon) {
    setListSearchPokemon(oldArray => [...oldArray, pokemon]);
  }

  function handleRemoveListPokemon(pokemon: Pokemon) {
    const newList = listLikedPokemon.filter(item => pokemon.id !== item.id);
    setListLikedPokemon(newList);
  }

  function handleLikedPokemon(id: number) {
    const newList = listPokemon.map(item => {
      if (id === item.id) {
        const pokemon = {
          ...item,
          isFavorite: true,
        };
        handleAddListLikedPokemon(pokemon);
        return pokemon;
      } else {
        return item;
      }
    });

    const newListSerch = listSearchPokemon.map(item => {
      if (id === item.id) {
        const pokemon = {
          ...item,
          isFavorite: true,
        };
        handleAddListLikedPokemon(pokemon);
        return pokemon;
      } else {
        return item;
      }
    });

    setListPokemon(newList);
    setListSearchPokemon(newListSerch);
  }

  function handleDisLikedPokemon(id: number) {
    const newList = listPokemon.map(item => {
      if (id === item.id) {
        const pokemon = {
          ...item,
          isFavorite: false,
        };
        handleRemoveListPokemon(pokemon);
        return pokemon;
      } else {
        return item;
      }
    });

    const newListSerch = listSearchPokemon.map(item => {
      if (id === item.id) {
        const pokemon = {
          ...item,
          isFavorite: false,
        };
        handleRemoveListPokemon(pokemon);
        return pokemon;
      } else {
        return item;
      }
    });
    setListSearchPokemon(newListSerch);
    setListPokemon(newList);
  }

  return (
    <PokemonContext.Provider
      value={{
        listPokemon,
        listLikedPokemon,
        listSearchPokemon,
        handleSetListPokemon,
        handleAddListPokemon,
        handleRemoveListPokemon,
        handleDisLikedPokemon,
        handleLikedPokemon,
        handleAddListSearchPokemon,
      }}>
      {children}
    </PokemonContext.Provider>
  );
}

export function usePokemons() {
  const context = useContext(PokemonContext);
  return context;
}
