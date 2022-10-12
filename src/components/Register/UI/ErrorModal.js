import React from "react";
import { Card } from "./Card";
import { Button } from "./Button";
import classes from "./ErrorModal.module.css";

export const ErrorModal = (props) => {
  console.log("props.error : ", props.error);
  return (
    <div>
      <div className={classes.backdrop} onClick={props.onConfirm}>
        <Card className={classes.modal}>
          <header className={classes.header}>
            <h2>{props.error.title}</h2>
          </header>
          <div className={classes.content}>
            <p>{props.error.message}</p>
          </div>
          <footer className={classes.actions}>
            <Button onClick={props.onConfirm}>Okay</Button>
          </footer>
        </Card>
      </div>
    </div>
  );
};