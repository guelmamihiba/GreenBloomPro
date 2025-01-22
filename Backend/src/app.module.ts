import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { mailingModule } from './config/mailing/mailing.module';
import { AuthModule } from './resources/auth/auth.module';
import { ChatModule } from './resources/ChatRoom/chat.module';
import { BotanicalArt } from './resources/shop/botanical_art/botanical_art.entity';
import { BotanicalArtModule } from './resources/shop/botanical_art/botanical_art.module';
import { EssentionalOils } from './resources/shop/essentional_oils/essentional_oils.entity';
import { EssentionalOilsModule } from './resources/shop/essentional_oils/essentional_oils.module';
import { Homewares } from './resources/shop/home_ware_decor/home_ware_decor.entity';
import { HomeWareDecorModule } from './resources/shop/home_ware_decor/home_ware_decor.module';
import { Terrariums } from './resources/shop/terrarium/terrarium.entity';
import { TerrariumModule } from './resources/shop/terrarium/terrarium.module';
import { Tools } from './resources/shop/tools/tools.entity';
import { ToolsModule } from './resources/shop/tools/tools.module';
import { Vases } from './resources/shop/vases/vases.entity';
import { VasesModule } from './resources/shop/vases/vases.module';
import { User } from './resources/users/users.entity';
import { UsersModule } from './resources/users/users.module';
import { StripeModule } from './payment/payment.module';
import { FeaturedPlant } from './resources/shop/HomePage/featuredPlants.entity';
import { FeaturedPlantsModule } from './resources/shop/HomePage/FeaturedPlants.module';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    ScheduleModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'HIBA1234',
      database: 'plantify',
      entities: [Tools, Terrariums, Homewares, Vases, EssentionalOils, BotanicalArt, User , FeaturedPlant],
      synchronize: true,
      retryAttempts: 5,
      retryDelay: 3000,
    }),
    VasesModule,
    TerrariumModule,
    BotanicalArtModule,
    HomeWareDecorModule,
    ToolsModule,
    EssentionalOilsModule,
    AuthModule,
    UsersModule,
    mailingModule,
    ChatModule,
    StripeModule,
    FeaturedPlantsModule
  ],
})
export class AppModule {}

