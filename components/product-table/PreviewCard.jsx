import React from "react";
import Image from "next/image";
import { TailSpin } from "react-loader-spinner";
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

  if (productDeletionMutation.isLoading)
    return (
      <TailSpin
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="tail-spin-loading"
        radius="1"
        visible={true}
      />
    );

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
