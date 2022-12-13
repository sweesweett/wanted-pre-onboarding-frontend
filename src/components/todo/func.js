import { postTodo, putTodo, getTodo, deleteTodo } from "../../apis/authApi";

export const writeTodo = async (todo, previous, setData) => {
  if (todo.value.length === 0) {
    return;
  }
  let { data, status } = await postTodo({ todo: todo.value });
  if (status < 300) {
    setData([data, ...previous]);
    todo.value = "";
    todo.focus();
  } else {
    alert("리스트 추가에 실패했습니다");
  }
};
export const checkTodo = async (el, previous, setData, setIsChecked) => {
  let { data, status } = await putTodo(el);
  if (status < 300) {
    let newData = previous.map((el) => {
      if (el.id === data.id) {
        return data;
      } else {
        return el;
      }
    });
    setData(newData);
    setIsChecked(data.isCompleted);
  } else {
    alert("투두 수정에 실패했습니다");
  }
};
export const changeTodo = async (el, previous, setData, setIsOpen) => {
  let { data, status } = await putTodo(el);
  if (status < 300) {
    let newData = previous.map((el) => {
      if (el.id === data.id) {
        return data;
      } else {
        return el;
      }
    });
    setData(newData);
    setIsOpen(false);
  } else {
    alert("투두 수정에 실패했습니다");
  }
};
export const getTodoList = async (setData) => {
  let { data, status } = await getTodo();
  if (status < 300) {
    setData(data);
  } else {
    alert("데이터 불러오기에 실패했습니다.");
  }
};
export const deleteTodoItem = async (setData, previous, id) => {
  let { status } = await deleteTodo(id);
  if (status < 300) {
    setData(previous.filter((el) => el.id !== id));
  } else {
    alert("투두 삭제에 실패했습니다.");
  }
};
