import { Module } from '@nestjs/common';
import { MessageService } from './message.service';
import { MessageResolver } from './message.resolver';
import { MessageRepository } from './message.repository';
import { ConversationModule } from '../conversation/conversation.module';
import { UserModule } from '../user/user.module';

@Module({
  imports: [UserModule, ConversationModule],
  providers: [MessageService, MessageResolver, MessageRepository],
  exports: [MessageService],
})
export class MessageModule {}
