class ErrorGetTrans extends Error {
  constructor() {
    super('Translation not found');
  }
}

export default ErrorGetTrans