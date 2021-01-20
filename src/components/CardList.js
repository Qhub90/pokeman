import { React } from "react";
import Card from "./Card";

const CardList = ({ monster }) => {
  return (
    <div>
      {monster.map((user, i) => {
        if(i < 10) {
          return (
            <Card
              key={i}
              name={user.name}
              type={user.username}
              summary={user.email}
            />
          );
        }
        return
      })}
    </div>
  );
};

export default CardList;
