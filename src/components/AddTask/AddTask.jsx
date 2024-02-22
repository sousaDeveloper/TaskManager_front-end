import PropTypes from "prop-types";
import { useState } from "react";
import CustomInput from "./CustomInput/CustomInput";
import CustomButton from "./CustomButton/CustomButton";
import axios from "axios";

AddTask.propTypes = {
  fetchTasks: PropTypes.func,
};

export default function AddTask({ fetchTasks }) {
  const [task, setTask] = useState("");

  const onChange = (e) => {
    setTask(e.target.value);
  };

  const handleTaskAddition = async () => {
    try {
      if (task.length === 0) {
        return null;
      }

      await axios.post("http://localhost:8000/tasks", {
        description: task,
        isCompleted: false,
      });

      await fetchTasks();
      setTask("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="addTaskContainer flex gap-2">
      <CustomInput value={task} onChange={onChange} />
      <CustomButton onClick={handleTaskAddition} />
    </div>
  );
}
