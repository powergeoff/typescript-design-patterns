import { Logger } from "./logger";

describe("Logger class", () => {
  test("seperate instances should have the same id", () => {
    const logger1 = Logger.getLogger();
    const logger2 = Logger.getLogger();

    expect(logger1.log("some message")).toBe(logger2.log("some message"));
  });
});
