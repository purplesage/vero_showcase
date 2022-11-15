import React from "react";
import styles from "../../styles/form-styles/availabilityInput.module.css";

const AvailabilityInput = ({ isEdit, availability, setAvailability }) => {
  return (
    <label
      className={
        isEdit
          ? styles.editAvailabilityInputLabel
          : styles.availabilityInputLabel
      }
      htmlFor="availability"
    >
      <p>Disponibilidad:</p>
      <input
        checked={availability}
        onChange={() => setAvailability()}
        type="checkbox"
        name="availability"
        id="availability"
      />
    </label>
  );
};

export default AvailabilityInput;
