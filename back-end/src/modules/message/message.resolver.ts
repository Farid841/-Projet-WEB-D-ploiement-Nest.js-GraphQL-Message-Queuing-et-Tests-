import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { MessageService } from './message.service';
import { Message } from '../../models/message.model';
import { QueueService } from '../../queue/queue.service';
@Resolver(() => Message)
export class MessageResolver {
  constructor(
    private readonly messageService: MessageService,
    private readonly queueService: QueueService,
  ) {}

  @Query(() => Message, { name: 'message' })
  async getMessage(@Args('id') id: string): Promise<Message> {
    return this.messageService.findMessageById(id);
  }

  @Mutation(() => Boolean)
  async sendMessage(
    @Args('content') content: string,
    @Args('senderId') senderId: string,
    @Args('conversationId') conversationId: string,
  ): Promise<boolean> {
    const message = {
      content,
      sender: senderId,
      conversation: conversationId,
    } as unknown as Message;
    await this.queueService.addMessageToQueue(message);
    return true;
  }
}
