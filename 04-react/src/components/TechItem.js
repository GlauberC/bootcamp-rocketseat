import React from "react";
import PropTypes from "prop-types";
export default function TechItem({ tech, onDelete }) {
  return (
    <li>
      {tech}
      <button type="button" onClick={onDelete}>
        x
      </button>
    </li>
  );
}

TechItem.defaultProps = {
  tech: "Oculto"
};
TechItem.propTypes = {
  tech: PropTypes.string,
  onDelete: PropTypes.func.isRequired
};
