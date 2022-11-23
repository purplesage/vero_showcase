import React from "react";
import styles from "../../styles/form-styles/descriptionInput.module.css";

const DescriptionInput = ({ isEdit, description, setDescription }) => {
  return (
    <label
      className={
        isEdit ? styles.editDescriptionInputLabel : styles.descriptionInputLabel
      }
      htmlFor="description"
    >
      <p>Desc. corta:</p>
      <input
        autoComplete="off"
        name="description"
        onChange={(e) => setDescription(e)}
        value={description}
        type="text"
      />
    </label>
  );
};

export default DescriptionInput;
