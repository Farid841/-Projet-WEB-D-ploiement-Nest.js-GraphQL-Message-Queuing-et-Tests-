// src/pages/NewConversationPage.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createConversation } from '../api/FakeAPI';

const NewConversationPage: React.FC = () => {
  const [newConversation, setNewConversation] = useState('');
  const navigate = useNavigate();

  const createNewConversation = async () => {
    const conversation = await createConversation(newConversation);
    navigate(`/chat/${conversation.id}`);
  };

  return (
    <div>
      <h1>New Conversation</h1>
      <input
        type="text"
        value={newConversation}
        onChange={(e) => setNewConversation(e.target.value)}
      />
      <button onClick={createNewConversation}>Create</button>
    </div>
  );
};

export default NewConversationPage;
