import "./CustomInput.scss";
import PropTypes from "prop-types";

CustomInput.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default function CustomInput({ value, onChange }) {
  return (
    <div className="form mb-3">
      <input
        className="input"
        placeholder="Adicionar tarefa"
        required=""
        type="text"
        value={value}
        onChange={(e) => onChange(e)}
      />
      <span className="input-border"></span>
    </div>
  );
}
