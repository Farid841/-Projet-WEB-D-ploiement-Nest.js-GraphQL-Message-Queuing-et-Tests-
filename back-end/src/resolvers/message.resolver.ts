import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { Message } from '../models/message.model';

@Resolver(() => Message)
export class MessageResolver {
    @Query(() => [Message])
    getConversationMessages(@Args('conversationId') conversationId: string): Message[] {
        // Retourner des messages fictifs pour le moment
        return [];
    }

    @Mutation(() => Message)
    sendMessage(@Args('content') content: string, @Args('senderId') senderId: string, @Args('conversationId') conversationId: string): Message {
        // Créer et retourner un message fictif pour le moment
        return { id: '1', content, sender: { id: senderId, username: 'John' }, conversation: { id: conversationId, participants: [] } };
    }
}
