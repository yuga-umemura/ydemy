import { Cause, Data } from "effect";
import { ParseError } from "effect/ParseResult";

export type BaseArgType = {
  cause?: Error | Cause.YieldableError | unknown | ParseError;

  message?: string;
};

export class InternalError extends Data.TaggedError(
  "InternalError",
)<BaseArgType> {}

export class TransformError extends Data.TaggedError("TransformError")<
  BaseArgType & { cause: ParseError }
> {
  constructor(
    args: BaseArgType & { cause: ParseError },
    public status = "invalid-transformation" as const,
  ) {
    super(args);
  }
}
