/**
 * Checks if the value is either null
 * or undefined.
 * @param val
 * @return true if it is null or undefined,
 * else return false.
 */
 export function isEmpty(val: any): boolean {
  if (val === null || val === undefined || val === "" || val === Number.NaN)
    return true;
  else return false;
}