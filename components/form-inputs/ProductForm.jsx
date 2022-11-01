import React from "react";
import styles from "../../styles/form-styles/ProductForm.module.css";
import Image from "next/image";

import { useInputs } from "../../lib/util";
import useProductInputStore from "../../store/inputStore";

//input components
import TitleInput from "./TitleInput";
import DescriptionInput from "./DescriptionInput";
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
  } = useInputs(useProductInputStore);

  const handleFormModeAction = (e) => {
    if (isEdit) return productAction.mutate(productId);
    return productAction.mutate(e.target.imagen.files[0]);
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
        imagePreviewURL={imagePreviewURL}
        setImagePreviewURL={setImagePreviewURL}
      />
      <button type="submit">send</button>
    </form>
  );
};

export default ProductForm;
