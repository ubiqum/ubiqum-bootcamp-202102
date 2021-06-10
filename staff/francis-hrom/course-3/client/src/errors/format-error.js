class FormatError extends Error {
  constructor(message) {
    super(message);

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, FormatError);
    }

    this.name = "FormatError";
  }
}

export default FormatError;
