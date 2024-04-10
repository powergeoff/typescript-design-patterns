import { PaymentProcessorFactory } from "./payment-processor";

describe('Payment Factory', () => {
  test('Stripe process works', () => {
    const factory = new PaymentProcessorFactory();
    const processor = factory.createProcessor('stripe', 10);

    expect(processor.processPayment()).toBe('Stripe is processing amount 10');
  });
})
