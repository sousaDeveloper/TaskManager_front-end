import axios from "axios";
import "./TaskItem.scss";
import PropTypes from "prop-types";
import { useState } from "react";
import { MdDelete } from "react-icons/md";

TaskItem.propTypes = {
  task: PropTypes.object,
  fetchTasks: PropTypes.func,
};

export default function TaskItem({ task, fetchTasks }) {
  const [isDeleted, setIsDeleted] = useState(false);

  const handleDeleteClick = async () => {
    try {
      await axios.delete(`http://localhost:8000/tasks/${task._id}`);
      setIsDeleted(true); // Define o estado como deletado após a exclusão
    } catch (error) {
      console.log(error);
    }
  };

  if (isDeleted) {
    return null; // Não renderiza nada se a tarefa foi deletada
  }

  const handleTaskCompletion = async (e) => {
    try {
      await axios.patch(`http://localhost:8000/tasks/${task._id}`, {
        isCompleted: e.target.checked,
      });

      await fetchTasks();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex items-center gap-2">
      <div id="checklist">
        <input type="checkbox" defaultChecked={task.isCompleted} onChange={(e) => handleTaskCompletion(e)} />
        <label>{task.description}</label>
      </div>
      <div>
        <MdDelete size={18} color="#f97474" onClick={handleDeleteClick} style={{ cursor: "pointer" }} />
      </div>
    </div>
  );
}
