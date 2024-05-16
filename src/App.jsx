import { useEffect, useState } from "react";
import Todo from "./components/Todo";

const App = () => {
  const initialTodos = JSON.parse(localStorage.getItem("todos")) || [];

  const [todos, setTodos] = useState(initialTodos);
  const [filter, setFilter] = useState("all");
  const [newTodoText, setNewTodoText] = useState("");
  const [editTodo, setEditTodo] = useState(null);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleFilterChange = (filterType) => {
    setFilter(filterType);
  };

  const handleNewTodoChange = (e) => {
    setNewTodoText(e.target.value);
  };

  const handleNewTodoSubmit = (e) => {
    e.preventDefault();
    if (newTodoText.trim() !== "") {
      if (editTodo) {
        setTodos(
          todos.map((todo) =>
            todo.id === editTodo.id ? { ...todo, text: newTodoText } : todo
          )
        );
        setEditTodo(null);
      } else {
        setTodos([
          ...todos,
          { id: Date.now(), text: newTodoText, completed: false },
        ]);
      }
      setNewTodoText("");
    }
  };

  const handleEditTodo = (todo) => {
    setEditTodo(todo);
    setNewTodoText(todo.text);
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === "completed") {
      return todo.completed;
    } else if (filter === "incomplete") {
      return !todo.completed;
    } else {
      return true;
    }
  });

  return (
    <div className="max-w-md mx-auto mt-8 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold mb-4">Todo App</h1>
      <form onSubmit={handleNewTodoSubmit} className="mb-4 flex">
        <input
          type="text"
          placeholder="Enter new todo"
          value={newTodoText}
          onChange={handleNewTodoChange}
          className="flex-grow px-3 py-2 border border-gray-300 rounded mr-2"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Add Todo
        </button>
      </form>
      <div className="mb-4">
        <button
          onClick={() => handleFilterChange("all")}
          className={`px-2 py-1 ${
            filter === "all"
              ? "bg-blue-500 text-white rounded"
              : "bg-gray-200 text-gray-700 rounded"
          } mr-2`}
        >
          Show All
        </button>
        <button
          onClick={() => handleFilterChange("incomplete")}
          className={`px-2 py-1 ${
            filter === "incomplete"
              ? "bg-blue-500 text-white rounded"
              : "bg-gray-200 text-gray-700 rounded"
          } mr-2`}
        >
          Show Incomplete
        </button>
        <button
          onClick={() => handleFilterChange("completed")}
          className={`px-2 py-1 ${
            filter === "completed"
              ? "bg-blue-500 text-white rounded"
              : "bg-gray-200 text-gray-700 rounded"
          }`}
        >
          Show Completed
        </button>
      </div>
      {filteredTodos.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          toggleComplete={toggleComplete}
          deleteTodo={deleteTodo}
          onEdit={handleEditTodo}
        />
      ))}
    </div>
  );
};

export default App;
