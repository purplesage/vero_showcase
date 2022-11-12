import React from "react";

const DescriptionInput = ({ clsname, description, setDescription }) => {
  return (
    <label className={clsname} htmlFor="description">
      <p>Descripción:</p>
      <input
        name="description"
        onChange={(e) => setDescription(e)}
        value={description}
        type="text"
      />
    </label>
  );
};

export default DescriptionInput;
