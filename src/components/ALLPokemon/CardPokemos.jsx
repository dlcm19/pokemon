import React, { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import '/src/CardPokemons.css'


const CardPokemos = ({ url }) => {

    const [displayInfo, setDisplayInfo] = useState()

    const navigate = useNavigate()

    useEffect(() => {
        axios.get(url)
            .then(res => setDisplayInfo(res.data))
            .catch(err => console.log(err))
    }, [])
    const onClickCard = () => navigate(`/PokeDexId/${displayInfo?.name}`)


    return (
        <article onClick={onClickCard}>
            <div  className='container__cardPokemos' >
            <header className='container__img__cardpokemos'>
                <img className='img__pokemos__cardpokemos' src={displayInfo?.sprites.other['dream_world']['front_default']} alt="" />
            </header>
            <section>
                <h1 className='namePokemon'>{displayInfo?.name}</h1>
                <div className='type__pokemos'>
                {
                    displayInfo?.types.map(slot => (
                        <div key={slot.type.url}>{slot.type.name}</div>
                    ))
                }
                </div>
            </section>
            <footer className='container__footer__cardPokemos'>
                {
                    displayInfo?.stats.map(stat => (
                        <div className='container__datos__pokemos' key={stat.stat.url}>
                            <h4 className='H4__CardPokemon'>{stat.stat.name}</h4>
                            <p className='P__CardPokemon'>{stat.base_stat}</p>
                        </div>
                    ))
                }
            </footer>
            </div>
        </article>
    )
}

export default CardPokemos
