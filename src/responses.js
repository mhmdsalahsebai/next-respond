const { HttpStatus, HttpStatusMessages } = require("./statusCodes");

const sendResponse = (
  statusCode,
  res,
  customMessage = null,
  data = {},
  defaultMessage = true
) => {
  const responseObject = {
    statusCode,
    ...(customMessage
      ? { message: customMessage }
      : defaultMessage && { message: HttpStatusMessages[statusCode] }),
    ...data,
  };
  res.status(statusCode).json(responseObject);
};

const Continue = (res, message = null, data = {}, defaultMessage = true) =>
  sendResponse(HttpStatus.CONTINUE, res, message, data, defaultMessage);

const SwitchingProtocols = (
  res,
  message = null,
  data = {},
  defaultMessage = true
) =>
  sendResponse(
    HttpStatus.SWITCHING_PROTOCOLS,
    res,
    message,
    data,
    defaultMessage
  );

const Processing = (res, message = null, data = {}, defaultMessage = true) =>
  sendResponse(HttpStatus.PROCESSING, res, message, data, defaultMessage);

const EarlyHints = (res, message = null, data = {}, defaultMessage = true) =>
  sendResponse(HttpStatus.EARLY_HINTS, res, message, data, defaultMessage);

const Ok = (res, message = null, data = {}, defaultMessage = true) =>
  sendResponse(HttpStatus.OK, res, message, data, defaultMessage);

const Created = (res, message = null, data = {}, defaultMessage = true) =>
  sendResponse(HttpStatus.CREATED, res, message, data, defaultMessage);

const Accepted = (res, message = null, data = {}, defaultMessage = true) =>
  sendResponse(HttpStatus.ACCEPTED, res, message, data, defaultMessage);

const NonAuthoritativeInformation = (
  res,
  message = null,
  data = {},
  defaultMessage = true
) =>
  sendResponse(
    HttpStatus.NON_AUTHORITATIVE_INFORMATION,
    res,
    message,
    data,
    defaultMessage
  );

const NoContent = (res) => res.status(HttpStatus.NO_CONTENT).end();

const ResetContent = (res, message = null, data = {}, defaultMessage = true) =>
  sendResponse(HttpStatus.RESET_CONTENT, res, message, data, defaultMessage);

const PartialContent = (
  res,
  message = null,
  data = {},
  defaultMessage = true
) =>
  sendResponse(HttpStatus.PARTIAL_CONTENT, res, message, data, defaultMessage);

const Ambiguous = (res, message = null, data = {}, defaultMessage = true) =>
  sendResponse(HttpStatus.AMBIGUOUS, res, message, data, defaultMessage);

const MovedPermanently = (
  res,
  message = null,
  data = {},
  defaultMessage = true
) =>
  sendResponse(
    HttpStatus.MOVED_PERMANENTLY,
    res,
    message,
    data,
    defaultMessage
  );

const Found = (res, message = null, data = {}, defaultMessage = true) =>
  sendResponse(HttpStatus.FOUND, res, message, data, defaultMessage);

const SeeOther = (res, message = null, data = {}, defaultMessage = true) =>
  sendResponse(HttpStatus.SEE_OTHER, res, message, data, defaultMessage);

const NotModified = (res, message = null, data = {}, defaultMessage = true) =>
  sendResponse(HttpStatus.NOT_MODIFIED, res, message, data, defaultMessage);

const TemporaryRedirect = (
  res,
  message = null,
  data = {},
  defaultMessage = true
) =>
  sendResponse(
    HttpStatus.TEMPORARY_REDIRECT,
    res,
    message,
    data,
    defaultMessage
  );

const PermanentRedirect = (
  res,
  message = null,
  data = {},
  defaultMessage = true
) =>
  sendResponse(
    HttpStatus.PERMANENT_REDIRECT,
    res,
    message,
    data,
    defaultMessage
  );

