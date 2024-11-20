import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tools} from './resources/shop/tools/tools.entity';
import { Terrariums} from './resources/shop/terrarium/terrarium.entity';
import { Homewares} from './resources/shop/home_ware_decor/home_ware_decor.entity';
import { Vases} from './resources/shop/vases/vases.entity';
import { EssentionalOils } from './resources/shop/essentional_oils/essentional_oils.entity';
import { BotanicalArt } from './resources/shop/botanical_art/botanical_art.entity';
import { VasesModule } from './resources/shop/vases/vases.module';
import { TerrariumModule } from './resources/shop/terrarium/terrarium.module';
import { HomeWareDecorModule } from './resources/shop/home_ware_decor/home_ware_decor.module';
import { ToolsModule } from './resources/shop/tools/tools.module';
import { EssentionalOilsModule } from './resources/shop/essentional_oils/essentional_oils.module';
import { BotanicalArtModule } from './resources/shop/botanical_art/botanical_art.module';
import { AuthModule } from './resources/auth/auth.module';
import { UsersModule } from './resources/users/users.module';
import { Users } from './resources/users/users.entity';
import { mailingModule,} from './config//mailing//mailing.module';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'HIBA1234',
      database: 'plantify',
      entities: [Tools, Terrariums, Homewares, Vases, EssentionalOils, BotanicalArt, Users], 
      synchronize: true,
      retryAttempts: 5,
      retryDelay: 3000,
    }),
    VasesModule ,
    TerrariumModule,
    BotanicalArtModule,
    HomeWareDecorModule,
    ToolsModule,
    EssentionalOilsModule,
    AuthModule,
    UsersModule,
    mailingModule
  ],
})
export class AppModule {}
