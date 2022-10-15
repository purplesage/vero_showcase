import create from "zustand";

//utility functions
const createImagePreviewURL = (file) => {
  return URL.createObjectURL(file);
};

const useProductInputStore = create((set) => ({
  //states
  title: "",
  description: "",
  price: "",
  category: "",
  availability: false,
  imagePreviewURL: "",
  uploadedImageName: "",
  sizeList: [],
  colorList: [],

  //actions
  setTitle: (e) => set({ title: e.target.value }),

  setDescription: (e) => set({ description: e.target.value }),

  setPrice: (e) => set({ price: e.target.value }),

  setCategory: (e) => set({ category: e.target.value }),

  setAvailability: (e) => set({ availability: e.target.value }),

  setImagePreviewURL: (e) =>
    set({ imagePreviewURL: createImagePreviewURL(e.target.files[0]) }),

  setUploadedImageName: (e) =>
    set({ uploadedImageName: e.target.files[0].name }),

  setColorList: (colors) => set({ colorList: [...colors] }),

  setSizeList: (sizes) => set({ sizeList: [...sizes] }),

  addSize: (newSize) =>
    set((state) => ({ sizeList: [...state.sizeList, newSize] })),
}));

export default useProductInputStore;
