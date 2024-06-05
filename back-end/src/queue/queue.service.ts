import { Injectable } from '@nestjs/common';
import { InjectQueue } from '@nestjs/bull';
import { Queue } from 'bullmq';
import { Message } from 'src/models/message.model';

@Injectable()
export class QueueService {
  constructor(
    @InjectQueue('message-queue') private readonly messageQueue: Queue,
    @InjectQueue('healthQueue') private readonly healthQueue: Queue,
  ) {}

  async addMessageToQueue(message: Message): Promise<void> {
    await this.messageQueue.add('sendMessage', message);
  }

  async addHealthCheckJob(data: any): Promise<void> {
    await this.healthQueue.add('healthCheckJob', data);
  }
}
