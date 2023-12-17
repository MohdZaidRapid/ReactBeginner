import { useState } from "react";
import "./App.css";
import { TodoProvider } from "./contexts/TodoContex";
import AddTodo from "./components/AddTodo";
import UpdateTodo from "./components/UpdateTodo";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos((prev) => [{ id: Date.now(), ...todo }, { ...prev }]);
  };

  const updateTodo = (todo, id) => {
    setTodos((prev) =>
      prev.map((prevTodo) => {
        todo.id === id ? todo : prevTodo;
      })
    );
  };
  return (
    <TodoProvider value={{ addTodo, updateTodo }}>
      <AddTodo />
      {todos.map((todo) => (
        <div key={todo.id} className="w-full">
          <UpdateTodo todo={todo} />
        </div>
      ))}
    </TodoProvider>
  );
}

export default App;
