//modules should be open for extension but closed for modification
class Discount {
  giveDiscount(customerType: "premium" | "regular"): number {
    //if / else code smell
    if (customerType === "regular") {
      return 10;
    } else if (customerType === "premium") {
      return 20;
    } else {
      return 10;
    }
  }
}

//better approach
//Customer Interface declares giveDiscount method
//Implementing classes provide their own implementation
//new refactor Discount class takes a customer and calls it's giveDiscount() method
class RefactorDiscount {
  discount(customer: Customer): number {
    return customer.giveDiscount();
  }
}

interface Customer {
  giveDiscount(): number;
  //add loyalty points Open closed allows to extend or add functionality
  //BUT WE DIDN'T change existing functionality - we didn't break existing tests
  addLoyaltyPoints(amount: number): number;
}

class Premium implements Customer {
  addLoyaltyPoints(amount: number): number {
    return 2 * amount;
  }
  giveDiscount(): number {
    return 20;
  }
}

class Regular implements Customer {
  addLoyaltyPoints(amount: number): number {
    throw new Error("Method not implemented.");
  }
  giveDiscount(): number {
    return 10;
  }
}

class Gold implements Customer {
  addLoyaltyPoints(amount: number): number {
    throw new Error("Method not implemented.");
  }
  giveDiscount(): number {
    return 30;
  }
}
