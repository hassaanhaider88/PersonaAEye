import { useRef, useState } from "react";
import { MdOutlineSettingsSuggest } from "react-icons/md";
import { toast } from "react-toastify";
import AnimatedInputFooter from "../Components/InputCom";
import UserProfileCard from "../Components/UserProfileCard";
import ChatPanel from "../Components/ChatPanel";
import useRoleStore from "../store/userRole";
import useChatStore from "../store/userChat";
import localResponses from "../Data/LocalResponses";
const GAPIKey = import.meta.env.VITE_GEMINI_KEY;

const Home = () => {
  const { chatData, addChatMessage } = useChatStore();
  const { UserSelectRole } = useRoleStore();

  const [isSettingShown, setIsSettingShown] = useState(false);
  const chatPanelRef = useRef(null);


  const scrollToBottom = () => {
    if (chatPanelRef.current) {
      chatPanelRef.current.scrollTop = chatPanelRef.current.scrollHeight + 400;
    }
  };

  const handleSendMessage = (msg) => {
    if (!UserSelectRole?.systemPrompt) {
      toast.error("No system prompt selected. Please choose a role first.");
      return;
    }
    const trimmedMsg = msg.trim();
    if (!trimmedMsg) {
      toast.error("Please type a message.");
      return;
    }

    const lowerMsg = trimmedMsg.toLowerCase();
    const nextUserId = chatData.length + 1;
    const nextAiId = nextUserId + 1;
    const timestamp = new Date().toISOString();

    // Add user message
    addChatMessage({
      id: nextUserId,
      sender: "user",
      message: trimmedMsg,
      time: timestamp,
    });

    scrollToBottom();

    // Local AI response
    if (localResponses[lowerMsg]) {
      setTimeout(() => {
        addChatMessage({
          id: nextAiId,
          sender: "ai",
          message: localResponses[lowerMsg],
          time: new Date().toISOString(),
        });
        scrollToBottom();
      }, 600);
      return;
    }

    scrollToBottom();

    // Gemini API Call
    fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GAPIKey}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          system_instruction: {
            "parts": [
              {
                text: UserSelectRole.systemPrompt,
              },
            ],
          },
          contents: [
            {
              "parts": [
                {
                  text: `${trimmedMsg}`,
                },
              ],
            },
          ],
        }),
      }
    )
      // parts: [{ text: trimmedMsg }],
      .then((res) => res.json())
      .then((data) => {
        const responseText = data?.candidates?.[0]?.content?.parts?.[0]?.text;
        if (responseText) {
          addChatMessage({
            id: nextAiId,
            sender: "ai",
            message: responseText,
            time: new Date().toISOString(),
          });
        } else {
          // Handle case where no response is returned
          addChatMessage({
            id: nextAiId,
            sender: "ai",
            message:
              "Sorry, I couldn't understand or process that. Please try again.",
            time: new Date().toISOString(),
          });
        }
        scrollToBottom();
      })
      .catch(async (error) => {
        const errorText = await error.text?.(); // if error is Response object
        console.error("Gemini API Error:", error, errorText);
        addChatMessage({
          id: nextAiId,
          sender: "ai",
          message:
            "Something went wrong while fetching the response. Please try again later.",
          time: new Date().toISOString(),
        });
        scrollToBottom();
      });
  };

  return (
    <div className="h-screen overflow-y-auto no-scrollbar flex bg-transparent text-white transition-colors duration-200">
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-8 p-4 border-b border-gray-700">
          <span>
            <img
              loading="lazy"
              height="30"
              width="60"
              src="../../PersonaLogo.png"
              alt="Persona Logo"
            />
          </span>

          <MdOutlineSettingsSuggest
            onClick={() => setIsSettingShown(!isSettingShown)}
            size={30}
            className="hover:scale-95 cursor-pointer"
          />

          {isSettingShown && (
            <div className="fixed top-16 z-50 right-3">
              <UserProfileCard />
            </div>
          )}
        </div>

        {/* Chat Panel */}
        <ChatPanel chatRef={chatPanelRef} />

        {/* Input Footer */}
        <AnimatedInputFooter handleSendMessageP={handleSendMessage} />
      </div>
    </div>
  );
};

export default Home;
