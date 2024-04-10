import { CustomerBuilder, CustomerDirector } from './customer-example';

describe("Customer Director", () => {
  
  test("the director can build minimal product", () => {
    

    const builder = new CustomerBuilder();
    const director = new CustomerDirector(builder);
    const customer = director.buildMinimal("Geoff", "O", "go@email.com")

    expect(customer.firstName).toBe("Geoff");
  }); 

});
