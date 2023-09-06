import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const pokemonApi = createApi({
    reducerPath: 'pokemonApi',
    baseQuery: fetchBaseQuery({baseUrl: 'https://pokeapi.co/api/v2/'}),
    endpoints: (builder) => ({
        getPokemonByName: builder.query({
            query: (name) => `pokemon/${name}`,
        }),
        getPokemon : builder.query({
            query:()=> 'pokemon'
        })
    }),
})

export const {useGetPokemonByNameQuery, useGetPokemonQuery} = pokemonApi