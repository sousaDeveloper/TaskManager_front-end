import axios from "axios";
import "./TaskItem.scss";
import PropTypes from "prop-types";

import { MdDelete } from "react-icons/md";

TaskItem.propTypes = {
  task: PropTypes.object,
  onTaskComplete: PropTypes.func,
  fetchTasks: PropTypes.func,
};

export default function TaskItem({ task, onTaskComplete, fetchTasks }) {
  const handleCheckboxChange = () => {
    onTaskComplete(task.id);
  };

  const handleDeleteClick = async () => {
    try {
      await axios.delete(`http://localhost:8000/tasks/${task._id}`);
      return fetchTasks();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex items-center gap-2">
      <div id="checklist">
        <input type="checkbox" id="01" checked={task.isCompleted} onChange={handleCheckboxChange} />
        <label>{task.description}</label>
      </div>
      <div>
        <MdDelete size={18} color="#f97474" onClick={handleDeleteClick} style={{ cursor: "pointer" }} />
      </div>
    </div>
  );
}
