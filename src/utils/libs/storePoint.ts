import create from "zustand";

interface StorePointState {
  userPoint: string;
  setUserPoint: (point: string) => void;
}

const useStorePoint = create<StorePointState>((set) => ({
  userPoint: "",
  setUserPoint: (point) => set({ userPoint: point }),
}));

export default useStorePoint;
