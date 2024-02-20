import axios from "axios";
import { useEffect, useState } from "react";
import TaskItem from "./TaskItem/TaskItem";

export default function Tasks() {
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
    <div className="flex flex-col p-14 h-svh">
      <h1 className="text-xl font-bold">Minhas Tarefas</h1>
      <div className="flex flex-col flex-1 overflow-y-hidden">
        <h3 className="my-3 font-bold">Últimas Tarefas</h3>
        <div className="tasks-lists">
          {tasks
            .filter((task) => !task.isCompleted)
            .map((lastTask, index) => (
              <div key={index}>
                <TaskItem task={lastTask}/>
              </div>
            ))}
        </div>
      </div>
      <div className="flex-1 pt-7">
        <h2 className="font-bold">Tarefas Concluídas</h2>
        <div className="tasks-lists">
          {tasks
            .filter((task) => task.isCompleted)
            .map((lastTask, index) => (
              <div key={index}>
                <TaskItem task={lastTask} />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
