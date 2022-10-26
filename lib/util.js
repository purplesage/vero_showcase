export function converToPath(title) {
  return title.toLowerCase().replace(/\s/g, "-");
}

export const useInputs = (useProductInputStore) => {
  const title = useProductInputStore((state) => state.title);
  const setTitle = useProductInputStore((state) => state.setTitle);

  const description = useProductInputStore((state) => state.description);
  const setDescription = useProductInputStore((state) => state.setDescription);

  const price = useProductInputStore((state) => state.price);
  const setPrice = useProductInputStore((state) => state.setPrice);

  const category = useProductInputStore((state) => state.category);
  const setCategory = useProductInputStore((state) => state.setCategory);

  const availability = useProductInputStore((state) => state.availability);
  const setAvailability = useProductInputStore(
    (state) => state.setAvailability
  );

  const imagePreviewURL = useProductInputStore(
    (state) => state.imagePreviewURL
  );
  const setImagePreviewURL = useProductInputStore(
    (state) => state.setImagePreviewURL
  );

  const sizeList = useProductInputStore((state) => state.sizeList);
  const addSize = useProductInputStore((state) => state.addSize);
  const deleteSize = useProductInputStore((state) => state.deleteSize);

  const newProduct = useProductInputStore((state) => state.productFactory);

  return {
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
    newProduct,
    sizeList,
    addSize,
    deleteSize,
  };
};
