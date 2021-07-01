import { Epoch } from "./epoch";
//import { DateIndex } from "./models/date-index";

export class Indexable {
  /**
   * @param mil time in millisecond epoch.
   * @param DateIndex object that can be used
   * for indexing.
   */
  //  time(mil: number): DateIndex {
  //    const curDate: number = Date.now();
  //  }
}

/**
 * Create a single index array
 * of possible dates for the indexing.
 * For example if the [mil] date
 * is 20/1/5 (y/m/d) and [numDays]
 * is set as 3 days.
 *
 * The index will be an array dates
 * ranging from 20/1/2 to 20/1/8.
 *
 * @param mil is the date to be index
 * in milliseconds epoch.
 * @param numDays between the date.
 * @return Array of the range dates indexed.
 */
export function dateIndexer(mil: number, numDays: number): Array<number> {
  const dates: Array<number> = [];
  dates.push(parseInt(normalize(mil.toString())));

  let posDate = mil;
  for (let x = 0; x < numDays; x++) {
    posDate = posDate + Epoch.oneDay();
    dates.push(parseInt(normalize(posDate.toString())));
  }

  return dates;
}

/**
 * Replace the character of a string
 * with another character.
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
 * Normalize the milliseconds to day.
 * For Example turning.
 *
 * 1 day is 86400000 in millisecond epoch.
 *
 * It will set 5 zeros at the end of milliseconds.
 * To set the date.
 *
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
 * @param mil in millisecond epoch.
 */
export function datePathefier(mil: number): string {
  const date = new Date(mil);
  const year = date.getUTCFullYear();
  const month = date.getUTCMonth();
  const day = date.getUTCDate();

  return `${year}-${month + 1}-${day}`;
}
