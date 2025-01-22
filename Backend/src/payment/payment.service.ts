import { Inject, Injectable, Logger } from '@nestjs/common';
import Stripe from 'stripe';

@Injectable()
export class StripeService {
  private readonly stripe: Stripe;
  private readonly logger = new Logger(StripeService.name);

  constructor(@Inject('STRIPE_API_KEY') private readonly apiKey: string) {
    console.log('Stripe API Key:', apiKey);  // Log to confirm it's loaded
    this.stripe = new Stripe(this.apiKey, { apiVersion: '2024-09-30.acacia' });
  }  

  // Fetch products from Stripe
  async getProducts(): Promise<Stripe.Product[]> {
    try {
      const products = await this.stripe.products.list();
      this.logger.log('Products fetched successfully');
      return products.data;
    } catch (error) {
      this.logger.error('Failed to fetch products from Stripe', error.stack);
      throw new Error('Unable to fetch products from Stripe');
    }
  }

  // Fetch customers from Stripe
  async getCustomers(): Promise<Stripe.Customer[]> {
    try {
      const customers = await this.stripe.customers.list();
      this.logger.log('Customers fetched successfully');
      return customers.data;
    } catch (error) {
      this.logger.error('Failed to fetch customers from Stripe', error.stack);
      throw new Error('Unable to fetch customers from Stripe');
    }
  }

  async createPaymentIntent(amount: number): Promise<Stripe.PaymentIntent> {
    try {
      console.log('Creating payment intent with amount:', amount);  // Log amount
      const paymentIntent = await this.stripe.paymentIntents.create({
        amount,
        currency: 'usd',  // Specify the currency
      });
      this.logger.log('Payment intent created successfully');
      return paymentIntent;
    } catch (error) {
      this.logger.error('Failed to create payment intent', error.stack);
      throw new Error('Unable to create payment intent');
    }
  }
  

  // Confirm a payment
  async confirmPayment(paymentIntentId: string, paymentMethodId: string): Promise<Stripe.PaymentIntent> {
    try {
      const paymentIntent = await this.stripe.paymentIntents.confirm(paymentIntentId, {
        payment_method: paymentMethodId,
      });
      this.logger.log('Payment confirmed successfully');
      return paymentIntent;
    } catch (error) {
      this.logger.error('Failed to confirm payment', error.stack);
      throw new Error('Unable to confirm payment');
    }
  }
}
