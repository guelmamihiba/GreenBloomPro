import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';
import { ContactDto } from '../dto/create-get-in-touch.dto';

@Injectable()
export class ContactService {
  constructor(private readonly mailerService: MailerService) {}

  async sendContactEmail(contactDto: ContactDto): Promise<void> {
    const { name, email, phone, message, object } = contactDto;

    try {
      await this.mailerService.sendMail({
        to: email,
        subject: object,
        html: `
          <h1>Contact Form Details</h1>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        `,
      });

      console.log('Contact form email sent successfully');
    } catch (error) {
      console.error('Error sending contact email:', error);
      throw new Error('Failed to send contact email');
    }
  }

  // General-purpose email function for the contact form
  async sendMail(to: string, subject: string, html: string): Promise<void> {
    try {
      await this.mailerService.sendMail({
        to, // Dynamic recipient email
        subject,
        html,
      });

      console.log('Custom email sent successfully');
    } catch (error) {
      console.error('Error sending custom email:', error);
      throw new Error('Failed to send custom email');
    }
  }
}
