import React from "react";

const LongDescriptionInput = ({
  clsname,
  longDescription,
  setLongDescription,
}) => {
  return (
    <label className={clsname} htmlFor="long-description">
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
