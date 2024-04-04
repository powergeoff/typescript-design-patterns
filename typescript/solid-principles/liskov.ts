//if S is a subclass of T, then objects of type T may be replaced with objects of type S without screwing anything up
//in other words at any time a base class can be used seemlessly instead of the child class????
//pretty much - I feel like this is covered using polymorphism

//real world use case
//Payment Processor
//Credit Card
//Debit Card
//PayPal

//use class because Liskov talks about classes and not interfaces
abstract class PaymentProcessor {
  abstract processPayment(amount: number): void;
}

class CreditCard extends PaymentProcessor {
  processPayment(amount: number): void {
    console.log("do some credit card stuff", amount);
  }
}

class PayPal extends PaymentProcessor {
  processPayment(amount: number): void {
    throw new Error("Method not implemented.");
  }
}

class DebitCard extends PaymentProcessor {
  processPayment(amount: number): void {
    throw new Error("Method not implemented.");
  }
}

abstract class Shape {
  abstract calculateArea(): number;
}

class Rectangle extends Shape {
  constructor(
    public width: number,
    public height: number,
  ) {
    super();
  }
  calculateArea(): number {
    return this.width * this.height;
  }
}

class Square extends Shape {
  constructor(public side: number) {
    super();
  }

  calculateArea(): number {
    return this.side * this.side;
  }
}

//client code
function area(shape: Shape) {
  return shape.calculateArea();
}
