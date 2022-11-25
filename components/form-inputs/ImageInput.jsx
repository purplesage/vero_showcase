import React from "react";
import Image from "next/image";
import styles from "../../styles/form-styles/imageInput.module.css";

const ImageInput = ({
  imagePreviewURL,
  setImagePreviewURL,
  setFileName,
  isEdit,
}) => {
  return (
    <label
      className={isEdit ? styles.editImageInputLabel : styles.imageInputLabel}
      htmlFor="imagen"
    >
      <p>Imagen:</p>
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
          width="200"
          height="200"
        />
      )}
    </label>
  );
};

export default ImageInput;
