import { Controller, Post, Body , UploadedFile , UseInterceptors} from '@nestjs/common';
import { ContactService } from './ContactUs.service';
import { ContactDto } from '../dto/create-get-in-touch.dto';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('contact')
export class ContactController {
  constructor(private readonly contactService: ContactService) {}


  @Post('submit')
  async submitContactForm(@Body() contactDto: ContactDto): Promise<{ message: string }> {
    await this.contactService.sendContactEmail(contactDto);
    return { message: 'Contact form email sent successfully!' };
  }
  
  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  async uploadFile(@UploadedFile() file: Express.Multer.File): Promise<{ message:string;filePath: string}>{
    if(!file){
      throw new Error ('File upload failed');
    }
    console.log('Upload file , file');
    return{
      message : "File Uploaded Successfully !",
      filePath: file.path
    }
  }
}
