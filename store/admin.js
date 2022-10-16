import create from "zustand";

const useAdminStore = create((set) => ({
  adminUser: "",
  setAdminUser: (admin) => set({ adminUser: admin }),
}));

export default useAdminStore;
