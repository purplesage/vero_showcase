import React from "react";

const AvailabilityInput = ({ clsname, availability, setAvailability }) => {
  return (
    <label className={clsname} htmlFor="availability">
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
