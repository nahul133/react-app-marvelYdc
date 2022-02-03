import { Navbar } from "../components/ui/Navbar"
import { Routes, Route } from "react-router-dom";
import { DcScreen } from "../components/dc/DcScreen";
import { MarvelScreen } from "../components/marvel/MarvelScreen";
import { SearchScreen } from "../components/search/SearchScreen";
import { Hero } from "../components/hero/Hero";


export const DashBoardRoutes = () => {
  return <>
            <Navbar />
 
            <div className="container mt-5">
            <Routes>
                <Route path="marvel" element={<MarvelScreen />} />
                <Route path="dc" element={<DcScreen />} />

                <Route path="search" element={<SearchScreen />} />
                <Route path="heroe/:heroeId" element={<Hero />} />

                <Route path="/" element={<MarvelScreen />} />
             </Routes>
             </div>
             <div className="mt-5">
             </div>           
  
         </>
}
