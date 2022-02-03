import { useNavigate, useLocation } from "react-router-dom";
import { getHeroByName } from "../../helpers/getHeroByName";
import { useForm } from "../../hooks/useForm";
import { HeroCard } from "../hero/HeroCard";
import queryString from 'query-string'
import { useMemo } from "react";




export const SearchScreen = () => {

    const navegar = useNavigate();
    const location = useLocation();

    const {q = ''} = queryString.parse(location.search)

     

    const [value, handleInputChange, reset] = useForm( {
        searchText:q,
    } )

    const {searchText} = value

    

    const heroesF = useMemo( () => getHeroByName(q), [q])

    const handleSearch = (e) => {
        e.preventDefault()
        reset()
        navegar(`?q=${searchText}`)
    }

    
    return (

            <div className="row animate__animated animate__fadeInLeft ">
              <div className="col-4 "> <h1 className="text-white text-center"> <b> Encuentra tu Heroe Favorito Aqui: </b>  </h1> </div>
              <div className="row">
                <div className="col">
                   <div className="mt-3">
                       <form onSubmit={(e) => handleSearch(e)}>
                         <input onChange={handleInputChange} value={ searchText } autoComplete="off" name="searchText" type='text' className="mx-4 mb-5"  placeholder="Buscar..." />
                         <button type="submit" className="btn btn-dark">Buscar...</button>
                       </form> 
                    </div>
                 </div>
               </div>
              <div className=" g-5">
               <div className="row">
                 <h2 className="text-white"> Aqui Estan Los Resultados De Tu Busqueda: </h2>
                 <div className="col-7">
                   <hr />

                   { 
                      heroesF.map(
                        hero => <HeroCard key={hero.id}
                                              {...hero}/>
                      )
                   }  

                   { (q === '') ? <h1 className="card-body text-white mt-5 bg-info text-center"> Buscar Heroe... </h1> : (heroesF.length === 0) && <h1 className="card-body text-danger mt-5 bg-dark text-center"> Lo Sentimos No hemos encontrado Ningun resultado: {q} </h1>} 
                   
                </div>  
               </div>
             </div>  
             </div> 
      
)};
