// src/pages/ChatListPage.tsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getConversations, Conversation } from '../api/FakeAPI'; // Importez le type Conversation depuis FakeAPI

const ChatListPage: React.FC = () => {
  const [conversations, setConversations] = useState<Conversation[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getConversations();
      setConversations(result);
    };

    fetchData();
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen">
      <nav className="bg-blue-500 p-4">
        <div className="container mx-auto">
          <div className="flex items-center justify-between">
            <div>
              <Link to="/" className="text-white text-2xl font-bold">My Chat App</Link>
            </div>
            <div>
              <Link to="/new-conversation" className="text-white hover:underline">New Conversation</Link>
            </div>
          </div>
        </div>
      </nav>
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-semibold mb-4">Conversations</h1>
        <ul>
          {conversations.map((conv) => (
            <li key={conv.id} className="mb-4">
              <Link to={`/chat/${conv.id}`} className="block bg-white p-4 rounded shadow-md hover:shadow-lg transition duration-300">
                <span className="text-lg font-semibold">{conv.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ChatListPage;
