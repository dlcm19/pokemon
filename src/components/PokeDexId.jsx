import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import '../components/style/PokeDexId.css'

const PokeDexId = () => {

  const [pokemonMoreInfo, setPokemonMoreInfo,] = useState()

  useEffect(() => {
    const URL = `https://pokeapi.co/api/v2/pokemon/${name}/`
    axios.get(URL)
      .then(res => setPokemonMoreInfo(res.data))
      .catch(err => console.log(err))
  }, [])
  const nameCoach = useSelector(state => state.nameCoach)
  console.log(pokemonMoreInfo);

  const { name } = useParams()
  return (
    <article className='container__PokeDexId'>
      <div>
        <p className='P__PokeDexId'> Excellent {nameCoach} you caught your favorite pokemon : {pokemonMoreInfo?.name}</p> 
      </div>
      <header className='header__PokeDexId'>
        <div>
        <img className='img__PokeDexId' src={pokemonMoreInfo?.sprites.other["official-artwork"]["front_default"]} alt={name} />
         
        <div className='type__PokrDexId'>
        {
          pokemonMoreInfo?.types.map(type => (
            <div key={type.type.url}>
              <span className='span__title__type'>type:</span> {type.type.name}
            </div>
          ))
        }
      </div>
      </div>
          <div className='stats__PokeDexId'>
        {
          pokemonMoreInfo?.stats.map(s => (
            <div className='container__Speed' key={s.stat.url}>
            <p className='title'> {s.stat.name} </p>
              <p className='result'>{s.base_stat} </p> 
             <p>  {s.base_stat.effort}</p> 
            </div>
          ))
        }
        </div>
      </header>
      <div  className='container__abi__exp__mov'>
        <div>
          {
            pokemonMoreInfo?.abilities.map(ability => (
              <div key={ability.ability.url}>
                <span className='span__Ability'>Ability :</span> {ability.ability.name}
              </div>

            ))
          }


        </div>
        <div>
          <span className='span__experience'>Base experience : </span>{pokemonMoreInfo?.base_experience}
        </div>
        <div>
          {/* {
          pokemonMoreInfo?.moves.map(move => (
            <div key={move.move.url}>
              {move.move.name}
            </div>
          ))

        } */}
          <span className='span__move'>Move :</span> {pokemonMoreInfo?.moves[0].move.name}
        </div>
      </div>
    </article>
  )
}

export default PokeDexId
