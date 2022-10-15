import create from "zustand";

//utility functions
const createImagePreviewURL = (file) => {
  return URL.createObjectURL(file);
};

const useInputStore = create((set) => ({
  //states
  title: "",
  description: "",
  price: "",
  category: "",
  availability: false,
  imagePreviewURL: "",

  //actions
  setTitle: (e) => set({ title: e.target.value }),

  setDescription: (e) => set({ description: e.target.value }),

  setPrice: (e) => set({ price: e.target.value }),

  setCategory: (e) => set({ category: e.target.value }),

  setAvailability: (e) => set({ availability: e.target.value }),

  setImagePreviewURL: (file) =>
    set({ imagePreviewURL: createImagePreviewURL(file) }),
}));

export default useInputStore;
