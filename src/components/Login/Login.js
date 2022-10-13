import React, { useState, useEffect, useContext, useRef } from "react";
import { AuthConetext } from "../../context/authContext";

import { Card } from "../common/Card";
import { Button } from "../UI/Button";
import { Input } from "../UI/Input";

import classes from "./Login.module.css";

const Login = () => {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [emailIsValid, setEmailIsValid] = useState();
  const [enteredPassword, setEnteredPassword] = useState("");
  const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  useEffect(() => {
    // 사용자가 키패드를 입력할때가 아닌 입력을 멈췄을 때 디바운싱(그룹화)하여 유효한지 확인하는게 더 효율적
    const identifier = setTimeout(() => {
      setFormIsValid(
        enteredEmail.includes("@") && enteredPassword.trim().length > 6
      );
    }, 500);

    return () => {
      clearTimeout(identifier);
    };
  }, [enteredEmail, enteredPassword]);

  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const { onLogin } = useContext(AuthConetext);

  const emailChangeHandler = ({ target: { value } }) => {
    setEnteredEmail(value);

    setFormIsValid(value.includes("@") && enteredPassword.trim().length > 6);
  };

  const passwordChangeHandler = ({ target: { value } }) => {
    setEnteredPassword(value);

    setFormIsValid(value.trim().length > 6 && enteredEmail.includes("@"));
  };

  const validateEmailHandler = () => {
    setEmailIsValid(enteredEmail.includes("@"));
  };

  const validatePasswordHandler = () => {
    setPasswordIsValid(enteredPassword.trim().length > 6);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (formIsValid) {
      onLogin(enteredEmail, enteredPassword);
    }
    if (!enteredEmail) {
      emailInputRef.current.activate();
    }
    if (!enteredPassword) {
      passwordInputRef.current.activate();
    }
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <Input
          id="email"
          ref={emailInputRef}
          type="email"
          name="email"
          label="E-Mail"
          isValid={emailIsValid}
          value={enteredEmail}
          onChange={emailChangeHandler}
          onBlur={validateEmailHandler}
        />
        <Input
          id="password"
          ref={passwordInputRef}
          type="password"
          name="password"
          label="Password"
          isValid={passwordIsValid}
          value={enteredPassword}
          onChange={passwordChangeHandler}
          onBlur={validatePasswordHandler}
        />

        <div className={classes.actions}>
          <Button type="submit" className={classes.btn}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
