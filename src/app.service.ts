import { Inject, Injectable } from '@nestjs/common';
import { CONTEXT } from '@nestjs/microservices';

@Injectable()
export class AppService {
  constructor(@Inject(CONTEXT) public ctx) {}
}
