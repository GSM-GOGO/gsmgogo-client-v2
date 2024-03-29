import create from 'zustand';

interface StorePointState {
  userPoint: string;
  setUserPoint: (point: string) => void;
  leader: boolean;
  setIsLeader: (leader: boolean) => void;
}

const useStorePoint = create<StorePointState>((set) => ({
  userPoint: '',
  setUserPoint: (point) => set({ userPoint: point }),
  leader: false,
  setIsLeader: (leader) => set({ leader }),
}));

export default useStorePoint;
