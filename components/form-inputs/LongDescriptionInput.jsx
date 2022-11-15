import React from "react";
import styles from "../../styles/form-styles/longDescriptionInput.module.css";

const LongDescriptionInput = ({
  isEdit,
  longDescription,
  setLongDescription,
}) => {
  return (
    <label
      className={
        isEdit
          ? styles.editLongDescriptionInputLabel
          : styles.longDescriptionInputLabel
      }
      htmlFor="long-description"
    >
      <p>Descripción larga:</p>
      <textarea
        required
        name="long-description"
        onChange={(e) => setLongDescription(e)}
        value={longDescription}
      />
    </label>
  );
};

export default LongDescriptionInput;
