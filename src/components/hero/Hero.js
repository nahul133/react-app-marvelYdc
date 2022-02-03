import { useMemo } from "react";
import { useParams, Navigate, useNavigate } from "react-router-dom";
import { getHeroById } from "../../helpers/getHeroById";


export const Hero = () => {

  const { heroeId } = useParams();
  const navegar = useNavigate();

  const hero = useMemo(() => { return getHeroById(heroeId)}, [heroeId]); 

  if(!hero) { return <Navigate to='/' />}


  const img = `/assets/${hero.id}.jpg`

  const handleExit = () => {

    navegar(-1)

  }


  return <div className="row mt-5 animate__animated animate__fadeInLeft">
           <div className="col-4">
              <img src={ img } alt={hero.superhero} className="img-thumbnail"/>
           </div> 

           <div className="col-8 g-3">
              <h3 className="text-danger"> {hero.superhero} </h3>
              <ul className="list-group list-group">
                  <li className="list-group-item"> <b>Alter Ego:</b> {hero.alter_ego} </li>
                  <li className="list-group-item"> <b>Publisher:</b> {hero.publisher} </li>
                  <li className="list-group-item"> <b>First Appearance:</b> {hero.first_appearance} </li>
              </ul>
              
              <h4 className="mt-3 text-danger">Characters:</h4>
              <p className="text-danger"> <b> {hero.characters}</b> </p>

              <button onClick={ handleExit } className="btn btn-primary">
                Regresar
              </button>

           </div>        
        </div>
};
