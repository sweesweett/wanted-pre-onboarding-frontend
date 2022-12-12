import TodoItem from "../components/todo/TodoItem";
import TodoWrite from "../components/todo/TodoWrite";
import React from "react";
import { Navigate } from "react-router-dom";
import { getTodoList } from "../components/todo/func";
const Todo = () => {
  let [data, setData] = React.useState([]);
  React.useEffect(() => {
    if (localStorage.getItem("access_token") !== null) {
      getTodoList(setData);
    }
  }, []);
  if (localStorage.getItem("access_token") === null) {
    return <Navigate to="/" />;
  }

  return (
    <div>
      <h2>투두리스트</h2>
      <TodoWrite data={data} setData={setData} />
      {data.length !== 0 &&
        data.map((el) => (
          <TodoItem key={el.id} el={el} setData={setData} data={data} />
        ))}
    </div>
  );
};
export default Todo;
