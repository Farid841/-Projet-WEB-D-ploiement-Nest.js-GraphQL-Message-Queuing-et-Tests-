type Message = {
    id: number;
    content: string;
  };
  
  type Conversation = {
    id: number;
    title: string;
    messages: Message[];
  };
  
  let conversations: Conversation[] = [
    { id: 1, title: 'Conversation 1', messages: [{ id: 1, content: 'Message 1' }] },
    { id: 2, title: 'Conversation 2', messages: [{ id: 1, content: 'Message 2' }] },
  ];
  
  export const getConversations = (): Promise<Conversation[]> => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(conversations), 500);
    });
  };
  
  export const getConversationMessages = (id: number): Promise<Message[]> => {
    return new Promise((resolve) => {
      const conversation = conversations.find((c) => c.id === id);
      setTimeout(() => resolve(conversation ? conversation.messages : []), 500);
    });
  };
  
  export const createMessage = (conversationId: number, content: string): Promise<Message> => {
    return new Promise((resolve) => {
      const conversation = conversations.find((c) => c.id === conversationId);
      if (conversation) {
        const newMessage = { id: Date.now(), content };
        conversation.messages.push(newMessage);
        setTimeout(() => resolve(newMessage), 500);
      }
    });
  };
  
  export const createConversation = (title: string): Promise<Conversation> => {
    return new Promise((resolve) => {
      const newConversation = { id: Date.now(), title, messages: [] };
      conversations.push(newConversation);
      setTimeout(() => resolve(newConversation), 500);
    });
  };
  