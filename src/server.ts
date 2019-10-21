/**
 * The class that is the entry point of the bot server application.
 * Once Node has been started, the static main method will be called and initialized the server.
 */
export default class Server {

  /**
   * The main method, that is the entry point of the server.
   * Should only called once during applications lifetime!
   */
  public static main(): Server {
    return new Server();
  }

  private constructor() {
    console.log("Test");
  }

  /**
   * Simple sum method. Can be used as dummy for a initial unit test.
   * @param number1
   * @param number2
   */
  public addNumbers(number1: number, number2: number): number {
    return number1 + number2;
  }
}

Server.main();