const BadRequest = (res, message = null, data = {}, defaultMessage = true) =>
  sendResponse(HttpStatus.BAD_REQUEST, res, message, data, defaultMessage);

const Unauthorized = (res, message = null, data = {}, defaultMessage = true) =>
  sendResponse(HttpStatus.UNAUTHORIZED, res, message, data, defaultMessage);

const PaymentRequired = (
  res,
  message = null,
  data = {},
  defaultMessage = true
) =>
  sendResponse(HttpStatus.PAYMENT_REQUIRED, res, message, data, defaultMessage);

const Forbidden = (res, message = null, data = {}, defaultMessage = true) =>
  sendResponse(HttpStatus.FORBIDDEN, res, message, data, defaultMessage);

const NotFound = (res, message = null, data = {}, defaultMessage = true) =>
  sendResponse(HttpStatus.NOT_FOUND, res, message, data, defaultMessage);

const MethodNotAllowed = (
  res,
  message = null,
  data = {},
  defaultMessage = true
) =>
  sendResponse(
    HttpStatus.METHOD_NOT_ALLOWED,
    res,
    message,
    data,
    defaultMessage
  );

const NotAcceptable = (res, message = null, data = {}, defaultMessage = true) =>
  sendResponse(HttpStatus.NOT_ACCEPTABLE, res, message, data, defaultMessage);

const ProxyAuthenticationRequired = (
  res,
  message = null,
  data = {},
  defaultMessage = true
) =>
  sendResponse(
    HttpStatus.PROXY_AUTHENTICATION_REQUIRED,
    res,
    message,
    data,
    defaultMessage
  );

const RequestTimeout = (
  res,
  message = null,
  data = {},
  defaultMessage = true
) =>
  sendResponse(HttpStatus.REQUEST_TIMEOUT, res, message, data, defaultMessage);

const Conflict = (res, message = null, data = {}, defaultMessage = true) =>
  sendResponse(HttpStatus.CONFLICT, res, message, data, defaultMessage);

const Gone = (res, message = null, data = {}, defaultMessage = true) =>
  sendResponse(HttpStatus.GONE, res, message, data, defaultMessage);

const LengthRequired = (
  res,
  message = null,
  data = {},
  defaultMessage = true
) =>
  sendResponse(HttpStatus.LENGTH_REQUIRED, res, message, data, defaultMessage);

const PreconditionFailed = (
  res,
  message = null,
  data = {},
  defaultMessage = true
) =>
  sendResponse(
    HttpStatus.PRECONDITION_FAILED,
    res,
    message,
    data,
    defaultMessage
  );

const PayloadTooLarge = (
  res,
  message = null,
  data = {},
  defaultMessage = true
) =>
  sendResponse(
    HttpStatus.PAYLOAD_TOO_LARGE,
    res,
    message,
    data,
    defaultMessage
  );

const UriTooLong = (res, message = null, data = {}, defaultMessage = true) =>
  sendResponse(HttpStatus.URI_TOO_LONG, res, message, data, defaultMessage);

const UnsupportedMediaType = (
  res,
  message = null,
  data = {},
  defaultMessage = true
) =>
  sendResponse(
    HttpStatus.UNSUPPORTED_MEDIA_TYPE,
    res,
    message,
    data,
    defaultMessage
  );

const RequestedRangeNotSatisfiable = (
  res,
  message = null,
  data = {},
  defaultMessage = true
) =>
  sendResponse(
    HttpStatus.REQUESTED_RANGE_NOT_SATISFIABLE,
    res,
    message,
    data,
    defaultMessage
  );

const ExpectationFailed = (
  res,
  message = null,
  data = {},
  defaultMessage = true
) =>
  sendResponse(
    HttpStatus.EXPECTATION_FAILED,
    res,
    message,
    data,
    defaultMessage
  );

