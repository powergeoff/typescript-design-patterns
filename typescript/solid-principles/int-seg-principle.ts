namespace ISP {
  interface Machine {
    //violates ISP - should be 3 seperate interfaces
    print(document: Document): void;
    scan(document: Document): void;
    fax(document: Document): void;
  }

  class MultiFunctionPrinter implements Machine {
    print(document: Document): void {
      console.log("printing...");
    }
    scan(document: Document): void {
      console.log("scanning...");
    }
    fax(document: Document): void {
      console.log("faxing...");
    }
  }

  //violation
  class Printer implements Machine {
    print(document: Document): void {
      console.log("printing...");
    }
    scan(document: Document): void {
      console.log("WAIT I CAN'T SCAN...");
    }
    fax(document: Document): void {
      throw new Error("Method not implemented.");
    }
  }

  //create posts
  //comment posts
  //sharing posts
  //Admin User
  //Regular User comment/ share only
  interface IComment {
    comment(): void;
  }

  interface ICreate {
    create(): void;
  }

  interface IShare {
    share(): void;
  }

  class Admin implements IComment, IComment, IShare {
    create(): void {
      throw new Error("Method not implemented.");
    }
    comment(): void {
      throw new Error("Method not implemented.");
    }
    share(): void {
      throw new Error("Method not implemented.");
    }
  }

  class User implements IComment, IShare {
    comment(): void {
      throw new Error("Method not implemented.");
    }
    share(): void {
      throw new Error("Method not implemented.");
    }
  }
}
