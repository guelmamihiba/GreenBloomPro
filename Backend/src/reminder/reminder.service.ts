// src/reminder/reminder.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Reminder } from './reminder.entity'; // Import the entity
import { CronJob } from 'cron';
import { Cron, CronExpression } from '@nestjs/schedule';

@Injectable()
export class ReminderService {
  constructor(
   
  ) {}

  @Cron(CronExpression.EVERY_WEEK)
  handleCron(){
      console.log('Cron job executed');

  }


  // Method to schedule a reminder for watering a plant


  // Method to get all scheduled reminders
 

  // Method to cancel a scheduled reminder by its ID

}
