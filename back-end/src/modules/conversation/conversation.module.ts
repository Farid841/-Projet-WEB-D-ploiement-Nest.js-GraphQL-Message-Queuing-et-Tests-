import { Module } from '@nestjs/common';
import { ConversationService } from './conversation.service';
import { ConversationResolver } from './conversation.resolver';
import { ConversationRepository } from './conversation.repository';
import { UserModule } from '../user/user.module';

@Module({
  imports: [UserModule],
  providers: [ConversationService, ConversationResolver, ConversationRepository],
  exports: [ConversationService],
})
export class ConversationModule {}
