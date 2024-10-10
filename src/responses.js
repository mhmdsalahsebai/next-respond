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
    ...(defaultMessage && {
      message: customMessage || HttpStatusMessages[statusCode],
    }),
    ...data,
  };
  res.status(statusCode).json(responseObject);
};

const Continue = (res, message = null, data = {}) =>
  sendResponse(HttpStatus.CONTINUE, res, message, data);

const SwitchingProtocols = (res, message = null, data = {}) =>
  sendResponse(HttpStatus.SWITCHING_PROTOCOLS, res, message, data);

const Processing = (res, message = null, data = {}) =>
  sendResponse(HttpStatus.PROCESSING, res, message, data);

const EarlyHints = (res, message = null, data = {}) =>
  sendResponse(HttpStatus.EARLY_HINTS, res, message, data);

const Ok = (res, message = null, data = {}) =>
  sendResponse(HttpStatus.OK, res, message, data);

const Created = (res, message = null, data = {}) =>
  sendResponse(HttpStatus.CREATED, res, message, data);

const Accepted = (res, message = null, data = {}) =>
  sendResponse(HttpStatus.ACCEPTED, res, message, data);

const NonAuthoritativeInformation = (res, message = null, data = {}) =>
  sendResponse(HttpStatus.NON_AUTHORITATIVE_INFORMATION, res, message, data);

const NoContent = (res) => res.status(HttpStatus.NO_CONTENT).end();

const ResetContent = (res, message = null, data = {}) =>
  sendResponse(HttpStatus.RESET_CONTENT, res, message, data);

const PartialContent = (res, message = null, data = {}) =>
  sendResponse(HttpStatus.PARTIAL_CONTENT, res, message, data);

const Ambiguous = (res, message = null, data = {}) =>
  sendResponse(HttpStatus.AMBIGUOUS, res, message, data);

const MovedPermanently = (res, message = null, data = {}) =>
  sendResponse(HttpStatus.MOVED_PERMANENTLY, res, message, data);

const Found = (res, message = null, data = {}) =>
  sendResponse(HttpStatus.FOUND, res, message, data);

const SeeOther = (res, message = null, data = {}) =>
  sendResponse(HttpStatus.SEE_OTHER, res, message, data);

const NotModified = (res, message = null, data = {}) =>
  sendResponse(HttpStatus.NOT_MODIFIED, res, message, data);

const TemporaryRedirect = (res, message = null, data = {}) =>
  sendResponse(HttpStatus.TEMPORARY_REDIRECT, res, message, data);

const PermanentRedirect = (res, message = null, data = {}) =>
  sendResponse(HttpStatus.PERMANENT_REDIRECT, res, message, data);

const BadRequest = (res, message = null, data = {}) =>
  sendResponse(HttpStatus.BAD_REQUEST, res, message, data);

const Unauthorized = (res, message = null, data = {}) =>
  sendResponse(HttpStatus.UNAUTHORIZED, res, message, data);

const PaymentRequired = (res, message = null, data = {}) =>
  sendResponse(HttpStatus.PAYMENT_REQUIRED, res, message, data);

const Forbidden = (res, message = null, data = {}) =>
  sendResponse(HttpStatus.FORBIDDEN, res, message, data);

const NotFound = (res, message = null, data = {}) =>
  sendResponse(HttpStatus.NOT_FOUND, res, message, data);

const MethodNotAllowed = (res, message = null, data = {}) =>
  sendResponse(HttpStatus.METHOD_NOT_ALLOWED, res, message, data);

const NotAcceptable = (res, message = null, data = {}) =>
  sendResponse(HttpStatus.NOT_ACCEPTABLE, res, message, data);

const ProxyAuthenticationRequired = (res, message = null, data = {}) =>
  sendResponse(HttpStatus.PROXY_AUTHENTICATION_REQUIRED, res, message, data);

const RequestTimeout = (res, message = null, data = {}) =>
  sendResponse(HttpStatus.REQUEST_TIMEOUT, res, message, data);

const Conflict = (res, message = null, data = {}) =>
  sendResponse(HttpStatus.CONFLICT, res, message, data);

const Gone = (res, message = null, data = {}) =>
  sendResponse(HttpStatus.GONE, res, message, data);

const LengthRequired = (res, message = null, data = {}) =>
  sendResponse(HttpStatus.LENGTH_REQUIRED, res, message, data);

const PreconditionFailed = (res, message = null, data = {}) =>
  sendResponse(HttpStatus.PRECONDITION_FAILED, res, message, data);

const PayloadTooLarge = (res, message = null, data = {}) =>
  sendResponse(HttpStatus.PAYLOAD_TOO_LARGE, res, message, data);

const UriTooLong = (res, message = null, data = {}) =>
  sendResponse(HttpStatus.URI_TOO_LONG, res, message, data);

const UnsupportedMediaType = (res, message = null, data = {}) =>
  sendResponse(HttpStatus.UNSUPPORTED_MEDIA_TYPE, res, message, data);

const RequestedRangeNotSatisfiable = (res, message = null, data = {}) =>
  sendResponse(HttpStatus.REQUESTED_RANGE_NOT_SATISFIABLE, res, message, data);

const ExpectationFailed = (res, message = null, data = {}) =>
  sendResponse(HttpStatus.EXPECTATION_FAILED, res, message, data);

const IAmATeapot = (res, message = null, data = {}) =>
  sendResponse(HttpStatus.I_AM_A_TEAPOT, res, message, data);

const Misdirected = (res, message = null, data = {}) =>
  sendResponse(HttpStatus.MISDIRECTED, res, message, data);

const UnprocessableEntity = (res, message = null, data = {}) =>
  sendResponse(HttpStatus.UNPROCESSABLE_ENTITY, res, message, data);

const FailedDependency = (res, message = null, data = {}) =>
  sendResponse(HttpStatus.FAILED_DEPENDENCY, res, message, data);

const PreconditionRequired = (res, message = null, data = {}) =>
  sendResponse(HttpStatus.PRECONDITION_REQUIRED, res, message, data);

const TooManyRequests = (res, message = null, data = {}) =>
  sendResponse(HttpStatus.TOO_MANY_REQUESTS, res, message, data);

const InternalServerError = (res, message = null, data = {}) =>
  sendResponse(HttpStatus.INTERNAL_SERVER_ERROR, res, message, data);

const NotImplemented = (res, message = null, data = {}) =>
  sendResponse(HttpStatus.NOT_IMPLEMENTED, res, message, data);

const BadGateway = (res, message = null, data = {}) =>
  sendResponse(HttpStatus.BAD_GATEWAY, res, message, data);

const ServiceUnavailable = (res, message = null, data = {}) =>
  sendResponse(HttpStatus.SERVICE_UNAVAILABLE, res, message, data);

const GatewayTimeout = (res, message = null, data = {}) =>
  sendResponse(HttpStatus.GATEWAY_TIMEOUT, res, message, data);

const HttpVersionNotSupported = (res, message = null, data = {}) =>
  sendResponse(HttpStatus.HTTP_VERSION_NOT_SUPPORTED, res, message, data);

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
