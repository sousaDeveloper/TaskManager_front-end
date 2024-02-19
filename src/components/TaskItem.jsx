import PropTypes from "prop-types";

TaskItem.propTypes = {
  task: PropTypes.string,
};

export default function TaskItem({ task }) {
  return (
    <>
      <h1>{task.description}</h1>
      <p>{task.isCompleted ? "Completa" : "Não completa"}</p>
    </>
  );
}
