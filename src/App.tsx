import TodoForm from "./components/TodoForm";
import TodosList from "./components/TodosList";
import useForm from "./hooks/useForm";

const App = () => {
  const { todos, handleAddTodo, handleDeleteTodo } = useForm();

  return (
    <>
      <TodoForm handleAddTodo={handleAddTodo} />

      <TodosList todos={todos} handleDeleteTodo={handleDeleteTodo} />
    </>
  );
};

export default App;
