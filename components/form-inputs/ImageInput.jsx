import React from "react";
import Image from "next/image";

const ImageInput = ({
  imagePreviewURL,
  setImagePreviewURL,
  setFileName,
  isEdit,
}) => {
  return (
    <label htmlFor="imagen">
      imagen:
      <input
        required={!isEdit}
        type="file"
        name="imagen"
        id="image"
        onChange={(e) => {
          setImagePreviewURL(e);
          setFileName(e);
        }}
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
