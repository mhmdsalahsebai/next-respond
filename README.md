# next-respond

Simplify your NextJS API responses with clean, readable, and standardized HTTP status codes and messages.

## Why Use This Package?

When building NextJS APIs, handling HTTP responses can become repetitive and error-prone. This package provides a set of easy-to-use functions for sending HTTP status codes and responses, making your code cleaner, more readable, and less prone to errors.

### Instead of this:

```javascript
try {
  return res.status(200).json({ result });
} catch (err) {
  return res.status(500).json({ message: "Internal Server Error" });
}
```

### You can do this:

```javascript
try {
  return Ok(res, null, { result });
} catch (err) {
  return InternalServerError(res);
}
```

## Features

- 🚀 Easy-to-use functions for all standard HTTP status codes
- 📚 Consistent error messages based on HTTP standards
- 🛠 Customizable messages and data payloads
- 🧩 Seamless integration with NextJS API routes
- 🔒 Type-safe with full TypeScript support

## Installation

```bash
npm install next-respond
```

or

```bash
yarn add next-respond
```

## Usage

Import the functions you need in your NextJS API route:

```javascript
import { Ok, BadRequest, InternalServerError } from "next-respond";

export default function handler(req, res) {
  try {
    // Your API logic here
    return Ok(res, null, { data: result });
  } catch (error) {
    if (error instanceof ValidationError) {
      return BadRequest(res);
    } else {
      return InternalServerError(res);
    }
  }
}
```

## API Reference

### General Structure

All functions follow this pattern:

```javascript
FunctionName(res, (message = null), (data = {}), (defaultMessage = true));
```

- `res`: The NextJS response object
- `message`: (Optional) A custom message to override the default
- `data`: (Optional) Additional data to include in the response
- `defaultMessage`: (Optional) A boolean that indicates whether to include the default status text in the response. Defaults to true, meaning the status text will always be included

### Available Functions

- Information responses: `Continue`, `SwitchingProtocols`, `Processing`, `EarlyHints`
- Successful responses: `Ok`, `Created`, `Accepted`, `NonAuthoritativeInformation`, `NoContent`, `ResetContent`, `PartialContent`
- Redirection messages: `Ambiguous`, `MovedPermanently`, `Found`, `SeeOther`, `NotModified`, `TemporaryRedirect`, `PermanentRedirect`
- Client error responses: `BadRequest`, `Unauthorized`, `PaymentRequired`, `Forbidden`, `NotFound`, `MethodNotAllowed`, `NotAcceptable`, `ProxyAuthenticationRequired`, `RequestTimeout`, `Conflict`, `Gone`, `LengthRequired`, `PreconditionFailed`, `PayloadTooLarge`, `UriTooLong`, `UnsupportedMediaType`, `RequestedRangeNotSatisfiable`, `ExpectationFailed`, `IAmATeapot`, `Misdirected`, `UnprocessableEntity`, `FailedDependency`, `PreconditionRequired`, `TooManyRequests`
- Server error responses: `InternalServerError`, `NotImplemented`, `BadGateway`, `ServiceUnavailable`, `GatewayTimeout`, `HttpVersionNotSupported`

### Examples

Here are some common usage examples and their corresponding outputs:

1. BadRequest Response

```javascript
BadRequest(res);
```

Output:

```json
{
  "statusCode": 400,
  "message": "Bad Request"
}
```

2. NotFound Response

```javascript
NotFound(res);
```

Output:

```json
{
  "statusCode": 404,
  "message": "Not Found"
}
```

3. InternalServerError Response

```javascript
InternalServerError(res);
```

Output:

```json
{
  "statusCode": 500,
  "message": "Internal Server Error"
}
```

## Using HttpStatus and HttpStatusMessages

You can also import HttpStatus and HttpStatusMessages to use them directly when building custom responses or performing other status-related tasks.

```javascript
import { HttpStatus, HttpStatusMessages } from "next-respond";

export default function handler(req, res) {
  if (someCondition) {
    res
      .status(HttpStatus.OK)
      .json({ message: HttpStatusMessages[HttpStatus.OK] });
  } else {
    res
      .status(HttpStatus.BAD_REQUEST)
      .json({ message: HttpStatusMessages[HttpStatus.BAD_REQUEST] });
  }
}
```

## Contributing

We welcome contributions!

## License

This project is licensed under the MIT License.
