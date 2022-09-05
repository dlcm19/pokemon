import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import '../ALLPokemon/style/SelectPoke.css'


const SelectPoke = ({setSearchInput, setSelectTypePoke, selectTypePoke }) => {

    const [typePoke, setTypePoke] = useState()

    useEffect(() => {
        const URL = `https://pokeapi.co/api/v2/type/`
        axios.get(URL)
            .then(res => setTypePoke(res.data.results))
            .catch(err => console.log(err))
    }, [])

    const pekemonType = event => {
        setSelectTypePoke(event.target.value);
        setSearchInput('')
    }



    return (
        <select value={selectTypePoke} onChange={pekemonType} className='container__SelectPoke'>
            <option value="All">Select the type of pokemon</option>
            {
                typePoke?.map(type => (
                    <option key={type.name} value={type.name}>{type.name}</option>
                ))
            }
        </select>
    )
}
//https://pokeapi.co/api/v2/type/
export default SelectPoke
