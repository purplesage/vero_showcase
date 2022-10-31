import React from "react";

const PreviewCard = ({
  productObject,
  handleCloseModal,
  productDeletionMutation,
  handleEditMode,
}) => {
  const { title, description, price, category, sizeList, colorList, id } =
    productObject;
  return (
    <>
      <button onClick={handleCloseModal}>close modal</button>
      <p>{title}</p>
      <p>{description}</p>
      <p>{price}</p>
      <p>{category}</p>
      <p>{availability ? "yes" : "nope"}</p>
      <div>
        {sizeList?.map((size) => (
          <p>{size}</p>
        ))}
      </div>
      <div>
        {colorList?.map((color) => (
          <p>{color}</p>
        ))}
      </div>
      <button onClick={handleEditMode}>Editar</button>
      <button onClick={() => productDeletionMutation.mutate(id)}>
        Borrar producto
      </button>
    </>
  );
};

export default PreviewCard;
