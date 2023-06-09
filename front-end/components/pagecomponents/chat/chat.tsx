import React, { useState } from 'react'
import { auth } from "../../../firebase"
import { signOut, User } from "firebase/auth";
import { ChatEngine, getOrCreateChat } from 'react-chat-engine';
import { PrettyChatWindow } from "react-chat-engine-pretty";
interface ChatProps {
  user: User;
}

const ChatPage = () => {
	const [username, setUsername] = useState('')

	function createDirectChat(creds) {
		getOrCreateChat(
			creds,
			{ is_direct_chat: true, usernames: [username] },
			() => setUsername('')
		)
	}

	function renderChatForm(creds) {
		return (
			<div>
				<input 
					placeholder='Username' 
					value={username} 
					onChange={(e) => setUsername(e.target.value)} 
				/>
				<button onClick={() => createDirectChat(creds)}>
					Create
				</button>
			</div>
		)
	}

	return (
		<ChatEngine
			height='100vh'
			userName='JohnDoe'
			userSecret='1234567'
			projectID={"0e9a66df-61c6-47d2-b4f0-0515eef04fe0"}
			renderNewChatForm={(creds) => renderChatForm(creds)}
		/>
	)
}

export default ChatPage;