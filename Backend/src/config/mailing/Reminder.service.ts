import { Injectable } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MailingService } from '../../config/mailing/mailing.service';
import { User } from '../../resources/users/users.entity';

@Injectable()
export class ReminderService {
  constructor(
    private readonly mailingService: MailingService,
    @InjectRepository(User) private usersRepository: Repository<User>,
  ) {}

  // Cron job to send weekly reminders to all users
  @Cron(CronExpression.EVERY_10_SECONDS) // Set to trigger weekly
  async sendWeeklyReminders() {
    console.log('Cron job triggered: Sending weekly reminders to users.');
    try {
      // Fetch all users from the database
      const users = await this.usersRepository.find();

      // Loop through each user and send a reminder email
      for (const user of users) {
        const emailContent = `
          <h1>Reminder: Take Care of Your Plants!</h1>
          <p>Hi ${user.firstName},</p>
          <p>Don't forget to water your plants this week!</p>
        `;

        await this.mailingService.sendMail(
          user.email,
          'Weekly Plant Reminder',
          emailContent,
        );
        console.log(`Email sent to ${user.email}`);
      }
    } catch (error) {
      console.error('Error sending reminder emails:', error);
    }
  }
}
