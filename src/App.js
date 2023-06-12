import { useState } from "react";
import "./App.css";
import Tasks from "./components/Tasks";
import Input from "./components/Input";
import Footer from "./components/Footer";

function App() {
  const [todos, setTodos] = useState([
    {
      id: Math.random(),
      text: "aaaa",
      deadline: 24,
      isComplited: false,
    },
    {
      id: Math.random(),
      text: "bbbbb",
      deadline: 24,
      isComplited: false,
    },
    {
      id: Math.random(),
      text: "ccccc",
      deadline: 24,
      isComplited: false,
    },
  ]);

  return (
    <div className="App">
      <h1>TODO</h1>
      <Input
        onAdd={(text, deadline) => {
          if (text !== "") {
            setTodos([
              ...todos,
              {
                id: Math.random(),
                text: text,
                deadline: deadline,
                isComplited: false,
              },
            ]);
          }
        }}
      />
      <Tasks
        todos={todos}
        onDelete={(todo) => {
          setTodos(todos.filter((t) => t.id !== todo.id));
        }}
        onChange={(newTodo) => {
          setTodos(
            todos.map((todo) => {
              if (newTodo.id === todo.id) {
                return newTodo;
              }
              return todo;
            })
          );
        }}
      />
      <Footer todos={todos} />
    </div>
  );
}

export default App;
