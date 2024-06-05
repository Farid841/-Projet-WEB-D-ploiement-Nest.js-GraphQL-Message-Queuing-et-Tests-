import { Module } from '@nestjs/common';
import { BullModule } from '@nestjs/bull';
import { QueueService } from './queue.service';
import { QueueProcessor } from './queue.processor'; // Assuming you have a processor
import { MessageModule } from '../modules/message/message.module';

@Module({
  imports: [
    BullModule.registerQueue(
      {
        name: 'message-queue',
      },
      {
        name: 'healthQueue',
      },
    ),
    MessageModule, // Import the MessageModule here
  ],
  providers: [QueueService, QueueProcessor],
  exports: [QueueService],
})
export class QueueModule {}
