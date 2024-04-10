abstract class PaymentProcessor{
  constructor(protected amount: number){}
  abstract processPayment(): string;
}

//extends for inheritance
//implements for polymorphism


class PayPalProcessor extends PaymentProcessor{
  processPayment(): string {
    return `PayPal is processing amount ${this.amount}`;
  }
  
}

class StripeProcessor extends PaymentProcessor{
  processPayment(): string {
    return `Stripe is processing amount ${this.amount}`;
  }
  
}

class BankTransferProcessor extends PaymentProcessor{
  processPayment(): string {
    return `BankTransfer is processing amount ${this.amount}`;
  }
  
}

export class PaymentProcessorFactory{
  createProcessor(type: 'paypal' | 'stripe' | 'bank', amount: number): PaymentProcessor{
    switch(type){
      case 'paypal':
        return new PayPalProcessor(amount);
      case 'stripe':
        return new StripeProcessor(amount);
      case 'bank':
        return new BankTransferProcessor(amount);
      default:
        throw new Error("Invalid Processor Type")
    }
  }
}