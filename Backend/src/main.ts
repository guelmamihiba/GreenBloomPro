import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cors from 'cors';
import * as dotenv from 'dotenv';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

dotenv.config();

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    // Swagger Configuration
    const config = new DocumentBuilder()
        .setTitle('NestJS API')
        .setDescription('API Documentation for NestJS API')
        .setVersion('1.0')
        .addTag('nestjs')
        .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api', app, document);

    // CORS Configuration
    app.use(cors({
        origin: 'http://localhost:3001', // Replace with your frontend URL
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
        credentials: true, 
    }));

    const PORT = 3000; 
    await app.listen(PORT);
    console.log(`Application is running on: http://localhost:${PORT}`);
    console.log(`Swagger API Documentation is available at: http://localhost:${PORT}/api`);
}

bootstrap();
