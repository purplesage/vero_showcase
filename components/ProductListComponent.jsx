import React from "react";
import ProductCard from "./ProductCard";
import styles from "../styles/productListComponent.module.css";
import { useWindowSize } from "../lib/util";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

const ProductListComponent = ({ productList }) => {
  const windowSize = useWindowSize();

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
        slidesPerView={windowSize.width > 640 ? 3 : 1}
        slidesPerGroup={windowSize.width > 640 ? 3 : 1}
        centeredSlides
        centeredSlidesBounds
        spaceBetween={126}
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
