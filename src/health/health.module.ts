import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TerminusModule, MongooseHealthIndicator } from '@nestjs/terminus';
import { HealthCheckController } from './health.controller';

@Module({
  imports: [
    MongooseModule,
    MongooseHealthIndicator,
    TerminusModule,
    MongooseModule.forRoot('mongodb+srv://dbAdmin:ramos111@cluster0.tvmkw.mongodb.net/mdr-usersnest?retryWrites=true&w=majority'),
  ],
  controllers: [HealthCheckController],
})
export class HealthModule {}