export class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidationError";
  }
}

export class ValidateFound extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidateFound";
  }
}
