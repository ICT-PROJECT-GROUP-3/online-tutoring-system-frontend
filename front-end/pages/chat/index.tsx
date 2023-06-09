import { PrettyChatWindow } from "react-chat-engine-pretty";
import { ChatEngine, ChatHeader } from "react-chat-engine"
import AuthPage from "../../components/pagecomponents/chat/chat_auth";
import ChatPage from "../../components/pagecomponents/chat/chat";
import Loading from "../../components/pagecomponents/chat/loading";
import { auth } from "../../firebase";
import { User } from "firebase/auth";
import { useState } from "react";

interface ChatProps {

}

export default function Chat(props: ChatProps) {
  const [user, setUser] = useState<User | null>();
  auth.onAuthStateChanged((user) => setUser(user));

      <h1> CHAT </h1>
      if (user === undefined) {
          return <Loading />;
      } else if (user === null) {
          return <AuthPage />;
      } else {
          return <ChatPage />;
      }
  
}