// Parameters Type for the two tryCatch functions below - Burns
type TryCatchParameters<R, EF> = {
  fn: (...args: unknown[]) => R;
  errorFn: EF;
};

export const noOpFn = (): void => {};
export type NoOpFn = typeof noOpFn;

/**
 * Wraps a synchronous function that can possibly
 * throw an error in a try/catch.
 *
 * If the function does throw an error, allow
 * the caller to optionally run functionality
 * around the error and log it out to the console
 *
 * @param fn - The function needing to be run in a try/catch
 * @param errorFn - A callback function to allow for extra functionality to happen with the error
 */
export const tryCatch = <R, EF extends (error: unknown) => unknown>({
  fn,
  errorFn,
}: TryCatchParameters<R, EF>): R | ReturnType<EF> => {
  try {
    return fn();
  } catch (error: unknown) {
    // Because we are restricting the type of the error function
    // to a function type, we can confidently type assert that the
    // return of this function is the return type of the passed
    // in error function. More info here on type asserting for
    // `unknown` types: https://devblogs.microsoft.com/typescript/announcing-typescript-3-0-rc-2/#the-unknown-type
    // - Burns
    return errorFn(error) as ReturnType<EF>;
  }
};

/**
 * Wraps an asynchronous function that can possibly
 * throw an error in a try/catch.
 *
 * If the function does throw an error, allow
 * the caller to optionally run functionality
 * around the error and log the error to the console
 *
 * @param fn - The function needing to be run in a try/catch
 * @param errorFn - A callback function to allow for extra functionality to happen with the error
 * @returns
 */
export const tryCatchAsync = async <R, EF extends (error: unknown) => unknown>({
  fn,
  errorFn,
}: TryCatchParameters<Promise<R>, EF>): Promise<R | ReturnType<EF>> => {
  try {
    return await fn();
  } catch (error: unknown) {
    // Because we are restricting the type of the error function
    // to a function type, we can confidently type assert that the
    // return of this function is the return type of the passed
    // in error function. More info here on type asserting for
    // `unknown` types: https://devblogs.microsoft.com/typescript/announcing-typescript-3-0-rc-2/#the-unknown-type
    // - Burns
    return errorFn(error) as ReturnType<EF>;
  }
};
