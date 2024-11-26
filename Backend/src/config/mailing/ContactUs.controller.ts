import { Controller, Post, Body } from '@nestjs/common';
import { ContactService } from './ContactUs.service';
import { ContactDto } from '../dto/get-in-touch.dto';

@Controller('contact')
export class ContactController {
  constructor(private readonly contactService: ContactService) {}

  @Post('submit')
  async submitContactForm(@Body() contactDto: ContactDto): Promise<{ message: string }> {
    await this.contactService.sendContactEmail(contactDto);
    return { message: 'Contact form email sent successfully!' };
  }
}
