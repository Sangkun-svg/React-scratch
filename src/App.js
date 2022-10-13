import React, { useContext, useId } from "react";
import { AuthConetext } from "./context/authContext";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";

function App() {
  const { isLoggedIn, onLogin, onLogout } = useContext(AuthConetext);
  const id = useId();
  console.log("useId : ", id);
  return (
    <React.Fragment>
      <MainHeader />
      <main>
        {!isLoggedIn && <Login onLogin={onLogin} />}
        {isLoggedIn && <Home onLogout={onLogout} />}
      </main>
    </React.Fragment>
  );
}

export default App;
