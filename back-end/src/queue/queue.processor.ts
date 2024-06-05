import { Processor, Process } from '@nestjs/bull';
import { Job } from 'bullmq';

@Processor('healthQueue')
export class QueueProcessor {
  @Process('healthCheckJob')
  async handleHealthCheckJob(job: Job) {
    console.log('Processing job:', job.id, 'with data:', job.data);
    // ici  des logs pour afficher le contenu de job.data
  }
}
