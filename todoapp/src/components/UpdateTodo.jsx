import React, { useState } from "react";
import { useTodo } from "../contexts/TodoContex";

function UpdateTodo({ todo }) {
  const [newTodo, setNewTodo] = useState(todo.work);
  const { todos, updateTodo } = useTodo();

  const update = (id) => {
    update(todo, id);
  };

  return (
    <input type="text" value={newTodo} onChange={(id) => update(todo.id)} />
  );
}

export default UpdateTodo;
