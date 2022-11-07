import React from "react";
import Image from "next/image";

const PreviewCard = ({
  productObject,
  handleCloseModal,
  productDeletionMutation,
  handleShowEditMode,
}) => {
  const {
    title,
    description,
    price,
    category,
    sizeList,
    colorList,
    availability,
    id,
  } = productObject;
  return (
    <>
      <button onClick={handleCloseModal}>close modal</button>
      <Image
        src={productObject.imageURL}
        alt="product image"
        width="380"
        height="375"
      />
      <p>{title}</p>
      <p>{description}</p>
      <p>{price}</p>
      <p>{category}</p>
      <p>{availability ? "yes" : "nope"}</p>
      <div>
        {sizeList?.map((size, index) => (
          <p key={index}>{size}</p>
        ))}
      </div>
      <div>
        {colorList?.map((color, index) => (
          <p key={index}>{color}</p>
        ))}
      </div>
      <button onClick={handleShowEditMode}>Editar</button>
      <button onClick={() => productDeletionMutation.mutate(id)}>
        Borrar producto
      </button>
    </>
  );
};

export default PreviewCard;
