import { Module , Global} from '@nestjs/common';
import { MailingService } from './mailing.service';
import { MailerModule } from '@nestjs-modules/mailer';
import { PugAdapter } from '@nestjs-modules/mailer/dist/adapters/pug.adapter';
import * as path from 'path';

@Global()
@Module({
  imports:[
    MailerModule.forRoot({
      transport:{
        host: 'smtp.gmail.com',
        port: 465,
        auth : {
          pass: "gfnm cpzz csjv wdlt",
          user : "najmeddine.zaga@gmail.com"
        }
      },
      template : {
        dir : path.join(__dirname, 'templates'),
        adapter : new PugAdapter({ inlineCssEnabled:true}),
        options : {
          strict : true,
        }
      }
    })
  ],
  providers: [MailingService],
  exports: [MailingService],
})
export class mailingModule {}