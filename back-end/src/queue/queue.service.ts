import { Injectable } from '@nestjs/common';
import { InjectQueue } from '@nestjs/bull';
import { Queue } from 'bullmq';

@Injectable()
export class QueueService {
  constructor(@InjectQueue('healthQueue') private readonly healthQueue: Queue) {}

  async addHealthCheckJob(data: any) {
    await this.healthQueue.add('healthCheckJob', data);
  }
}
