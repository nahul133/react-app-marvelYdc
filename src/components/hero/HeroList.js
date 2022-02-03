import { useMemo } from "react";
import { getHeroesByPublisher } from "../../helpers/getHeroByPublisher";
import { HeroCard } from "./HeroCard";
import './fondos/css.css'



export const HeroList = ({ publisher }) => {

  const heroes = useMemo(() => { return getHeroesByPublisher(publisher)} , [publisher])  

  return <div className="row rows-cols-1 row-cols-md-3 g-5 animate__animated animate__flip">
               { 
                  heroes.map( hero => (
                    <HeroCard 
                    key={hero.id}
                        {...hero } />    
                    
                  ))
               } 
         </div>
};