const IAmATeapot = (res, message = null, data = {}, defaultMessage = true) =>
  sendResponse(HttpStatus.I_AM_A_TEAPOT, res, message, data, defaultMessage);

const Misdirected = (res, message = null, data = {}, defaultMessage = true) =>
  sendResponse(HttpStatus.MISDIRECTED, res, message, data, defaultMessage);

const UnprocessableEntity = (
  res,
  message = null,
  data = {},
  defaultMessage = true
) =>
  sendResponse(
    HttpStatus.UNPROCESSABLE_ENTITY,
    res,
    message,
    data,
    defaultMessage
  );

const FailedDependency = (
  res,
  message = null,
  data = {},
  defaultMessage = true
) =>
  sendResponse(
    HttpStatus.FAILED_DEPENDENCY,
    res,
    message,
    data,
    defaultMessage
  );

const PreconditionRequired = (
  res,
  message = null,
  data = {},
  defaultMessage = true
) =>
  sendResponse(
    HttpStatus.PRECONDITION_REQUIRED,
    res,
    message,
    data,
    defaultMessage
  );

const TooManyRequests = (
  res,
  message = null,
  data = {},
  defaultMessage = true
) =>
  sendResponse(
    HttpStatus.TOO_MANY_REQUESTS,
    res,
    message,
    data,
    defaultMessage
  );

const InternalServerError = (
  res,
  message = null,
  data = {},
  defaultMessage = true
) =>
  sendResponse(
    HttpStatus.INTERNAL_SERVER_ERROR,
    res,
    message,
    data,
    defaultMessage
  );

const NotImplemented = (
  res,
  message = null,
  data = {},
  defaultMessage = true
) =>
  sendResponse(HttpStatus.NOT_IMPLEMENTED, res, message, data, defaultMessage);

const BadGateway = (res, message = null, data = {}, defaultMessage = true) =>
  sendResponse(HttpStatus.BAD_GATEWAY, res, message, data, defaultMessage);

const ServiceUnavailable = (
  res,
  message = null,
  data = {},
  defaultMessage = true
) =>
  sendResponse(
    HttpStatus.SERVICE_UNAVAILABLE,
    res,
    message,
    data,
    defaultMessage
  );

const GatewayTimeout = (
  res,
  message = null,
  data = {},
  defaultMessage = true
) =>
  sendResponse(HttpStatus.GATEWAY_TIMEOUT, res, message, data, defaultMessage);

const HttpVersionNotSupported = (
  res,
  message = null,
  data = {},
  defaultMessage = true
) =>
  sendResponse(
    HttpStatus.HTTP_VERSION_NOT_SUPPORTED,
    res,
    message,
    data,
    defaultMessage
  );

module.exports = {
  Continue,
  SwitchingProtocols,
  Processing,
  EarlyHints,
  Ok,
  Created,
  Accepted,
  NonAuthoritativeInformation,
  NoContent,
  ResetContent,
  PartialContent,
  Ambiguous,
  MovedPermanently,
  Found,
  SeeOther,
  NotModified,
  TemporaryRedirect,
  PermanentRedirect,
  BadRequest,
  Unauthorized,
  PaymentRequired,
  Forbidden,
  NotFound,
  MethodNotAllowed,
  NotAcceptable,
  ProxyAuthenticationRequired,
  RequestTimeout,
  Conflict,
  Gone,
  LengthRequired,
  PreconditionFailed,
  PayloadTooLarge,
  UriTooLong,
  UnsupportedMediaType,
  RequestedRangeNotSatisfiable,
  ExpectationFailed,
  IAmATeapot,
  Misdirected,
  UnprocessableEntity,
  FailedDependency,
  PreconditionRequired,
  TooManyRequests,
  InternalServerError,
  NotImplemented,
  BadGateway,
  ServiceUnavailable,
  GatewayTimeout,
  HttpVersionNotSupported,
  sendResponse,
  HttpStatus,
  HttpStatusMessages,
};
