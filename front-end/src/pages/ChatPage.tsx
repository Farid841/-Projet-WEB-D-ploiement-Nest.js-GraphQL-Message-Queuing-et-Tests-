// src/pages/ChatPage.tsx
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getConversationById, addMessageToConversation, Message } from '../api/FakeAPI';

const ChatPage: React.FC = () => {
  const { id } = useParams<{ id: string }>()!;
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      if (!id) return; // Add null check for id parameter
      const conversation = await getConversationById(id);
      if (conversation) {
        setMessages(conversation.messages);
      }
    };

    fetchData();
  }, [id]);

  const sendMessage = async () => {
    if (newMessage.trim() === '') return;
    const message = await addMessageToConversation(id!, newMessage);
    setMessages((prevMessages) => [...prevMessages, message]);
    setNewMessage('');
  };

  return (
    <div>
      <h1>Chat</h1>
      <ul>
        {messages.map((msg: any) => (
          <li key={msg.id}>{msg.text}</li>
        ))}
      </ul>
      <input
        type="text"
        value={newMessage}
        onChange={(e) => setNewMessage(e.target.value)}
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
};

export default ChatPage;
