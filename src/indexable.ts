//import { Epoch } from "./epoch";
//import { DateIndex } from "./models/date-index";
import "./string.extension";

export class Indexable {
  /**
   * @param mil time in millisecond epoch.
   * @param DateIndex object that can be used
   * for indexing.
   */
  //  time(mil: number): DateIndex {
  //    const curDate: number = Date.now();
  //  }
  //  /**
  //   * @param mil the time to be indexed.
  //   * @param days range that will indexed.
  //   */
  //  private dayIndexer(mil: number, days: number) {
  //    const cur = mil;
  //  }
}

/**
 * Replace the character of a string.
 * @param str string of a certain
 * character to be replaced.
 * @param index of the string where the
 * character will be replaced.
 * @param rep is the new character string
 * the is placed based on the index.
 * @return string where character has been changed.
 */
function repCharAt(str: string, index: number, rep: string) {
  return str.substr(0, index) + rep + str.substr(index + rep.length);
}

/**
 * Normalize the milliseconds.
 * For Example turning.
 *
 * 1 day is 86400000. There are 5 zeros
 * at the end.
 * @param mil string in milliseconds format.
 */
export function normalize(mil: string) {
  let temp = mil;
  let count = 0;
  for (let x = temp.length - 1; x > 0; x--) {
    temp = repCharAt(temp, x, "0");
    count++;
    if (count >= 5) break;
  }
  return temp;
}

/**
 * @param mil the time to be indexed.
 * @param days range that will indexed.
 */
//function dayIndexer(mil: number, days: number): Array<number> {
//  const cur = mil;
//}

/**
 * @param mil in millisecond epoch.
 */
export function datePathefier(mil: number): string {
  const date = new Date(mil);
  const year = date.getUTCFullYear();
  const month = date.getUTCMonth();
  const day = date.getUTCDate();

  return `${year}-${month + 1}-${day}`;
}
