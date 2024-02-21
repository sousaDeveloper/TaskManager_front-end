import axios from "axios";
import { useEffect, useState } from "react";
import TaskItem from "./TaskItem/TaskItem";
import AddTask from "./AddTask/AddTask";
import "./Tasks.scss";

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
    <>
      <header className="p-5 bg-gray-950">
        <h1 className="text-3xl font-bold">Dev List</h1>
      </header>
      <div className="flex flex-col p-2">
        <div className="flex flex-wrap gap-52 p-5">
          <div className="flex flex-col">
            <h1 className="font-bold text-xl pb-3">Adicionar Tarefa</h1>

            <div className="flex mb-5">
              <AddTask fetchTasks={fetchTasks} />
            </div>

            <div>
              <h3 className="font-bold text-xl mb-3">Tarefas não Concluídas</h3>
              <div className="last-tasks">
                {tasks
                  .filter((task) => !task.isCompleted)
                  .map((lastTask, index) => (
                    <div key={index}>
                      <TaskItem task={lastTask} />
                    </div>
                  ))}
              </div>
            </div>
          </div>
          <div>
            <h2 className="font-bold text-xl">Tarefas Concluídas</h2>
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
      </div>
    </>
  );
}
