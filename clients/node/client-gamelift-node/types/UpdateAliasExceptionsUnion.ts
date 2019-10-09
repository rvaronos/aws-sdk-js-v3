import { UnauthorizedException } from "./UnauthorizedException";
import { InvalidRequestException } from "./InvalidRequestException";
import { NotFoundException } from "./NotFoundException";
import { InternalServiceException } from "./InternalServiceException";
export type UpdateAliasExceptionsUnion =
  | UnauthorizedException
  | InvalidRequestException
  | NotFoundException
  | InternalServiceException;