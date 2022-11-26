import create from "zustand";
import { persist } from "zustand/middleware";

const useAdminStore = create(
  persist(
    (set) => ({
      adminUser: null,
      setAdminUser: (admin) => set({ adminUser: admin }),
    }),
    {
      name: "admin-user",
    }
  )
);

export default useAdminStore;
