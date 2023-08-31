import { useState } from "react";

interface TodoFormProps {
  handleAddTodo: (
    event: React.FormEvent<HTMLFormElement>,
    todo: string,
    cb: () => void
  ) => void;
}

const TodoForm = ({ handleAddTodo }: TodoFormProps) => {
  const [todo, setTodo] = useState<string>("");

  const reset = () => {
    setTodo("");
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(event.target.value);
  };

  return (
    <form onSubmit={(event) => handleAddTodo(event, todo, reset)}>
      <input type='text' onChange={handleInputChange} value={todo} />

      <input type='submit' value='Agregar' />
    </form>
  );
};

export default TodoForm;
