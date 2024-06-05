// src/api/FakeAPI.ts

export type Conversation = {
    id: string;
    name: string;
    messages: Message[];
  };
  
 export type Message = {
    id: string;
    text: string;
    createdAt: Date;
  };
  
  let conversations: Conversation[] = [
    {
      id: '1',
      name: 'Conversation 1',
      messages: [
        { id: '1', text: 'Hello', createdAt: new Date() },
        { id: '2', text: 'Hi', createdAt: new Date() },
      ],
    },
    {
      id: '2',
      name: 'Conversation 2',
      messages: [
        { id: '1', text: 'Hey', createdAt: new Date() },
        { id: '2', text: 'What\'s up?', createdAt: new Date() },
      ],
    },
  ];
  
  export const getConversations = async (): Promise<Conversation[]> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(conversations);
      }, 500); // Simulate network latency
    });
  };
  
  export const getConversationById = async (id: string): Promise<Conversation | undefined> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const conversation = conversations.find((conv) => conv.id === id);
        resolve(conversation);
      }, 500); // Simulate network latency
    });
  };
  
  export const createConversation = async (name: string): Promise<Conversation> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const newConversation: Conversation = {
          id: (conversations.length + 1).toString(),
          name,
          messages: [],
        };
        conversations.push(newConversation);
        resolve(newConversation);
      }, 500); // Simulate network latency
    });
  };
  
  export const addMessageToConversation = async (conversationId: string, text: string): Promise<Message> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const newMessage: Message = {
          id: (conversations.find((conv) => conv.id === conversationId)?.messages.length! + 1).toString(),
          text,
          createdAt: new Date(),
        };
        const conversation = conversations.find((conv) => conv.id === conversationId);
        conversation?.messages.push(newMessage);
        resolve(newMessage);
      }, 500); // Simulate network latency
    });
  };
  