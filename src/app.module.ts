import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { HelloController } from './hello-world';
import { NatsController } from './broadcast.controller';
import { NatsService } from './nats.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'MATH_SERVICE',
        transport: Transport.NATS,
        options: {
          servers: ['nats://localhost:4222'],
        },
      },
    ]),
  ],
  controllers: [AppController, HelloController, NatsController],
  providers: [AppService, NatsService],
})
export class AppModule {}
