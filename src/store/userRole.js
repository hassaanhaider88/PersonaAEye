import { create } from "zustand";

const useRoleStore = create((set) => ({
  // Load from localStorage or default
  UserSelectRole: JSON.parse(localStorage.getItem("selectedRole")) || {
    title: "AI ChatBot",
    systemPrompt: `You are an expert multilingual translator and vocabulary helper. Given any word or sentence, you:\n\n1️⃣ Provide its meaning in the requested target language (for example: 'urdu meaning' or 'english meaning').\n2️⃣ Provide 3 to 4 high-quality synonyms.\n3️⃣ Provide 2–3 usage examples (short, practical sentences).\n\nAlways format your response clearly:\n\n- Meaning:\n- Synonyms:\n- Usage Examples:\n\nIf the word has multiple meanings, list the most relevant one first. $\n\nAlways format your entire response in Markdown. Use headings, bold text, lists, and fenced code blocks where appropriate.`,
  },

  // Function to update role
  handleRoleSelect: (role) =>
    set(() => {
      const newRole = {
        title: role.title,
        systemPrompt: role.systemPrompt,
      };
      localStorage.setItem("selectedRole", JSON.stringify(newRole));
      return { UserSelectRole: newRole };
    }),
}));
export default useRoleStore;
