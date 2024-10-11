const {
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
} = require("../src/index");

let res;

beforeEach(() => {
  res = {
    status: jest.fn().mockReturnThis(),
    json: jest.fn(),
    end: jest.fn(),
  };
});

describe("HTTP Status Response Functions", () => {
  test("Continue should return 100 status", () => {
    Continue(res, "Processing");
    expect(res.status).toHaveBeenCalledWith(100);
    expect(res.json).toHaveBeenCalledWith({
      statusCode: 100,
      message: "Processing",
    });
  });

  test("SwitchingProtocols should return 101 status", () => {
    SwitchingProtocols(res, "Switching");
    expect(res.status).toHaveBeenCalledWith(101);
    expect(res.json).toHaveBeenCalledWith({
      statusCode: 101,
      message: "Switching",
    });
  });

  test("Processing should return 102 status", () => {
    Processing(res, "In progress");
    expect(res.status).toHaveBeenCalledWith(102);
    expect(res.json).toHaveBeenCalledWith({
      statusCode: 102,
      message: "In progress",
    });
  });

  test("EarlyHints should return 103 status", () => {
    EarlyHints(res, "Hints");
    expect(res.status).toHaveBeenCalledWith(103);
    expect(res.json).toHaveBeenCalledWith({
      statusCode: 103,
      message: "Hints",
    });
  });

  test("NoContent should return 204 status with end", () => {
    NoContent(res);
    expect(res.status).toHaveBeenCalledWith(204);
    expect(res.end).toHaveBeenCalled();
  });

  test("BadRequest should return 400 status", () => {
    BadRequest(res, "Invalid request");
    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({
      statusCode: 400,
      message: "Invalid request",
    });
  });

  test("InternalServerError should return 500 status", () => {
    InternalServerError(res, "Server error");
    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith({
      statusCode: 500,
      message: "Server error",
    });
  });

  test("GatewayTimeout should return 504 status", () => {
    GatewayTimeout(res, "Timeout");
    expect(res.status).toHaveBeenCalledWith(504);
    expect(res.json).toHaveBeenCalledWith({
      statusCode: 504,
      message: "Timeout",
    });
  });

  test("Forbidden should return 403 status", () => {
    Forbidden(res, "Access denied");
    expect(res.status).toHaveBeenCalledWith(403);
    expect(res.json).toHaveBeenCalledWith({
      statusCode: 403,
      message: "Access denied",
    });
  });

  test("NotFound should return 404 status", () => {
    NotFound(res, "Resource not found");
    expect(res.status).toHaveBeenCalledWith(404);
    expect(res.json).toHaveBeenCalledWith({
      statusCode: 404,
      message: "Resource not found",
    });
  });

  test("MethodNotAllowed should return 405 status", () => {
    MethodNotAllowed(res, "Method not allowed");
    expect(res.status).toHaveBeenCalledWith(405);
    expect(res.json).toHaveBeenCalledWith({
      statusCode: 405,
      message: "Method not allowed",
    });
  });

  test("NotAcceptable should return 406 status", () => {
    NotAcceptable(res, "Not acceptable");
    expect(res.status).toHaveBeenCalledWith(406);
    expect(res.json).toHaveBeenCalledWith({
      statusCode: 406,
      message: "Not acceptable",
    });
  });

  test("RequestTimeout should return 408 status", () => {
    RequestTimeout(res, "Request timed out");
    expect(res.status).toHaveBeenCalledWith(408);
    expect(res.json).toHaveBeenCalledWith({
      statusCode: 408,
      message: "Request timed out",
    });
  });

  test("Conflict should return 409 status", () => {
    Conflict(res, "Conflict occurred");
    expect(res.status).toHaveBeenCalledWith(409);
    expect(res.json).toHaveBeenCalledWith({
      statusCode: 409,
      message: "Conflict occurred",
    });
  });

  test("Gone should return 410 status", () => {
    Gone(res, "Resource gone");
    expect(res.status).toHaveBeenCalledWith(410);
    expect(res.json).toHaveBeenCalledWith({
      statusCode: 410,
      message: "Resource gone",
    });
  });

  test("LengthRequired should return 411 status", () => {
    LengthRequired(res, "Length required");
    expect(res.status).toHaveBeenCalledWith(411);
    expect(res.json).toHaveBeenCalledWith({
      statusCode: 411,
      message: "Length required",
    });
  });

  test("PreconditionFailed should return 412 status", () => {
    PreconditionFailed(res, "Precondition failed");
    expect(res.status).toHaveBeenCalledWith(412);
    expect(res.json).toHaveBeenCalledWith({
      statusCode: 412,
      message: "Precondition failed",
    });
  });

  test("PayloadTooLarge should return 413 status", () => {
    PayloadTooLarge(res, "Payload too large");
    expect(res.status).toHaveBeenCalledWith(413);
    expect(res.json).toHaveBeenCalledWith({
      statusCode: 413,
      message: "Payload too large",
    });
  });

  test("UriTooLong should return 414 status", () => {
    UriTooLong(res, "URI too long");
    expect(res.status).toHaveBeenCalledWith(414);
    expect(res.json).toHaveBeenCalledWith({
      statusCode: 414,
      message: "URI too long",
    });
  });

  test("UnsupportedMediaType should return 415 status", () => {
    UnsupportedMediaType(res, "Unsupported media type");
    expect(res.status).toHaveBeenCalledWith(415);
    expect(res.json).toHaveBeenCalledWith({
      statusCode: 415,
      message: "Unsupported media type",
    });
  });

  test("ExpectationFailed should return 417 status", () => {
    ExpectationFailed(res, "Expectation failed");
    expect(res.status).toHaveBeenCalledWith(417);
    expect(res.json).toHaveBeenCalledWith({
      statusCode: 417,
      message: "Expectation failed",
    });
  });

  test("IAmATeapot should return 418 status", () => {
    IAmATeapot(res, "I am a teapot");
    expect(res.status).toHaveBeenCalledWith(418);
    expect(res.json).toHaveBeenCalledWith({
      statusCode: 418,
      message: "I am a teapot",
    });
  });

  test("TooManyRequests should return 429 status", () => {
    TooManyRequests(res, "Too many requests");
    expect(res.status).toHaveBeenCalledWith(429);
    expect(res.json).toHaveBeenCalledWith({
      statusCode: 429,
      message: "Too many requests",
    });
  });

  test("ServiceUnavailable should return 503 status", () => {
    ServiceUnavailable(res, "Service unavailable");
    expect(res.status).toHaveBeenCalledWith(503);
    expect(res.json).toHaveBeenCalledWith({
      statusCode: 503,
      message: "Service unavailable",
    });
  });

  test("HttpVersionNotSupported should return 505 status", () => {
    HttpVersionNotSupported(res, "HTTP version not supported");
    expect(res.status).toHaveBeenCalledWith(505);
    expect(res.json).toHaveBeenCalledWith({
      statusCode: 505,
      message: "HTTP version not supported",
    });
  });

  test("ResetContent should return 205 status", () => {
    ResetContent(res, "Content reset");
    expect(res.status).toHaveBeenCalledWith(205);
    expect(res.json).toHaveBeenCalledWith({
      statusCode: 205,
      message: "Content reset",
    });
  });

  test("PartialContent should return 206 status", () => {
    PartialContent(res, "Partial content");
    expect(res.status).toHaveBeenCalledWith(206);
    expect(res.json).toHaveBeenCalledWith({
      statusCode: 206,
      message: "Partial content",
    });
  });

  test("NotImplemented should return 501 status", () => {
    NotImplemented(res, "Not implemented");
    expect(res.status).toHaveBeenCalledWith(501);
    expect(res.json).toHaveBeenCalledWith({
      statusCode: 501,
      message: "Not implemented",
    });
  });

  test("BadGateway should return 502 status", () => {
    BadGateway(res, "Bad gateway");
    expect(res.status).toHaveBeenCalledWith(502);
    expect(res.json).toHaveBeenCalledWith({
      statusCode: 502,
      message: "Bad gateway",
    });
  });

  test("Misdirected should return 421 status", () => {
    Misdirected(res, "Misdirected request");
    expect(res.status).toHaveBeenCalledWith(421);
    expect(res.json).toHaveBeenCalledWith({
      statusCode: 421,
      message: "Misdirected request",
    });
  });

  test("UnprocessableEntity should return 422 status", () => {
    UnprocessableEntity(res, "Unprocessable entity");
    expect(res.status).toHaveBeenCalledWith(422);
    expect(res.json).toHaveBeenCalledWith({
      statusCode: 422,
      message: "Unprocessable entity",
    });
  });

  test("FailedDependency should return 424 status", () => {
    FailedDependency(res, "Failed dependency");
    expect(res.status).toHaveBeenCalledWith(424);
    expect(res.json).toHaveBeenCalledWith({
      statusCode: 424,
      message: "Failed dependency",
    });
  });

  test("PreconditionRequired should return 428 status", () => {
    PreconditionRequired(res, "Precondition required");
    expect(res.status).toHaveBeenCalledWith(428);
    expect(res.json).toHaveBeenCalledWith({
      statusCode: 428,
      message: "Precondition required",
    });
  });

  test("RequestedRangeNotSatisfiable should return 416 status", () => {
    RequestedRangeNotSatisfiable(res, "Requested range not satisfiable");
    expect(res.status).toHaveBeenCalledWith(416);
    expect(res.json).toHaveBeenCalledWith({
      statusCode: 416,
      message: "Requested range not satisfiable",
    });
  });

  test("ProxyAuthenticationRequired should return 407 status", () => {
    ProxyAuthenticationRequired(res, "Proxy authentication required");
    expect(res.status).toHaveBeenCalledWith(407);
    expect(res.json).toHaveBeenCalledWith({
      statusCode: 407,
      message: "Proxy authentication required",
    });
  });

  test("Unauthorized should return 401 status", () => {
    Unauthorized(res, "Unauthorized access");
    expect(res.status).toHaveBeenCalledWith(401);
    expect(res.json).toHaveBeenCalledWith({
      statusCode: 401,
      message: "Unauthorized access",
    });
  });

  test("PaymentRequired should return 402 status", () => {
    PaymentRequired(res, "Payment required");
    expect(res.status).toHaveBeenCalledWith(402);
    expect(res.json).toHaveBeenCalledWith({
      statusCode: 402,
      message: "Payment required",
    });
  });

  test("Ambiguous should return 300 status", () => {
    Ambiguous(res, "Ambiguous request");
    expect(res.status).toHaveBeenCalledWith(300);
    expect(res.json).toHaveBeenCalledWith({
      statusCode: 300,
      message: "Ambiguous request",
    });
  });

  test("MovedPermanently should return 301 status", () => {
    MovedPermanently(res, "Resource moved permanently");
    expect(res.status).toHaveBeenCalledWith(301);
    expect(res.json).toHaveBeenCalledWith({
      statusCode: 301,
      message: "Resource moved permanently",
    });
  });

  test("Found should return 302 status", () => {
    Found(res, "Resource found");
    expect(res.status).toHaveBeenCalledWith(302);
    expect(res.json).toHaveBeenCalledWith({
      statusCode: 302,
      message: "Resource found",
    });
  });

  test("SeeOther should return 303 status", () => {
    SeeOther(res, "See other resource");
    expect(res.status).toHaveBeenCalledWith(303);
    expect(res.json).toHaveBeenCalledWith({
      statusCode: 303,
      message: "See other resource",
    });
  });

  test("NotModified should return 304 status", () => {
    NotModified(res, "Resource not modified");
    expect(res.status).toHaveBeenCalledWith(304);
    expect(res.json).toHaveBeenCalledWith({
      statusCode: 304,
      message: "Resource not modified",
    });
  });

  test("TemporaryRedirect should return 307 status", () => {
    TemporaryRedirect(res, "Temporary redirect");
    expect(res.status).toHaveBeenCalledWith(307);
    expect(res.json).toHaveBeenCalledWith({
      statusCode: 307,
      message: "Temporary redirect",
    });
  });

  test("PermanentRedirect should return 308 status", () => {
    PermanentRedirect(res, "Permanent redirect");
    expect(res.status).toHaveBeenCalledWith(308);
    expect(res.json).toHaveBeenCalledWith({
      statusCode: 308,
      message: "Permanent redirect",
    });
  });

  test("Ok should return 200 status", () => {
    Ok(res, "Operation successful");
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({
      statusCode: 200,
      message: "Operation successful",
    });
  });

  test("Created should return 201 status", () => {
    Created(res, "Resource created");
    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith({
      statusCode: 201,
      message: "Resource created",
    });
  });

  test("Accepted should return 202 status", () => {
    Accepted(res, "Request accepted");
    expect(res.status).toHaveBeenCalledWith(202);
    expect(res.json).toHaveBeenCalledWith({
      statusCode: 202,
      message: "Request accepted",
    });
  });

  test("NonAuthoritativeInformation should return 203 status", () => {
    NonAuthoritativeInformation(res, "Non-authoritative information");
    expect(res.status).toHaveBeenCalledWith(203);
    expect(res.json).toHaveBeenCalledWith({
      statusCode: 203,
      message: "Non-authoritative information",
    });
  });
});

