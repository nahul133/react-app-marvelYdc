import { Routes, Route } from "react-router-dom";
import { LoginScreen } from "../components/login/LoginScreen";
import {BrowserRouter as Router} from 'react-router-dom'
import { DashBoardRoutes } from "./DashBoardRoutes";


export function AppRouter() {
    return (
       

       <Router>
        <Routes>

          <Route path="/login" element={<LoginScreen />} />

          <Route path="/*" element={ <DashBoardRoutes /> } />

        </Routes>
      </Router>
    );
  }