import React, { useState, useRef } from "react";
import { Card } from "../UI/Card";
import { Button } from "../UI/Button";
import { ErrorModal } from "../UI/ErrorModal";
import { Wrapper } from "../../Helpers/Wrapper";
import classes from "./AddUser.module.css";

export const AddUser = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();
  const [error, setError] = useState();

  const AddUserHandler = (e) => {
    e.preventDefault();
    const username = nameInputRef.current.value;
    const age = ageInputRef.current.value;
    if (username.trim().length === 0 || age.trim().length === 0) {
      return setError({
        title: "Invaild input",
        message: "Please enter a vaild name and age (non-empty value)",
      });
    }
    if (+age < 1) {
      return setError({
        title: "Invaild input",
        message: "Please enter a vaild name and age (non-empty value)",
      });
    }
    props.renderForNewUser({
      id: Math.random(),
      ...{ username: username, age: age },
    });
    /*  key에 Math.random같은 동적인 값을 사용하면 많은 컴포넌트 인스턴스와 DOM 노드를 불필요하게 재생성하여 성능이 나빠지거나 자식 컴포넌트의 state가 유실될 수 있다.
    위의 경우에는 임의로 key에 id를 넣기 위해 생성하였다.*/
    /* map의 idx를 key에 넣는 것 또한 지양해야한다.
    인덱스를 key로 사용 중 배열이 재배열되면 컴포넌트의 state와 관련된 문제가 발생할 수 있다. 
    컴포넌트 인스턴스는 key를 기반으로 갱신되고 재사용되는데 idx를 key로 사용하면, 항목의 순서가 바뀌었을 때 key 또한 바뀔 것이다.
    그 결과로, 컴포넌트의 state가 엉망이 되거나 의도하지 않은 방식으로 바뀔 수도 있다. 하지만 배열이 정적일 땐 가능하다.*/
    nameInputRef.current.value = "";
    ageInputRef.current.value = "";
  };

  const errorHandler = () => {
    setError(null);
  };
  return (
    <Wrapper>
      {error && <ErrorModal error={error} onConfirm={errorHandler} />}
      <Card className={classes.input}>
        <form onSubmit={AddUserHandler}>
          <label htmlFor="username">UserName</label>
          <input name="username" id="username" type="text" ref={nameInputRef} />
          <label htmlFor="age">Age</label>
          <input name="age" id="age" type="number" ref={ageInputRef} />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
};
