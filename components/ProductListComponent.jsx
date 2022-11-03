import React from "react";
import ProductCard from "./ProductCard";
import styles from "../styles/productListComponent.module.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

const ProductListComponent = ({ productList }) => {
  if (!productList) {
    return <div>Loading...</div>;
  }

  return (
    <div id="catalogo" className={styles.productList}>
      <Swiper
        className={styles.swiper}
        navigation
        pagination
        modules={[Navigation]}
        slidesPerView={3}
      >
        {productList?.length > 0 &&
          productList?.map((productObject) => {
            return (
              <SwiperSlide key={productObject.id}>
                <ProductCard
                  key={productObject.id}
                  title={productObject.title}
                  imageURL={productObject.imageURL}
                  description={productObject.description}
                  price={productObject.price}
                  sizes={productObject.sizeList}
                  colors={productObject.colorList}
                  availability={productObject.availability}
                />
              </SwiperSlide>
            );
          })}
      </Swiper>
    </div>
  );
};

export default ProductListComponent;
