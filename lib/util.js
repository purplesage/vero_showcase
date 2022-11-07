import { doc, getDoc } from "firebase/firestore";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { dataBase, storage } from "../firebaseConfig";

export function converToPath(title) {
  return title.toLowerCase().replace(/\s/g, "-");
}

export const uploadImage = async (imageFile) => {
  try {
    const fileRef = ref(storage, `images/${imageFile.name}`);
    await uploadBytesResumable(fileRef, imageFile);
  } catch (err) {
    console.warn(err.message);
  }
};

export const fetchImage = async (fileName) => {
  const fileRef = ref(storage, `images/${fileName}`);
  const url = await getDownloadURL(fileRef);
  return url;
};

export const fetchShoeList = async () => {
  try {
    const ref = doc(dataBase, `db/products`);
    const document = await getDoc(ref);
    const shoeList = document.data().shoeList;

    return shoeList;
  } catch (err) {
    throw new Error(err.message);
  }
};

export const useInputs = (useProductInputStore) => {
  const title = useProductInputStore((state) => state.title);
  const setTitle = useProductInputStore((state) => state.setTitle);

  const description = useProductInputStore((state) => state.description);
  const setDescription = useProductInputStore((state) => state.setDescription);

  const longDescription = useProductInputStore(
    (state) => state.longDescription
  );
  const setLongDescription = useProductInputStore(
    (state) => state.setLongDescription
  );

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

  const setImageURL = useProductInputStore((state) => state.setImageURL);

  const sizeList = useProductInputStore((state) => state.sizeList);
  const addSize = useProductInputStore((state) => state.addSize);
  const deleteSize = useProductInputStore((state) => state.deleteSize);

  const colorList = useProductInputStore((state) => state.colorList);
  const addColor = useProductInputStore((state) => state.addColor);
  const deleteColor = useProductInputStore((state) => state.deleteColor);

  const setFileName = useProductInputStore((state) => state.setFileName);

  const newProduct = useProductInputStore((state) => state.productFactory);

  return {
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
    newProduct,
    sizeList,
    addSize,
    deleteSize,
    colorList,
    addColor,
    deleteColor,
    setImageURL,
    setFileName,
  };
};
