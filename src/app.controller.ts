import { Controller } from '@nestjs/common';
import { AppService } from './app.service';
import {
  Ctx,
  MessagePattern,
  NatsContext,
  Payload,
  Transport,
} from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern('sum')
  accumulate(data: number[]): number {
    console.log('MathController accumulate');
    return (data || []).reduce((a, b) => a + b);
  }
}
