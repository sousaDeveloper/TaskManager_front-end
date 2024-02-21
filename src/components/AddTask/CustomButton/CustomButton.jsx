import "./CustomButton.scss";
import PropTypes from "prop-types";

CustomButton.propTypes = {
  onClick: PropTypes.func,
};

export default function CustomButton({ onClick }) {
  return (
    <button onClick={onClick} className="customButton mt-1 text-4xl flex items-center">
      +
    </button>
  );
}
