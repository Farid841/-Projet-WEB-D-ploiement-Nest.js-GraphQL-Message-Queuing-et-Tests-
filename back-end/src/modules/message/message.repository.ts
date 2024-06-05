import { Injectable } from '@nestjs/common';
import { Message } from '../../models/message.model';
import { User } from '../../models/user.model';
import { Conversation } from '../../models/conversation.model';

@Injectable()
export class MessageRepository {
  private messages: Message[] = [];

  async createMessage(content: string, sender: User, conversation: Conversation): Promise<Message> {
    const message = new Message();
    message.id = Date.now().toString(); // Génération d'un ID unique
    message.content = content;
    message.sender = sender;
    message.conversation = conversation;
    message.createdAt = new Date();
    this.messages.push(message);
    return message;
  }

  async findMessageById(id: string): Promise<Message> {
    return this.messages.find(message => message.id === id);
  }
}
