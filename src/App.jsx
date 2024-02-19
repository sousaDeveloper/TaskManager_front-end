import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import TaskItem from "./components/TaskItem";

export default function App() {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    try {
      const { data } = await axios.get("http://localhost:8000/tasks");

      setTasks(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div>
      {tasks.map((task) => (
        <TaskItem key={task} task={task}/>
      ))}
    </div>
  );
}
