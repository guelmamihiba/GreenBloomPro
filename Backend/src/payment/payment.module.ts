import { Module, DynamicModule } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { StripeController } from './payment.controller';
import { StripeService } from './payment.service';
import { Stripe } from 'stripe';

@Module({})
export class StripeModule {
  static forRootAsync(): DynamicModule {
    return {
      module: StripeModule,
      imports: [ConfigModule],  // ConfigModule should be imported in the root module (AppModule)
      controllers: [StripeController],
      providers: [
        StripeService,
        {
          provide: Stripe,
          useFactory: async (configService: ConfigService) => {
            const apiKey = configService.get<string>('STRIPE_API_KEY');
            if (!apiKey) {
              throw new Error('STRIPE_API_KEY is not defined in the environment variables');
            }
            return new Stripe(apiKey, { apiVersion: '2024-09-30.acacia' });
          },
          inject: [ConfigService],
        },
      ],
    };
  }
}
