import "./App.css";
import { Mapa } from "./components/Mapa/Mapa";
import { Usuario } from "./components/Usuario/Usuario";
import LogInCard from "./components/LogInCard/LogInCard";
import { NavigationBar } from "./components/NavigationBar/NavigationBar";
import { FormularioApi } from "./components/FormularioApi/FormularioApi";
import SignUpCard from "./components/SignUpCard/SignUpCard";
import { MainRouter } from "./Routes/MainRouter";
import { useEffect } from "react";
import { getToken } from "./utils/localStorage";
import { useDispatch } from "react-redux";
import { signin } from "./features/auth/authSlice";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const token = getToken();

    if (token) {
      fetch("/users/verify", {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({
          token,
        }),
      })
        .then((resp) => resp.json())
        .then((data) => {
          if (data.success) {
            dispatch(signin());
          }
        });
    }
  }, []);

  return (
    <div className="App">
      {/* <NavigationBar /> */}
      {/* <Usuario nombreUsuario="A" /> */}

      <MainRouter />
    </div>
  );
}

export default App;
