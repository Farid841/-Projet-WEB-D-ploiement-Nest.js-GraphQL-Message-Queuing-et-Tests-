import { Injectable } from '@nestjs/common';
import { Message } from '../../models/message.model';
import { MessageRepository } from './message.repository';
import { User } from '../../models/user.model';
import { Conversation } from '../../models/conversation.model';

@Injectable()
export class MessageService {
  constructor(private readonly messageRepository: MessageRepository) {}

  async createMessage(content: string, sender: User, conversation: Conversation): Promise<Message> {
    return this.messageRepository.createMessage(content, sender, conversation);
  }

  async findMessageById(id: string): Promise<Message> {
    return this.messageRepository.findMessageById(id);
  }

}
