import React from "react";

const TitleInput = ({ title, setTitle }) => {
  return (
    <label htmlFor="title">
      title:
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
