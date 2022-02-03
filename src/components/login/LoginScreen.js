import { useNavigate } from "react-router-dom";




export const LoginScreen = () => {

    const navigate = useNavigate();

    const handleLogin = () => {

        navigate('/marvel' )
    }

    return <div className="col-2 container mt-5">
              <h1 className="text-white card-body bg-dark text-center">Login</h1>
              <hr />

             <center> <button className="btn btn-primary" onClick={ handleLogin }>
                  Entrar...  
              </button> </center>    
           </div>
};
