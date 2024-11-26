// src/reminder/reminder.controller.ts
import { Controller, Post, Body, Get, Param, Delete } from '@nestjs/common';
import { ReminderService } from './reminder.service';
import { Reminder } from './reminder.entity';

@Controller('reminders')
export class ReminderController {
  constructor(private readonly reminderService: ReminderService) {}

  

  @Delete('cancel/:id')
  cancelReminder(@Param('id') id: string) {  // Ensure id is treated as a string
    //this.reminderService.cancelReminder(id);
  }
}
