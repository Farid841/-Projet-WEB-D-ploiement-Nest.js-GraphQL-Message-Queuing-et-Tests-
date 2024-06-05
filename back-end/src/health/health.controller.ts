import { Controller, Get } from '@nestjs/common';
import { QueueService } from '../queue/queue.service';

@Controller('health')
export class HealthController {
  constructor(private readonly queueService: QueueService) {}

  @Get()
  async getHealth(): Promise<string> {
    await this.queueService.addHealthCheckJob({ timestamp: new Date().toISOString() });
    return 'OK';
  }
}
