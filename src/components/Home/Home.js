import React, { useContext } from "react";
import { AuthConetext } from "../../context/authContext";

import { Card } from "../common/Card";
import { Button } from "../UI/Button";

import classes from "./Home.module.css";

const Home = () => {
  const { onLogout } = useContext(AuthConetext);
  return (
    <Card className={classes.home}>
      <h1>Welcome back!</h1>
      <Button onClick={onLogout}>Logout</Button>
    </Card>
  );
};

export default Home;
