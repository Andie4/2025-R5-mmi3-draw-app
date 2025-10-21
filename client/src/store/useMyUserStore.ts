import { create } from 'zustand'

type UserState = {
  myUser: { username: string; avatar: string } | null;
}

type UserAction = {
  setMyUser: (user: { username: string; avatar: string } | null) => void,
  useUserList: (users: { username: string }[]) => void,
  resetMyUser: () => void
};

export const useMyUserStore = create<UserState & UserAction>((set) => ({
  myUser: null,
  setMyUser: (user) => set({ myUser: user }),
  useUserList: (users) => set({}), // Placeholder for future implementation
  resetMyUser: () => set({ myUser: null }),
}));