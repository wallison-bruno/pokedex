interface AtributesType {
  name: string;
  url: string;
}

interface Type {
  type: AtributesType;
}

export interface PokemonDTO {
  img: string;
  name: string;
  id: number;
  type: Type[];
  isFavorite: boolean;
}
