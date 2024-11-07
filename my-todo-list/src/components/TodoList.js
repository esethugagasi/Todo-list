import React from "react";
import TodoCard from "./TodoCard";

export default function TodoList() {
  let todos = ["GYM", "Eat Healthy", "Drink water"];
  return (
    <ul className="Main">
      {todos.map((todo, todoIndex) => {
        return (
          <TodoCard key={todoIndex}>
            <p>{todo}</p>
          </TodoCard>
        );
      })}
    </ul>
  );
}
