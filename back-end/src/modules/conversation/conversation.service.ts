import { Injectable } from '@nestjs/common';
import { Conversation } from '../../models/conversation.model';
import { ConversationRepository } from './conversation.repository';
import { User } from '../../models/user.model';

@Injectable()
export class ConversationService {
  constructor(private readonly conversationRepository: ConversationRepository) {}

  async createConversation(participants: User[]): Promise<Conversation> {
    return this.conversationRepository.createConversation(participants);
  }

  async findConversationById(id: string): Promise<Conversation> {
    return this.conversationRepository.findConversationById(id);
  }
}
