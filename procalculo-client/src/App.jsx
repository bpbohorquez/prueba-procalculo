import { MainRouter } from "./Routes/MainRouter";
import { useEffect, useState } from "react";
import { getToken } from "./utils/localStorage";
import { useDispatch } from "react-redux";
import { signin } from "./features/auth/authSlice";
import AppSpinner from "./components/AppSpinner";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const verifyToken = async () => {
      const token = getToken();

      if (token) {
        const verifyTokenResponse = await fetch("/users/verify", {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          method: "POST",
          body: JSON.stringify({
            token,
          }),
        });

        const verifyTokenData = await verifyTokenResponse.json();

        if (verifyTokenData.success) {
          dispatch(signin());
        }
      }

      setIsLoading(false);
    };

    verifyToken();
  }, []);

  return (
    <div className="App">{isLoading ? <AppSpinner /> : <MainRouter />}</div>
  );
}

export default App;
