import React from "react";

const AvailabilityInput = ({ availability, setAvailability }) => {
  return (
    <label htmlFor="availability">
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
