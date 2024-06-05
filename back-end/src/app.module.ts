import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { HealthModule } from './health/health.module';
import { AppController } from './app.controller';
import { ConversationResolver } from './resolvers/conversation.resolver';
import { MessageResolver } from './resolvers/message.resolver';
import { QueueModule } from './queue/queue.module';
import { SimpleResolver } from './resolvers/simple.resolver';
import { ConversationModule } from './modules/conversation/conversation.module';
import { MessageModule } from './modules/message/message.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
    HealthModule,
    QueueModule,
    ConversationModule,
    MessageModule,
  ],
  controllers: [AppController],
  providers: [ConversationResolver, MessageResolver, SimpleResolver],
})
export class AppModule {}