describe("sendResponse", () => {
  test("sends response with status code and default message", () => {
    sendResponse(HttpStatus.OK, res);
    expect(res.status).toHaveBeenCalledWith(HttpStatus.OK);
    expect(res.json).toHaveBeenCalledWith({
      statusCode: HttpStatus.OK,
      message: "OK",
    });
  });

  test("sends response with custom message", () => {
    const customMessage = "Custom OK message";
    sendResponse(HttpStatus.OK, res, customMessage);
    expect(res.status).toHaveBeenCalledWith(HttpStatus.OK);
    expect(res.json).toHaveBeenCalledWith({
      statusCode: HttpStatus.OK,
      message: customMessage,
    });
  });

  test("sends response with additional data", () => {
    const data = { key: "value" };
    sendResponse(HttpStatus.OK, res, null, data);
    expect(res.status).toHaveBeenCalledWith(HttpStatus.OK);
    expect(res.json).toHaveBeenCalledWith({
      statusCode: HttpStatus.OK,
      message: "OK",
      key: "value",
    });
  });

  test("sends response without message when defaultMessage is false", () => {
    sendResponse(HttpStatus.OK, res, null, {}, false);
    expect(res.status).toHaveBeenCalledWith(HttpStatus.OK);
    expect(res.json).toHaveBeenCalledWith({
      statusCode: HttpStatus.OK,
    });
  });

  test("sends response with custom message when defaultMessage is false", () => {
    const customMessage = "Custom message";
    sendResponse(HttpStatus.OK, res, customMessage, {}, false);

    console.log("Res", res);
    expect(res.status).toHaveBeenCalledWith(HttpStatus.OK);
    expect(res.json).toHaveBeenCalledWith({
      statusCode: HttpStatus.OK,
      message: customMessage,
    });
  });

  test("sends response with custom message, data, and defaultMessage true", () => {
    const customMessage = "Custom OK message";
    const data = { key: "value" };
    sendResponse(HttpStatus.OK, res, customMessage, data, true);
    expect(res.status).toHaveBeenCalledWith(HttpStatus.OK);
    expect(res.json).toHaveBeenCalledWith({
      statusCode: HttpStatus.OK,
      message: customMessage,
      key: "value",
    });
  });
});
