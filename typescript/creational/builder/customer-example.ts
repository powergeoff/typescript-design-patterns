export interface ICustomer {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
}

export interface ICustomerBuilder {
  setFirstName(firstName: string):ICustomerBuilder;
  setLastName(lastName: string):ICustomerBuilder;
  setEmail(email: string):ICustomerBuilder;
  setPhoneNumber(phoneNumber: string):ICustomerBuilder;
  build(): ICustomer;
}

export class CustomerBuilder implements ICustomerBuilder{

  private _firstName: string = "";
  private _lastName: string = "";
  private _email: string = "";
  private _phoneNumber: string = "";

  setFirstName(firstName: string): ICustomerBuilder {
    this._firstName = firstName;
    return this;
  }
  setLastName(lastName: string): ICustomerBuilder {
    this._lastName = lastName;
    return this;
  }
  setEmail(email: string): ICustomerBuilder {
    this._email = email;
    return this;
  }
  setPhoneNumber(phoneNumber: string): ICustomerBuilder {
    this._phoneNumber = phoneNumber;
    return this;
  }
  build(): ICustomer {
    return new Customer(this._firstName, this._lastName, this._email, this._phoneNumber);
  }
}

export class Customer implements ICustomer {
  constructor(public firstName: string, public lastName: string, public email: string, public phoneNumber: string){}
}

export class CustomerDirector{
  private _builder: ICustomerBuilder;

  constructor(builder: ICustomerBuilder){
    this._builder = builder;
  }

  buildMinimal(firstName: string, lastName: string, email: string): ICustomer {

    return this._builder
      .setFirstName(firstName)
      .setLastName(lastName)
      .setEmail(email)
      .build();
  } 
}

