import { GetRoleCredentialsCommandInput, GetRoleCredentialsCommandOutput } from "../commands/GetRoleCredentialsCommand";
import { ListAccountRolesCommandInput, ListAccountRolesCommandOutput } from "../commands/ListAccountRolesCommand";
import { ListAccountsCommandInput, ListAccountsCommandOutput } from "../commands/ListAccountsCommand";
import { LogoutCommandInput, LogoutCommandOutput } from "../commands/LogoutCommand";
import {
  AccountInfo,
  InvalidRequestException,
  ResourceNotFoundException,
  RoleCredentials,
  RoleInfo,
  TooManyRequestsException,
  UnauthorizedException,
} from "../models/index";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  SmithyException as __SmithyException,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  MetadataBearer as __MetadataBearer,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export const serializeAws_restJson1GetRoleCredentialsCommand = async (
  input: GetRoleCredentialsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "",
    ...(isSerializableHeaderValue(input.accessToken) && { "x-amz-sso_bearer_token": input.accessToken! }),
  };
  let resolvedPath = "/federation/credentials";
  const query: any = {
    ...(input.accountId !== undefined && { account_id: input.accountId }),
    ...(input.roleName !== undefined && { role_name: input.roleName }),
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1ListAccountRolesCommand = async (
  input: ListAccountRolesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "",
    ...(isSerializableHeaderValue(input.accessToken) && { "x-amz-sso_bearer_token": input.accessToken! }),
  };
  let resolvedPath = "/assignment/roles";
  const query: any = {
    ...(input.nextToken !== undefined && { next_token: input.nextToken }),
    ...(input.accountId !== undefined && { account_id: input.accountId }),
    ...(input.maxResults !== undefined && { max_result: input.maxResults.toString() }),
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1ListAccountsCommand = async (
  input: ListAccountsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "",
    ...(isSerializableHeaderValue(input.accessToken) && { "x-amz-sso_bearer_token": input.accessToken! }),
  };
  let resolvedPath = "/assignment/accounts";
  const query: any = {
    ...(input.maxResults !== undefined && { max_result: input.maxResults.toString() }),
    ...(input.nextToken !== undefined && { next_token: input.nextToken }),
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1LogoutCommand = async (
  input: LogoutCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "",
    ...(isSerializableHeaderValue(input.accessToken) && { "x-amz-sso_bearer_token": input.accessToken! }),
  };
  let resolvedPath = "/logout";
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const deserializeAws_restJson1GetRoleCredentialsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRoleCredentialsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1GetRoleCredentialsCommandError(output, context);
  }
  const contents: GetRoleCredentialsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetRoleCredentialsResponse",
    roleCredentials: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.roleCredentials !== undefined && data.roleCredentials !== null) {
    contents.roleCredentials = deserializeAws_restJson1RoleCredentials(data.roleCredentials, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetRoleCredentialsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRoleCredentialsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidRequestException":
    case "com.amazonaws.sso#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.sso#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.sso#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.sso#UnauthorizedException":
      response = {
        ...(await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1ListAccountRolesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAccountRolesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1ListAccountRolesCommandError(output, context);
  }
  const contents: ListAccountRolesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListAccountRolesResponse",
    nextToken: undefined,
    roleList: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = data.nextToken;
  }
  if (data.roleList !== undefined && data.roleList !== null) {
    contents.roleList = deserializeAws_restJson1RoleListType(data.roleList, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListAccountRolesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAccountRolesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidRequestException":
    case "com.amazonaws.sso#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.sso#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.sso#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.sso#UnauthorizedException":
      response = {
        ...(await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1ListAccountsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAccountsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1ListAccountsCommandError(output, context);
  }
  const contents: ListAccountsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListAccountsResponse",
    accountList: undefined,
    nextToken: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.accountList !== undefined && data.accountList !== null) {
    contents.accountList = deserializeAws_restJson1AccountListType(data.accountList, context);
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = data.nextToken;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListAccountsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAccountsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidRequestException":
    case "com.amazonaws.sso#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.sso#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.sso#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.sso#UnauthorizedException":
      response = {
        ...(await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1LogoutCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<LogoutCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1LogoutCommandError(output, context);
  }
  const contents: LogoutCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1LogoutCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<LogoutCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidRequestException":
    case "com.amazonaws.sso#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.sso#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.sso#UnauthorizedException":
      response = {
        ...(await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

const deserializeAws_restJson1InvalidRequestExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidRequestException> => {
  const contents: InvalidRequestException = {
    name: "InvalidRequestException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1ResourceNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const contents: ResourceNotFoundException = {
    name: "ResourceNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1TooManyRequestsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyRequestsException> => {
  const contents: TooManyRequestsException = {
    name: "TooManyRequestsException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1UnauthorizedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UnauthorizedException> => {
  const contents: UnauthorizedException = {
    name: "UnauthorizedException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1AccountInfo = (output: any, context: __SerdeContext): AccountInfo => {
  return {
    __type: "AccountInfo",
    accountId: output.accountId !== undefined && output.accountId !== null ? output.accountId : undefined,
    accountName: output.accountName !== undefined && output.accountName !== null ? output.accountName : undefined,
    emailAddress: output.emailAddress !== undefined && output.emailAddress !== null ? output.emailAddress : undefined,
  } as any;
};

const deserializeAws_restJson1AccountListType = (output: any, context: __SerdeContext): AccountInfo[] => {
  return (output || []).map((entry: any) => deserializeAws_restJson1AccountInfo(entry, context));
};

const deserializeAws_restJson1RoleCredentials = (output: any, context: __SerdeContext): RoleCredentials => {
  return {
    __type: "RoleCredentials",
    accessKeyId: output.accessKeyId !== undefined && output.accessKeyId !== null ? output.accessKeyId : undefined,
    expiration: output.expiration !== undefined && output.expiration !== null ? output.expiration : undefined,
    secretAccessKey:
      output.secretAccessKey !== undefined && output.secretAccessKey !== null ? output.secretAccessKey : undefined,
    sessionToken: output.sessionToken !== undefined && output.sessionToken !== null ? output.sessionToken : undefined,
  } as any;
};

const deserializeAws_restJson1RoleInfo = (output: any, context: __SerdeContext): RoleInfo => {
  return {
    __type: "RoleInfo",
    accountId: output.accountId !== undefined && output.accountId !== null ? output.accountId : undefined,
    roleName: output.roleName !== undefined && output.roleName !== null ? output.roleName : undefined,
  } as any;
};

const deserializeAws_restJson1RoleListType = (output: any, context: __SerdeContext): RoleInfo[] => {
  return (output || []).map((entry: any) => deserializeAws_restJson1RoleInfo(entry, context));
};

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  httpHeaders: output.headers,
  requestId: output.headers["x-amzn-requestid"],
});

// Collect low-level response body stream to Uint8Array.
const collectBody = (streamBody: any = new Uint8Array(), context: __SerdeContext): Promise<Uint8Array> => {
  if (streamBody instanceof Uint8Array) {
    return Promise.resolve(streamBody);
  }
  return context.streamCollector(streamBody) || Promise.resolve(new Uint8Array());
};

// Encode Uint8Array data into string with utf-8.
const collectBodyString = (streamBody: any, context: __SerdeContext): Promise<string> =>
  collectBody(streamBody, context).then((body) => context.utf8Encoder(body));

const isSerializableHeaderValue = (value: any): boolean =>
  value !== undefined &&
  value !== "" &&
  (!Object.getOwnPropertyNames(value).includes("length") || value.length != 0) &&
  (!Object.getOwnPropertyNames(value).includes("size") || value.size != 0);

const parseBody = (streamBody: any, context: __SerdeContext): any =>
  collectBodyString(streamBody, context).then((encoded) => {
    if (encoded.length) {
      return JSON.parse(encoded);
    }
    return {};
  });

/**
 * Load an error code for the aws.rest-json-1.1 protocol.
 */
const loadRestJsonErrorCode = (output: __HttpResponse, data: any): string => {
  const findKey = (object: any, key: string) => Object.keys(object).find((k) => k.toLowerCase() === key.toLowerCase());

  const sanitizeErrorCode = (rawValue: string): string => {
    let cleanValue = rawValue;
    if (cleanValue.indexOf(":") >= 0) {
      cleanValue = cleanValue.split(":")[0];
    }
    if (cleanValue.indexOf("#") >= 0) {
      cleanValue = cleanValue.split("#")[1];
    }
    return cleanValue;
  };

  const headerKey = findKey(output.headers, "x-amzn-errortype");
  if (headerKey !== undefined) {
    return sanitizeErrorCode(output.headers[headerKey]);
  }

  if (data.code !== undefined) {
    return sanitizeErrorCode(data.code);
  }

  if (data["__type"] !== undefined) {
    return sanitizeErrorCode(data["__type"]);
  }

  return "";
};
