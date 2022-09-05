import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setNameCoach } from './store/slices/nameCoach.slice'
import '../styles/Root.css'
const Root = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const RootNamecoach = event => {
        event.preventDefault()
        const value = event.target.name.value.trim().toLowerCase()
        if (value.length !== 0) {
            dispatch(setNameCoach(value))
            navigate('/PokeDex')
        } event.target.name.value = ''
    }


    return (
        <div className='container__root'>
            <img className='logo' src="./public/Logo_de_Pokémon_HOME.png" alt="" />
            <img className='entrenado' src="./public/entrenador.png" alt="" />
            <h1>¡Hi coach! </h1>
            <p className='root__p'>To start, give me your name</p>
            <form onSubmit={RootNamecoach}>
                <input className='input__root' id='name' type="text" required maxLength={18} minLength={4} />
                <button className='bnt'>Begin</button>
            </form>

        </div>
    )
}

export default Root
