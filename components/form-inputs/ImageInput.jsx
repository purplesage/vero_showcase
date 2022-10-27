import React from "react";

const ImageInput = ({ imagePreviewURL, setImagePreviewURL }) => {
  return (
    <label htmlFor="imagen">
      imagen:
      <input
        required
        type="file"
        name="imagen"
        id="imagen"
        onChange={(e) => setImagePreviewURL(e)}
      />
      {imagePreviewURL && (
        <Image
          src={imagePreviewURL}
          alt="product image"
          layout="fixed"
          width="100"
          height="100"
        />
      )}
    </label>
  );
};

export default ImageInput;
