import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { StripeService } from './payment.service';
import { Stripe } from 'stripe';

@Controller('payment')
export class StripeController {
  constructor(private readonly stripeService: StripeService) {}

  // Route to fetch products from Stripe
  @Get('products')
  async getProducts(): Promise<Stripe.Product[]> {
    return await this.stripeService.getProducts();
  }

  // Route to fetch customers from Stripe
  @Get('customers')
  async getCustomers(): Promise<Stripe.Customer[]> {
    return await this.stripeService.getCustomers();
  }

  @Post('create-payment-intent')
  async createPaymentIntent(@Body('amount') amount: number): Promise<Stripe.PaymentIntent> {
    console.log('Received amount:', amount);  // Log the received amount
    return await this.stripeService.createPaymentIntent(amount);
  }

  // Route to confirm a payment
  @Post('confirm-payment')
  async confirmPayment(@Body() body: { paymentIntentId: string; paymentMethodId: string }): Promise<Stripe.PaymentIntent> {
    const { paymentIntentId, paymentMethodId } = body;
    return await this.stripeService.confirmPayment(paymentIntentId, paymentMethodId);
  }
}
