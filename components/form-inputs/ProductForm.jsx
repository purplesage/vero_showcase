import React from "react";
import styles from "../../styles/form-styles/ProductForm.module.css";
import Image from "next/image";

import { useInputs } from "../../lib/util";
import useProductInputStore from "../../store/inputStore";

//input components
import TitleInput from "./TitleInput";
import DescriptionInput from "./DescriptionInput";
import LongDescriptionInput from "./LongDescriptionInput";
import PriceInput from "./PriceInput";
import CategoryInput from "./CategoryInput";
import AvailabilityInput from "./AvailabilityInput";
import SizeInput from "./SizeInput";
import ColorInput from "./ColorInput";
import ImageInput from "./ImageInput";

const ProductForm = ({ productId, productAction, isEdit }) => {
  const {
    title,
    setTitle,
    description,
    setDescription,
    longDescription,
    setLongDescription,
    price,
    setPrice,
    category,
    setCategory,
    availability,
    setAvailability,
    imagePreviewURL,
    setImagePreviewURL,
    sizeList,
    addSize,
    deleteSize,
    colorList,
    addColor,
    deleteColor,
    setFileName,
  } = useInputs(useProductInputStore);

  const handleFormModeAction = (e) => {
    if (isEdit) {
      return productAction.mutate({
        id: productId,
        imageFile: e.target.image.files[0],
      });
    }

    return productAction.mutate(e.target.image.files[0]);
  };

  return (
    <form
      className={styles.productForm}
      onSubmit={(e) => {
        e.preventDefault();
        handleFormModeAction(e);
      }}
    >
      <TitleInput title={title} setTitle={setTitle} />
      <DescriptionInput
        description={description}
        setDescription={setDescription}
      />
      <LongDescriptionInput
        longDescription={longDescription}
        setLongDescription={setLongDescription}
      />
      <PriceInput price={price} setPrice={setPrice} />
      <CategoryInput category={category} setCategory={setCategory} />
      <AvailabilityInput
        availability={availability}
        setAvailability={setAvailability}
      />
      <SizeInput
        sizeList={sizeList}
        addSize={addSize}
        deleteSize={deleteSize}
      />
      <ColorInput
        colorList={colorList}
        addColor={addColor}
        deleteColor={deleteColor}
      />
      <ImageInput
        isEdit
        imagePreviewURL={imagePreviewURL}
        setImagePreviewURL={setImagePreviewURL}
        setFileName={setFileName}
      />
      <button type="submit">send</button>
    </form>
  );
};

export default ProductForm;
