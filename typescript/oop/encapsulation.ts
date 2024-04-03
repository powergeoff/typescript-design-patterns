class BankAccount {
  //balance should not be  manipulated outside of this class
  private _balance: number;

  public get balance(): number {
    return this._balance;
  }

  constructor(initialBalance: number) {
    this._balance = initialBalance;
  }

  public deposit(amount: number): void {
    if (amount < 0) {
      console.log("Invalid deposit amount");
      return;
    }
    this._balance += amount;
  }

  public withdraw(amount: number): void {
    if (amount < 0) {
      console.log("Invalid withdrawal amount");
      return;
    }
    if (this._balance - amount < 0) {
      console.log("Insufficient funds");
      return;
    }
    this._balance -= amount;
  }
}

export const AccountDemo = () => {
  const myAccount = new BankAccount(1000);
  myAccount.deposit(500);
  myAccount.withdraw(200);

  console.log(myAccount.balance);
};
