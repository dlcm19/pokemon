import React from 'react'
import '../ALLPokemon/style/SearchPoke.css'

const SearchPoke = ({ setSearchInput, setSelectTypePoke }) => {
    const SearchPoke = event => {
        event.preventDefault()
        if (SearchPoke) {
            setSearchInput(event.target.namePoke.value.trim().toLowerCase());
            setSelectTypePoke('All')
        }
        event.target.namePoke.value = ''
    }

    return (
        <form onSubmit={SearchPoke} className='container__form__SearchPoke'>
            <input className='input__SearchPoke' id='namePoke' type="text" />
            <button className='bnt__SearchPoke'>Search</button>
        </form>
    )
}

export default SearchPoke
