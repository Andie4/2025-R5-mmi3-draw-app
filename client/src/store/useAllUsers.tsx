import { create } from 'zustand'

type UserList = {
  username: string;
}[];

type ListState = {
  userList: UserList;
};

type ListAction = {
  setUserList: (userList: UserList) => void;
};

export const useUserListStore = create<ListState & ListAction>((set) => ({
  userList: [],
  setUserList: (userList: UserList) => set({userList}), 
}));

