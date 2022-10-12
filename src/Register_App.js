import React, { useState } from "react";
import { AddUser } from "./components/Register/User/AddUser";
import { UserList } from "./components/Register/User/UserList";

const App = () => {
  const [userList, setUserList] = useState([
    { id: Math.random(), username: "Tom", age: 31 },
    { id: Math.random(), username: "Mac", age: 1 },
  ]);

  const addUserListHandler = (newUser) => {
    setUserList((prevUserList) => {
      return [...prevUserList, newUser];
    });
  };
  return (
    <div>
      <AddUser users={userList} renderForNewUser={addUserListHandler} />
      <UserList users={userList} />
    </div>
  );
};

export default App;
