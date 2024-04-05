//why do we need it? to create a new INSTANCE
//when? Super complex object that needs to be created

interface UserDetails {
  name: string;
  age: number;
  email: string;
}

interface Prototype {
  clone(): Prototype;
  getUserDetails(): UserDetails;
}

class ConcretePrototype implements Prototype {
  constructor(private user: UserDetails) {}

  clone(): Prototype {
    const clone = Object.create(this);
    clone.user = { ...this.user };
    return clone;
  }

  getUserDetails(): UserDetails {
    return this.user;
  }
}
