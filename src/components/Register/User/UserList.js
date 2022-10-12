import classes from "./UserList.module.css";
import { Card } from "../UI/Card";

export const UserList = (props) => {
  return (
    <Card className={classes.users}>
      <ul>
        {props.users.map((el) => {
          return (
            <li key={el.id}>
              {el.username} ({el.age} years old)
            </li>
          );
        })}
      </ul>
    </Card>
  );
};
