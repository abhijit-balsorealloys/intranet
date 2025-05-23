import { Lazy, pipe } from "fp-ts/lib/function";
import { getOrElse, Option } from "fp-ts/lib/Option";

export const unWrapOption = <T>(option: Option<T>, onNone: Lazy<T>) => {
  return pipe(option, getOrElse(onNone));
};
