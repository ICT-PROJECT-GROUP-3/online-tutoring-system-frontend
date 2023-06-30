// import React from 'react'
// import Chat from '../../components/pagecomponents/chat/Chat'

// const index = () => {
//   return (
//     <div><Chat/></div>
//   )
// }

// export default index

import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/auth/SessionContext';

const ChatEngine = dynamic(() =>
  import('react-chat-engine').then((module) => module.ChatEngine)
);
const MessageFormSocial = dynamic(() =>
  import('react-chat-engine').then((module) => module.MessageFormSocial)
);
const getOrCreateChat = dynamic(() =>
  import('react-chat-engine').then((module) => module.getOrCreateChat)
);

export default function Home() {
  const { user } = useContext(AuthContext);
  const [showChat, setShowChat] = useState(false);
  const router = useRouter();
  console.log(router.query.nameCode + ' ' + router.query.nameKey);
  const username = router.query.nameCode;
  const secret = router.query.nameKey;
  const [username1, setUsername1] = useState();

  useEffect(() => {
    if (typeof document !== 'undefined') {
      setShowChat(true);
    }
  }, []);

  useEffect(() => {
    if (username === '' || secret === '') {
      router.push('/');
    }
  }, [username, secret]);

  if (!showChat) return <div />;

  function createDirectChat(creds) {
    getOrCreateChat(
      creds,
      { is_direct_chat: true, usernames: [username1] },
      () => setUsername1('')
    );
  }

  function renderChatForm(creds) {
    return (
      <div>
        <input
          placeholder="Username"
          value={username1}
          onChange={(e) => setUsername1(e.target.value)}
        />
        <button onClick={() => createDirectChat(creds)}>Create</button>
      </div>
    );
  }

  return (
    <div className="w-screen h-screen p-5">
      <div className="shadow">
        <ChatEngine
          height="calc(90vh)"
          projectID="cbe5d718-5e31-4203-b586-401263016359"
          userName={username}
          userSecret={secret}
          renderNewMessageForm={() => <MessageFormSocial />}
          renderNewChatForm={(creds) => renderChatForm(creds)}
        />
      </div>
    </div>
  );
}
