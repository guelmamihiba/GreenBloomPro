import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cors from 'cors';
import { Cron } from '@nestjs/schedule';
import { console } from 'inspector';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    app.use(cors({
        origin: 'http://localhost:3001', 
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
        credentials: true, 
    }));

    await app.listen(3000);
  
}


bootstrap();
