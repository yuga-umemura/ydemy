import { Effect, pipe, Schema } from "effect";
import { TransformError } from "../error";
import { decode, ParseError } from "effect/ParseResult";

export function transform<A, I, R>(schema: Schema.Schema<A, I, R>, input: I) {
  return pipe(
    decode(schema)(input),

    Effect.mapError(
      (issue) => new TransformError({ cause: new ParseError({ issue }) }),
    ),
  );
}
