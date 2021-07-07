import { Epoch } from "./epoch";

/**
 * Interface for possible index.
 */
export interface IndexableDate {
  currentDate: string;
  day1: Array<string>;
  day2: Array<string>;
  day3: Array<string>;
  day5: Array<string>;
  week1: Array<string>;
  week2: Array<string>;
  month1: Array<string>;
  month3: Array<string>;
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
export function dateIndexer(mil: number, numDays: number): Array<string> {
  const dates: Array<string> = [];
  dates.push(datePathefier(mil));

  let posDate = mil;
  for (let x = 0; x < numDays; x++) {
    posDate = posDate + Epoch.oneDay();
    dates.push(datePathefier(posDate));
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
export function repCharAt(str: string, index: number, rep: string) {
  return str.substr(0, index) + rep + str.substr(index + rep.length);
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
