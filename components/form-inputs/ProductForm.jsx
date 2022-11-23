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

const ProductForm = ({ productId, imageURL, productAction, isEdit }) => {
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

  if (isEdit)
    return (
      <form
        className={styles.editProductForm}
        onSubmit={(e) => {
          e.preventDefault();
          productAction.mutate({
            id: productId,
            imageFile: e.target.image.files[0],
          });
        }}
      >
        <Image
          className={styles.image}
          src={imageURL}
          alt="product image"
          width="380"
          height="380"
        />
        <div className={styles.bodyContainer}>
          <div className={styles.body}>
            <TitleInput isEdit title={title} setTitle={setTitle} />
            <DescriptionInput
              isEdit
              description={description}
              setDescription={setDescription}
            />
            <LongDescriptionInput
              isEdit
              Description={longDescription}
              setLongDescription={setLongDescription}
            />
            <PriceInput isEdit price={price} setPrice={setPrice} />
            <CategoryInput
              isEdit
              category={category}
              setCategory={setCategory}
            />
            <AvailabilityInput
              isEdit
              availability={availability}
              setAvailability={setAvailability}
            />
            <div className={styles.listContainer}>
              <SizeInput
                isEdit
                sizeList={sizeList}
                addSize={addSize}
                deleteSize={deleteSize}
              />
              <ColorInput
                isEdit
                clsname={
                  isEdit ? styles.editColorInputLabel : styles.colorInputLabel
                }
                colorList={colorList}
                addColor={addColor}
                deleteColor={deleteColor}
              />
            </div>
            <ImageInput
              isEdit
              clsname={styles.editImageInputLabel}
              imagePreviewURL={imagePreviewURL}
              setImagePreviewURL={setImagePreviewURL}
              setFileName={setFileName}
            />
            <button className={styles.editSubmitButton} type="submit">
              Crear Producto
            </button>
          </div>
        </div>
      </form>
    );

  return (
    <form
      className={styles.addProductForm}
      onSubmit={(e) => {
        e.preventDefault();
        productAction.mutate(e.target.image.files[0]);
      }}
    >
      <TitleInput isEdit={isEdit} title={title} setTitle={setTitle} />
      <DescriptionInput
        isEdit={isEdit}
        description={description}
        setDescription={setDescription}
      />
      <LongDescriptionInput
        isEdit={isEdit}
        Description={longDescription}
        setLongDescription={setLongDescription}
      />
      <PriceInput isEdit={isEdit} price={price} setPrice={setPrice} />
      <CategoryInput
        isEdit={isEdit}
        category={category}
        setCategory={setCategory}
      />
      <AvailabilityInput
        isEdit={isEdit}
        availability={availability}
        setAvailability={setAvailability}
      />
      <div className={styles.listContainer}>
        <SizeInput
          isEdit={isEdit}
          sizeList={sizeList}
          addSize={addSize}
          deleteSize={deleteSize}
        />
        <ColorInput
          isEdit={isEdit}
          clsname={styles.colorInputLabel}
          colorList={colorList}
          addColor={addColor}
          deleteColor={deleteColor}
        />
      </div>
      <ImageInput
        isEdit
        clsname={styles.imageInputLabel}
        imagePreviewURL={imagePreviewURL}
        setImagePreviewURL={setImagePreviewURL}
        setFileName={setFileName}
      />
      <button className={styles.submitButton} type="submit">
        Crear Producto
      </button>
    </form>
  );
};

export default ProductForm;
