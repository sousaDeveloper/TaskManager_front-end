import "./TaskItem.scss";
import PropTypes from "prop-types";

import { MdDelete } from "react-icons/md";

TaskItem.propTypes = {
  task: PropTypes.object.isRequired,
  onTaskComplete: PropTypes.func.isRequired,
};

export default function TaskItem({ task, onTaskComplete }) {
  const handleCheckboxChange = () => {
    onTaskComplete(task.id);
  };

  return (
    <div className="flex items-center gap-2">
      <div id="checklist">
        <input type="checkbox" id="01" checked={task.isCompleted} onChange={handleCheckboxChange} />
        <label>{task.description}</label>
      </div>
      <div>
        <MdDelete size={18} color="#f97474" />
      </div>
    </div>
  );
}
