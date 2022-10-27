import React from "react";

const DescriptionInput = ({ description, setDescription }) => {
  return (
    <label htmlFor="description">
      description:
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
