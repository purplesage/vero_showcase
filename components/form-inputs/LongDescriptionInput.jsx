import React from "react";

const LongDescriptionInput = ({ longDescription, setLongDescription }) => {
  return (
    <label htmlFor="long-description">
      Descripción larga:
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
