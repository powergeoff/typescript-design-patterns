//a class has only one instance during app lifetime while providing global access to it

//why singleton? passing instances UNCHANGED to deeply nested componenets
export class Singleton {
  //static - no new keyword
  private static _instance: Singleton;
  private static _myValue: number;

  private constructor() {}

  public static getInstance(): Singleton {
    if (!Singleton._instance) {
      Singleton._instance = new Singleton();
    }
    return this._instance;
  }

  set myValue(value: number) {
    Singleton._myValue = value;
  }

  get myValue(): number {
    return Singleton._myValue;
  }
}
