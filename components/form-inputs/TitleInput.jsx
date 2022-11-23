import React from "react";
import styles from "../../styles/form-styles/titleInput.module.css";

const TitleInput = ({ isEdit, title, setTitle }) => {
  return (
    <label
      className={isEdit ? styles.editTitleInputLabel : styles.titleInputLabel}
      htmlFor="title"
    >
      <p>Título:</p>
      <input
        name="title"
        onChange={(e) => setTitle(e)}
        value={title}
        type="text"
      />
    </label>
  );
};

export default TitleInput;
