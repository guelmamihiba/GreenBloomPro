import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';
import { MailDataType } from '../../config/dto/create-mailing.dto';

@Injectable()
export class MailingService {
  constructor(private readonly mailerService: MailerService) {}

  // Function to send the email verification link to the user
  async sendVerificationEmail({ email, fullName, object, token }: MailDataType): Promise<void> {

    // Build the verification URL containing the token
    const verificationUrl = `http://localhost:3001/very-email?token=${token}`;

    // Send the verification email
    await this.mailerService
      .sendMail({
        to: email, 
        subject: object, 
        html: `
          <h1>Welcome to GreenBloom!</h1>
          <p>Dear ${fullName},</p>
          <p>Please verify your account by clicking the link below:</p>
          <a href="${verificationUrl}">Activate Account</a>
          <p>Your activation link expires within 4 days.</p>
        `, 
      })
      .then(() => console.log('Verification email sent successuffly'))
      .catch((error) => console.error('Error sending email:', error)); 
  }

  async sendMail(to: string, subject: string, html: string): Promise<void> {
    console.log(`Sending email to: ${to}`);
    try {
      await this.mailerService.sendMail({ to, subject, html });
      console.log('Email sent successfully');
    } catch (error) {
      console.error('Error sending email:', error);
      throw new Error('Failed to send email');
    }
  }
}  
