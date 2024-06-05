import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { MessageService } from './message.service';
import { Message } from '../../models/message.model';
import { User } from '../../models/user.model';
import { Conversation } from '../../models/conversation.model';

@Resolver(() => Message)
export class MessageResolver {
  constructor(private readonly messageService: MessageService) {}

  @Query(() => Message, { name: 'message' })
  async getMessage(@Args('id') id: string): Promise<Message> {
    return this.messageService.findMessageById(id);
  }

  @Mutation(() => Message)
  async createMessage(
    @Args('content') content: string,
    @Args('senderId') senderId: string,
    @Args('conversationId') conversationId: string,
  ): Promise<Message> {
    // Logique pour récupérer l'utilisateur et la conversation à partir des IDs et créer un message
    const sender = { id: senderId } as User;
    const conversation = { id: conversationId } as Conversation;
    return this.messageService.createMessage(content, sender, conversation);
  }
}
