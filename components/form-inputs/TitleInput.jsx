import React from "react";

const TitleInput = ({ clsname, title, setTitle }) => {
  return (
    <label className={clsname} htmlFor="title">
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
