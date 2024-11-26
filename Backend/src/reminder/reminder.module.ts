// src/reminder/reminder.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReminderService } from './reminder.service';
import { ReminderController } from './reminder.controller';
import { Reminder } from './reminder.entity';  // Import the entity

@Module({
  imports: [TypeOrmModule.forFeature([Reminder])], // Register the entity with TypeORM
  providers: [ReminderService],
  controllers: [ReminderController],
})
export class ReminderModule {}
