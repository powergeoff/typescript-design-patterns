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
interface Customer {
  giveDiscount(): number;
}

class Premium implements Customer {
  giveDiscount(): number {
    return 20;
  }
}

class Regular implements Customer {
  giveDiscount(): number {
    return 10;
  }
}
