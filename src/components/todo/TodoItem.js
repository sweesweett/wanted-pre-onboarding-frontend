import { changeTodo, deleteTodoItem } from "./func";
import React from "react";
const TodoItem = ({ el, setData, data }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const checkCompleted = (e) => {
    let newData = { ...el, isCompleted: e.target.checked };
    changeTodo(newData, data, setData);
  };
  const editTodo = (e) => {
    e.preventDefault();
    let value = e.currentTarget.todo.value;
    if (value.length === 0 || value === el.todo) {
      return;
    }
    let newData = { ...el, todo: value };
    changeTodo(newData, data, setData, setIsOpen);
  };
  const deleteItem = (e) => {
    deleteTodoItem(setData, data, el.id);
  };
  return (
    <li>
      <input
        type="checkbox"
        defaultChecked={el.isCompleted}
        onClick={checkCompleted}
      />

      {isOpen ? (
        <form onSubmit={editTodo}>
          <input type="text" name="todo" defaultValue={el.todo} />
          <button>수정완료</button>
        </form>
      ) : (
        <>
          <div>{el.todo}</div>
          <button onClick={() => setIsOpen(!isOpen)}>수정</button>
          <button onClick={deleteItem}>삭제</button>
        </>
      )}
    </li>
  );
};
export default TodoItem;
