// stores/useAuthStore.js
import { create } from 'zustand';

// Helper to remove password before storing to localStorage
const sanitizeUserForStorage = (user) => {
  const { password, ...safeUser } = user;
  return safeUser;
};

const useAuthStore = create((set) => ({
  // Initial state
  user: null,
  isLoggedIn: false,

  loadUserFromLocalStorage: () => {

    const user = JSON.parse(localStorage.getItem('authUser'));
    console.log(user,"sign call")
    if (user) {
      set({ user, isLoggedIn: true });
    }
  },


  // Actions
  handleSignIn: (userData) => {
    const user = {
      name: userData.Name,
      email: userData.Email,
      numberOfPrompts: 0,
      joinedAt: new Date().toISOString(),
    };

    localStorage.setItem('authUser', JSON.stringify(user));

    set({
      user,
      isLoggedIn: true,
    });
  },

  handleSignOut: () => {
    localStorage.removeItem('authUser');

    set({
      user: null,
      isLoggedIn: false,
    });
  },

  updateUserData: (updates) =>
    set((state) => {
      const updatedUser = {
        ...state.user,
        ...updates,
      };

      localStorage.setItem('authUser', JSON.stringify(updatedUser));

      return { user: updatedUser };
    }),
}));

export default useAuthStore