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
      className={isEdit ? styles.editProductForm : styles.addProductForm}
      onSubmit={(e) => {
        e.preventDefault();
        handleFormModeAction(e);
      }}
    >
      <TitleInput
        clsname={isEdit ? styles.editTitleInputLabel : styles.titleInputLabel}
        title={title}
        setTitle={setTitle}
      />
      <DescriptionInput
        clsname={
          isEdit
            ? styles.editDescriptionInputLabel
            : styles.descriptionInputLabel
        }
        description={description}
        setDescription={setDescription}
      />
      <LongDescriptionInput
        clsname={
          isEdit
            ? styles.editLongDescriptionInputLabel
            : styles.longDescriptionInputLabel
        }
        longDescription={longDescription}
        setLongDescription={setLongDescription}
      />
      <PriceInput
        clsname={isEdit ? styles.editPriceInputLabel : styles.priceInputLabel}
        price={price}
        setPrice={setPrice}
      />
      <CategoryInput
        clsname={
          isEdit ? styles.editCategoryInputLabel : styles.categoryInputLabel
        }
        category={category}
        setCategory={setCategory}
      />
      <AvailabilityInput
        clsname={
          isEdit
            ? styles.editAvailabilityInputLabel
            : styles.availabilityInputLabel
        }
        availability={availability}
        setAvailability={setAvailability}
      />
      <div className={styles.listContainer}>
        <SizeInput
          clsname={isEdit ? styles.editSizeInputLabel : styles.sizeInputLabel}
          sizeList={sizeList}
          addSize={addSize}
          deleteSize={deleteSize}
        />
        <ColorInput
          clsname={isEdit ? styles.editColorInputLabel : styles.colorInputLabel}
          colorList={colorList}
          addColor={addColor}
          deleteColor={deleteColor}
        />
      </div>
      <ImageInput
        isEdit
        clsname={isEdit ? styles.editImageInputLabel : styles.imageInputLabel}
        imagePreviewURL={imagePreviewURL}
        setImagePreviewURL={setImagePreviewURL}
        setFileName={setFileName}
      />
      <button type="submit">send</button>
    </form>
  );
};

export default ProductForm;
