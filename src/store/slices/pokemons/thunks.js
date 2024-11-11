import { pokemonApi } from '../../../api/pokemonApi';
import {
  setPokemonLoading,
  setPokemons,
} from './pokemonSlice';

//endpoint https://pokeapi.co/api/v2/pokemon?limit=10&offset=10
export const getPokemons = (page = 0) => {

    return async(dispatch, getState) => {
        //pongo a mi state en estado de carga con la funcion creada en mi slice
        dispatch(setPokemonLoading())
        //TODO: REALIZAR PETICION A API
        const {data} = await pokemonApi.get(`pokemon?limit=10&offset=${page * 10}`)
        const results = data.results
        dispatch( setPokemons({pokemons: results, page}) )
    }

}