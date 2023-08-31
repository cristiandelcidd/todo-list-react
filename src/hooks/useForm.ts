import { useState } from "react";

import { Todo } from "../types";

const useForm = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAddTodo = (
    event: React.FormEvent<HTMLFormElement>,
    todo: string,
    cb: () => void
  ) => {
    event.preventDefault();

    const newTodo: Todo = { id: Math.random(), todo: todo.trim() };

    if (!newTodo.todo.trim()) return alert("Ingrese una tarea");

    setTodos((prevState) => [...prevState, newTodo]);

    cb();
  };

  const handleDeleteTodo = (todoId: number) => {
    const filteredTodos: Todo[] = todos.filter((todo) => todo.id !== todoId);

    setTodos(filteredTodos);
  };

  return {
    todos,
    handleAddTodo,
    handleDeleteTodo,
  };
};

export default useForm;
