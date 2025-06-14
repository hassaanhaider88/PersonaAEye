// store/chatStore.js
import { create } from "zustand";

const useChatStore = create((set) => ({
  chatData: [],
  addChatMessage: (newMessage) =>
    set((state) => ({
      chatData: [...state.chatData, newMessage],
    })),
}));

export default useChatStore 