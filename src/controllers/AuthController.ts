import { Alert } from 'react-native';
import { create } from 'zustand';

interface AuthState {
  users: any[];
  currentUser: string;
  login: (u: string, p: string) => boolean;
  signup: (u: string, p: string) => boolean;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set, get) => ({
  users: [{ username: "Nazmul", password: "1" }], // Default User
  currentUser: "Guest",

  login: (u, p) => {
    if (!u || !p) {
      Alert.alert("Error", "Please fill all fields");
      return false;
    }
    const user = get().users.find(user => user.username === u && user.password === p);
    if (user) {
      set({ currentUser: u });
      return true;
    }
    Alert.alert("Login Failed", "Invalid credentials");
    return false;
  },

  signup: (u, p) => {
    if (!u || !p) {
      Alert.alert("Error", "Fields cannot be empty");
      return false;
    }
    const exists = get().users.some(user => user.username === u);
    if (exists) {
      Alert.alert("Error", "Username taken");
      return false;
    }
    set({ users: [...get().users, { username: u, password: p }] });
    Alert.alert("Success", "Account created!");
    return true;
  },

  logout: () => set({ currentUser: "Guest" }),
}));