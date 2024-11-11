import { createSlice } from '@reduxjs/toolkit';

export const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState: {
        page: 0,
        pokemons: [],
        isLoad: false,
    },
    reducers: {
        setPokemonLoading: (state) => {
            //estado de carga de mi state
            state.isLoad = true
        },
        setPokemons: (state, action) => {
            state.isLoad = false
            state.page = action.payload.page
            state.pokemons = action.payload.pokemons
        } 
    }
});


// Action creators are generated for each case reducer function
export const { setPokemonLoading, setPokemons } = pokemonSlice.actions;