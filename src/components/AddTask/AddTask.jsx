import { useState } from "react";
import CustomInput from "./CustomInput/CustomInput";
import CustomButton from "./CustomButton/CustomButton";
import axios from "axios";

export default function AddTask() {
  const [task, setTask] = useState("");

  const onChange = (e) => {
    setTask(e.target.value);
  };

  const handleTaskAddition = async () => {
    try {
      await axios.post("http://localhost:8000/tasks", {
        description: task,
        isCompleted: false,
      });
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
