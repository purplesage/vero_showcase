import create from "zustand";

//utility functions
const createImagePreviewURL = (file) => {
  return URL.createObjectURL(file);
};

export const sizeValue = (edit) => {
  if (!edit) return document.getElementById("sizes-zustand").value;

  return document.getElementById("edit-sizes").value;
};

export const colorValue = (edit) => {
  if (!edit) return document.getElementById("colors").value;

  return document.getElementById("edit-colors").value;
};

const useProductInputStore = create((set, get) => ({
  //states
  title: "",
  description: "",
  price: "",
  category: "",
  availability: false,
  imagePreviewURL: "",
  sizeList: [],
  colorList: [],
  imageName: "",

  //actions
  setTitle: (e) => set({ title: e.target.value }),

  setDescription: (e) => set({ description: e.target.value }),

  setPrice: (e) => set({ price: e.target.value }),

  setCategory: (e) => set({ category: e.target.value }),

  setAvailability: () =>
    set((state) => ({ availability: !state.availability })),

  setImagePreviewURL: (e) =>
    set({ imagePreviewURL: createImagePreviewURL(e.target.files[0]) }),

  setUploadedImageName: (e) =>
    set({ uploadedImageName: e.target.files[0].name }),

  setColorList: (colors) => set({ colorList: [...colors] }),

  setSizeList: (sizes) => set({ sizeList: [...sizes] }),

  addSize: (newSize) =>
    set((state) => ({ sizeList: [...state.sizeList, newSize] })),

  deleteSize: (value) =>
    set((state) => ({
      sizeList: state.sizeList.filter((size) => size !== value),
    })),

  addColor: (newColor) =>
    set((state) => ({ colorList: [...state.colorList, newColor] })),

  deleteColor: (value) =>
    set((state) => ({
      colorList: state.colorList.filter((color) => color !== value),
    })),

  productFactory: () => ({
    title: get().title,
    description: get().description,
    price: get().price,
    category: get().category,
    availability: get().availability,
    sizeList: get().sizeList,
  }),
}));

export default useProductInputStore;
