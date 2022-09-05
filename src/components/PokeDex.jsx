import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import CardPokemos from './ALLPokemon/CardPokemos'
import SearchPoke from './ALLPokemon/SearchPoke'
import SelectType from './ALLPokemon/SelectPoke'
import '../components/style/PokeDex.css'



const PokeDex = () => {
    const [cardInfo, setCardInform] = useState() // este estado es para mostar todos los pokemones 
    const [searchInput, setSearchInput] = useState() // este estado es para buscar los pokemones por el nombre
    const [selectTypePoke, setSelectTypePoke] = useState('All') // este estado es para buscar los pokemones por el tipo de elemento

    useEffect(() => {
        if (selectTypePoke !== 'All') {
     // aquí se busca el pokemon por el select - tipo de elemento
     URL = `https://pokeapi.co/api/v2/type/${selectTypePoke}`
                      axios.get(URL)
                          .then(res => {
                              const arr = res.data.pokemon.map(event => event.pokemon)
                              setCardInform({results:arr})
                              })
                          .catch(err => console.log(err))
        } 
        else if (searchInput) {
             // // aquí se hace la logica cuando el usuario busca por el input - nombre del pokemon
                    const url = `https://pokeapi.co/api/v2/pokemon/${searchInput}`
                    const obj = {
                        results: [
                            {
                                url
                            }
                        ]
                    }
                    setCardInform(obj)
        } else{
            // aquí se busca todos los pokemons
            URL = 'https://pokeapi.co/api/v2/pokemon'
            axios.get(URL)
                .then(res => setCardInform(res.data))
                .catch(err => console.log(err))
        }
    }, [searchInput, selectTypePoke])


    const nameCoach = useSelector(state => state.nameCoach)

    
    return (
        <article className='container__pokedex'>
            <h1 className='title__welcome__pokeDex'>Welcome, {nameCoach} here you can find your favorite pokemon</h1> 
            <div className='container__pokedex__input_select'>
                 
                <SearchPoke setSearchInput={setSearchInput} setSelectTypePoke = {setSelectTypePoke} />
                
                <SelectType setSelectTypePoke={setSelectTypePoke} selectTypePoke={selectTypePoke} setSearchInput={setSearchInput}/>
            </div>
            <div className='container_pokedex'>
            {
                cardInfo?.results.map(type => (
                    <CardPokemos
                        key={type.name}
                        url={type.url}
                        
                    />
                ))
            }
           
            </div>
        </article>
    )
}

export default PokeDex
