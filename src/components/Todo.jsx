const Todo = ({ todo, toggleComplete, deleteTodo, onEdit }) => {
  const handleCompleteClick = () => {
    toggleComplete(todo.id);
  };

  const handleDeleteClick = () => {
    deleteTodo(todo.id);
  };

  const handleEditClick = () => {
    onEdit(todo);
  };

  return (
    <div
      className={`flex items-center justify-between border-b border-gray-300 py-2 ${
        todo.completed ? "text-gray-400 line-through" : ""
      }`}
    >
      <span>{todo.text}</span>
      <div>
        <button
          onClick={handleCompleteClick}
          className="px-2 py-1 mr-2 bg-green-500 text-white rounded text-xs sm:text-sm lg:text-base"
        >
          Complete
        </button>
        <button
          onClick={handleEditClick}
          className="px-2 py-1 mr-2 bg-yellow-500 text-white rounded text-xs sm:text-sm lg:text-base"
        >
          Edit
        </button>
        <button
          onClick={handleDeleteClick}
          className="px-2 py-1 bg-red-500 text-white rounded text-xs sm:text-sm lg:text-base"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Todo;
