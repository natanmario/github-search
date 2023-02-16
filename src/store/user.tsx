import { create } from "zustand";
import { UserProps } from "../interfaces/userProps";

interface StateProps {
  user: UserProps;
  addUser: (user: UserProps) => void;
}

export const useUserStore = create<StateProps>()((set) => ({
  user: {
    name: "",
    avatar: "",
    login: "",
    url: "",
  },
  addUser: (user: UserProps) => {
    set((state) => ({ user: { ...state.user, ...user } }));
  },
}));
