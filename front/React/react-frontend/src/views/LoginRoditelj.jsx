import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LoginRoditelj = ({ addToken }) => {
  
  const [userData, setUserData] = useState({
    username: "", 
    password: "",
  });

  const [loginError, setLoginError] = useState(false);

  function handleInput(e) {
    let newUserData = userData; 
    newUserData[e.target.name] = e.target.value; 

    setUserData(newUserData); 
  }

  let navigate = useNavigate();
  function handleLogin(e) {
    e.preventDefault();
    
    axios
      .post("http://127.0.0.1:8000/api/login-roditelj", userData)
      .then((response) => {
        console.log(response.data);

        if (response.data.message === 'Authorized') {

          const roditeljData = response.data.roditelj;

          window.sessionStorage.setItem(
            "auth_token",
            response.data.access_token
          );
          
          window.sessionStorage.setItem('roditelj_id', roditeljData.id);
          window.sessionStorage.setItem('roditelj_ime', roditeljData.ime);
          window.sessionStorage.setItem('roditelj_prezime', roditeljData.prezime);
         
          navigate("/home-roditelj");
        }
      })
      .catch((error) => {
        setLoginError(true);
        console.log(error);
      });
  }

  return (
    <section
      className="vh-100"
      style={{
        paddingTop: 4.5 + "rem",
      }}
    >
      <div className="container-fluid h-custom">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-md-9 col-lg-6 col-xl-5">
            <img
              src="https://mojaradionicasrece.com/wp-content/uploads/2022/05/Untitled-design-43.webp"
              className="img-fluid"
              alt="Sample image"
            />
          </div>
         
          <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
            <form onSubmit={handleLogin}> 
              <div className="form-outline mb-4">
                <h1>
                   eDnevnik - roditelj
                </h1>
                <br />
                <input
                //66 linija: onSubmit pozivamo funkciju handleLogin!
                  type="username"
                  id="form3Example3"
                  className={`form-control form-control-lg ${
                    loginError ? "is-invalid" : ""
                  }`}
                  placeholder="Unesite svoj username za pristup sistemu"
                  name="username" //da bismo znali da treba to da upise u email
                  //ovde pozivamo ovu nasu funkciju, moze i ovako: onInput={handleInput}
                  onInput={(e) => handleInput(e)}
                />
                <label className="form-label" htmlFor="form3Example3">
                  username
                </label>
              </div>

              <div className="form-outline mb-3">
                <input
                  type="password"
                  id="form3Example4"
                  className={`form-control form-control-lg ${
                    loginError ? "is-invalid" : ""
                  }`}
                  placeholder="Unesite svoju šifru"
                  name="password" //da zna da treba da upise u password
                  onInput={handleInput}
                />
                <label className="form-label" htmlFor="form3Example4">
                  password
                </label>
                {loginError && (
                      <div className="invalid-feedback">
                        Pogrešno korisničko ime ili šifra. Pokušajte ponovo.
                      </div>
                    )}
              </div>

              <div className="text-center text-lg-start mt-4 pt-2">
                <button
                //bitno je da stavimo type submit jer koristimo eventhandler onSubmit
                  type="submit"
                  className="btn btn-primary btn-lg"
                  style={{
                    paddingLeft: 2.5 + "rem",
                    paddingRight: 2.5 + "rem",
                  }}
                >
                  Login
                </button>
                
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginRoditelj;