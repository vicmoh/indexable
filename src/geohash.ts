import * as _geohash from "ngeohash";
import { isEmpty } from "../packages/ts-util/src/is-empty";

const debug = false;

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
   * useLowPrecision() will make sure that p7, p8 and p9 will be null.
   * These should be null when saving to the database.
   */
  p7: string | null;
  p8?: string | null;
  p9?: string | null;
}

/**
 * This is used for indexing
 * the geo neighbours in one area
 * for querying purposes.
 *
 * Each neighbour precision consist
 * of a list of hashes including
 * the bounding box of the coordinate.
 */
export interface GeoNeighbours {
  np1: Array<string>;
  np2: Array<string>;
  np3: Array<string>;
  np4: Array<string>;
  np5: Array<string>;
  np6: Array<string>;

  /*
   * 7, 8, and 9 precision will be null.
   * This is because we don't want to give
   * user the pinpoint exactly where they are
   * for privacy and security reason.
   *
   * secureGIndex will make sure that p7, p8 and p9 will be null.
   * These should be null when saving to the database.
   */
  np7: Array<string> | null;
  np8?: Array<string> | null;
  np9?: Array<string> | null;
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
  neighbors(hash: string): Array<String> {
    if (isEmpty(hash)) return [];
    return _geohash.neighbors(hash);
  }

  hashIndexNeighbors(
    lat: number,
    lon: number,
    options?: { showHighPrecision: boolean }
  ): GeoNeighbours {
    const gn: any = {};
    const hash = this.hashIndex(lat, lon, options) as any;
    for (let x = 1; x <= 9; x++) {
      const curHash = hash[`p${x}`] as string;
      const neighbours = this.neighbors(curHash);
      neighbours.push(curHash);
      gn["np" + x.toString()] = neighbours;
    }
    return gn as GeoNeighbours;
  }

  /**
   * Create a hash index precision.
   * @throws string error message if lat
   * or lon parameter is not defined.
   * @return GeoPrecision {
   *  <precision number> : <geohash string>
   *  .
   *  .
   *  .
   * }
   */
  hashIndex(
    lat: number,
    lon: number,
    options?: {
      showHighPrecision: boolean;
    }
  ): GeoPrecision {
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
}
