/**
 * Footer component that includes a chat feature.
 * Uses Next.js dynamic imports to load required components.
 */
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../context/auth/SessionContext';

// Dynamically import the required components
const ChatEngine = dynamic(() =>
  import('react-chat-engine').then((module) => module.ChatEngine)
);
const MessageFormSocial = dynamic(() =>
  import('react-chat-engine').then((module) => module.MessageFormSocial)
);

/**
 * Home component represents the footer with chat functionality.
 * @returns JSX element containing the footer.
 */
export default function Home() {
  const { user } = useContext(AuthContext);
  const [showChat, setShowChat] = useState<boolean>(false);
  const router = useRouter();
  const username: string = user.user.name;
  const secret: string = user.user.password;

  /**
   * Sets showChat to true when the component is mounted in the browser.
   */
  useEffect(() => {
    if (typeof document !== 'undefined') {
      setShowChat(true);
    }
  }, []);

  /**
   * Redirects to homepage if username or secret is empty.
   */
  useEffect(() => {
    if (username === '' || secret === '') {
      router.push('/');
    }
  }, [username, secret]);

  if (!showChat) return <div />;

  return (
    <div className="w-screen h-screen p-5">
      <div className="shadow">
        {/* Render the ChatEngine component */}
        {/* <ChatEngine
          height="100vh"
          projectID="cbe5d718-5e31-4203-b586-401263016359"
          userName={username}
          userSecret={secret}
          renderNewMessageForm={() => <MessageFormSocial />}
        /> */}
      </div>
    </div>
  );
}
