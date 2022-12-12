import { writeTodo } from "./func";
const TodoWrite = ({ data, setData }) => {
  const onSubmitTodo = (e) => {
    e.preventDefault();
    writeTodo(e.currentTarget.todo.value, data, setData);
  };

  return (
    <div className='writeTodo'>
      <form onSubmit={onSubmitTodo}>
        <input type="text" name="todo" />
        <button>추가</button>
      </form>
    </div>
  );
};
export default TodoWrite;
