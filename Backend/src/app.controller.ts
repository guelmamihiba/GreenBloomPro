// app.controller.ts 
import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  //constructor(private readonly appService: AppService, private readonly maisServie: MailService) {}
  constructor(private readonly appService: AppService) {}

  @Get("/testsendmail")
  getHello(): string {
   // this.maisServie.sendMail()
    return this.appService.getHello();
  }
}
