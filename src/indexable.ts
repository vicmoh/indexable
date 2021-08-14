import { dateIndexer, IndexableDate, datePathefier } from "./date-indexer";
import { Geohash } from "./geohash";

/**
 * Instance for indexing content for
 * database queries.
 */
export class Indexable {
  /**
   * Get geohash instances containing
   * indexing functions for geo.
   */
  geo(): Geohash {
    return new Geohash();
  }

  /**
   * Create a time based index up to 3 months.
   * @param mil time in millisecond epoch.
   * @param DateIndex object that can be used
   * for indexing.
   */
  dates(mil: number): IndexableDate {
    const cur = mil;
    const index: IndexableDate = {
      currentDate: datePathefier(cur),
      day1: dateIndexer(cur, 1),
      day2: dateIndexer(cur, 2),
      day3: dateIndexer(cur, 3),
      day5: dateIndexer(cur, 5),
      week1: dateIndexer(cur, 7),
      week2: dateIndexer(cur, 7 * 2),
      month1: dateIndexer(cur, 30),
      month3: dateIndexer(cur, 30 * 3),
    };
    return index;
  }
}
