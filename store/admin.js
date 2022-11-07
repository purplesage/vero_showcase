import create from "zustand";

const useAdminStore = create((set) => ({
  adminUser: null,
  setAdminUser: (admin) => set({ adminUser: admin }),
}));

export default useAdminStore;
