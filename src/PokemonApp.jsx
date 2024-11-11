import { useEffect } from 'react';

import {
  useDispatch,
  useSelector,
} from 'react-redux';

import { getPokemons } from './store/slices/pokemons';

export const PokemonApp = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPokemons())

  }, [])

  const { pokemons = [], isLoad, page } = useSelector(state => state.pokemons)



  return (
    <>
      {
        isLoad ? (<p>Loading...</p>)
          : (
            <>
              <h1>
                Pokemon app
              </h1>
              <ul>
                {
                  pokemons.map(pokemon => (
                    <li key={pokemon.name}>{pokemon.name}</li>
                  ))
                }
              </ul>
              <div>
              <button 
              onClick={() => dispatch(getPokemons(page + 1))}
              disabled={isLoad}
              >Next</button>
              <span>{page + 1}</span>
              <button 
              onClick={() =>{ 
                if(page > 0) dispatch(getPokemons(page - 1))
              }}
              disabled={isLoad || page <= 0}
              >Previous</button>
              </div>
            </>
          )
      }
    </>
  )
}
