import { FaPen } from "react-icons/fa6";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaCircleCheck } from "react-icons/fa6";

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
      <div>
        <h3 className="text-lg font-semibold">{todo.text}</h3>
        <p className="text-sm text-gray-600">{todo.subtitle}</p>
      </div>
      <div className="flex gap-2">
        <button
          onClick={handleCompleteClick}
          className="px-2 py-1 bg-gray-100  w-8 h-8 rounded-full   text-xs sm:text-sm lg:text-base"
        >
          <FaCircleCheck />
        </button>
        <button
          onClick={handleEditClick}
          className="px-2 py-1 bg-gray-100  w-8 h-8 rounded-full   text-xs sm:text-sm lg:text-base"
        >
          <FaPen />
        </button>
        <button
          onClick={handleDeleteClick}
          className="px-2 py-1 bg-gray-100  w-8 h-8 rounded-full   text-xs sm:text-sm lg:text-base"
        >
          <RiDeleteBin6Line />
        </button>
      </div>
    </div>
  );
};

export default Todo;
