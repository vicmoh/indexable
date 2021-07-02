import * as _geohash from "ngeohash";
import { isEmpty } from "./is-empty";

/**
 * The geo hash index model.
 * This is used for the indexing
 * so that we can query geo data from
 * this index.
 *
 * p1 means "Precision 1".
 * The higher the precision
 * The higher the geohash string.
 *
 * For example p5 hash string
 * would give something like "dpz83"
 */
export interface GeoPrecision {
  p1: string;
  p2: string;
  p3: string;
  p4: string;
  p5: string;
  p6: string;

  /*
   * 7, 8, and 9 precision will be null.
   * This is because we don't want to give
   * user the pinpoint exactly where they are
   * for privacy and security reason.
   *
   * secureGIndex will make sure that p7, p8 and p9 will be null.
   * These should be null when saving to the database.
   */
  p7: string | null;
  p8?: string | null;
  p9?: string | null;
}

/**
 * This makes sure that it will not be
 * high precision index.
 * @param index
 * @returns
 */
export function useLowPrecision(index: GeoPrecision) {
  index.p7 = null;
  index.p8 = null;
  index.p9 = null;
  return index;
}

/**
 * Geo hash.
 */
export class Geohash {
  /**
   * Get hash neighbour excluding the hash provided.
   * @return Array<String> of the list of hash neighbours.
   * The list starts of the top neighbours of the box
   * and runs clockwise until top left box.
   */
  public neighbors(hash: string): Array<String> {
    return _geohash.neighbors(hash);
  }

  /**
   * Create a hash index precision.
   * @throws string error message if lat
   * or lon parameter is not defined.
   * @return GIndex {
   *  <precision number> : <geohash string>
   *  .
   *  .
   *  .
   * }
   */
  public hashIndex(
    lat: number,
    lon: number,
    options?: {
      showHighPrecision: boolean;
    }
  ): GeoPrecision {
    const debug = false;
    const showHighPrecision = options?.showHighPrecision ?? false;

    if (isEmpty(lat) || isEmpty(lon))
      throw Error(
        "Latitude and longitude parameter must not be null when Geohash is being indexed."
      );

    const index: any = {};
    const hash = _geohash.encode(lat, lon);
    for (let x = 1; x < hash.length + 1; x++) {
      const cur = hash.substring(0, x);
      if (debug) {
        console.log(x);
        console.log(hash);
        console.log(cur);
      }
      index["p" + x.toString()] = cur;
    }

    if (showHighPrecision) return index as GeoPrecision;
    else return useLowPrecision(index as GeoPrecision);
  }

  test() {
    console.log(this.hashIndex(43.6532, -79.3832));
    console.log(this.hashIndex(43.6532, -79.3832, { showHighPrecision: true }));
  }
}
