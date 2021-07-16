import axios from 'axios';
import React, { useState, useEffect, useMemo } from 'react'
import { getHeroesByPublisher } from '../../selectors/getHeroesByPublisher'
import { HeroCard } from './HeroCard';

export const HeroeList = ({ publisher }) => {

    //const [heroes, setHeroes] = useState([]);

   /* useEffect(() => {
        const fetchData = async () => {
            const result = await axios.get(
                'http://localhost:5000/api/v1/resources/heroes/all');
        
                heroes.filter( hero => hero.publisher === publisher);
                setHeroes(result.data)
        }
        fetchData();
    }, []);*/

    const heroes = useMemo(() => getHeroesByPublisher ( publisher ) , [ publisher ]);
    return (
       <div className="card-columns animate__animated animate__fadeIn">
           {
               heroes.map( heroe => (
                   <HeroCard key={heroe.id}
                       { ...heroe }
                       >
                   </HeroCard>
               ))
           }
       </div>
    )
}
