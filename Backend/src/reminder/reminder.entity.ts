// src/reminder/reminder.entity.ts
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('reminders')
export class Reminder {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  plantName: string;

  @Column()
  intervalDays: number;

  @Column()
  cronExpression: string;
}
