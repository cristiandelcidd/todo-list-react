import { Todo } from "../types";

interface TodosListProps {
  todos: Todo[];
  handleDeleteTodo: (todoId: number) => void;
}

const TodosList = ({ todos, handleDeleteTodo }: TodosListProps) => {
  return (
    <>
      {todos.length > 0 ? (
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>
              {todo.todo}{" "}
              <button onClick={() => handleDeleteTodo(todo.id)}>
                Eliminar
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <h2>No hay tareas</h2>
      )}
    </>
  );
};

export default TodosList;
