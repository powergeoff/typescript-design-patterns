//singleton logger class
//log method
//can have multiple methods

export class Logger {
  private static _instance: Logger;
  private static _id: number;

  private constructor() {}

  public static getLogger(): Logger {
    //if the logger doesn't exist - create it
    if (!Logger._instance) {
      this._id = 123456;
      this._instance = new Logger();
    }
    //hand over the single instance of logger
    return this._instance;
  }

  public log(message: string): void {
    console.log(`Logger Id: ${Logger._id}, ${message}`);
  }

  public static warn(message: string): void {
    console.log(`WARNING! Logger Id: ${this._id}, ${message}`);
  }

  public static error(message: string): void {
    console.error(`ERROR! Logger Id: ${this._id}, ${message}`);
  }
}
