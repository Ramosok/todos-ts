import React, { FC, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { ITodo } from "../../types";
import { debounce } from "../../utils";

export const TodoList: FC = () => {
  const initialValue: ITodo = {
    title: "",
    body: "",
    id: "",
    date: "",
  };

  const [todo, setTodo] = useState<ITodo>(initialValue);
  const [todos, setTodos] = useState<ITodo[]>([]);

  const handleTodo = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputName: string = event.target.name;
    const dateNow: string = new Date().toLocaleDateString();
    if (inputName) {
      setTodo({
        ...todo,
        [inputName]: event.target.value,
        id: uuidv4(),
        date: dateNow,
      });
    }
  };

  console.log(todo);

  const addTodo = (event: React.MouseEvent<HTMLButtonElement>) => {
    setTodos([...todos, todo]);
  };

  return (
    <div>
      <p>todos</p>
      <input onChange={debounce(handleTodo, 300)} name="title" type="text" />
      <input onChange={debounce(handleTodo, 300)} name="body" type="text" />
      <button onClick={addTodo}>add</button>
      {todos.map(({ title, body, id, date }) => (
        <div id={id} key={id}>
          <h2>{title}</h2>
          <p>{body}</p>
          <p>{date}</p>
        </div>
      ))}
    </div>
  );
};
