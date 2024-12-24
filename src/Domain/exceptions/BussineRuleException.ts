export class BussineRuleException extends Error {
    constructor(message: string = 'oops! something went wrong') {
      super(message);
      this.name = 'BussineRuleException';
    }
  }
  