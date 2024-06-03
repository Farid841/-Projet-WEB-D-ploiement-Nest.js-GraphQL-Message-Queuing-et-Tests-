import { Resolver, Query, Args } from '@nestjs/graphql';
import { Conversation } from '../models/conversation.model';
import { User } from '../models/user.model';

@Resolver(() => Conversation)
export class ConversationResolver {
    @Query(() => [Conversation])
    getUserConversations(@Args('userId') userId: string): Conversation[] {
        // Retourner des conversations fictives pour le moment
        return [];
    }
}