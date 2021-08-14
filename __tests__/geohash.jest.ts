import { Log } from "../packages/ts-util/src/log";
import { Geohash } from "../src/geohash";

const log = new Log({ disable: true });

describe("Testing geohash.", () => {
  test("Testing count from 1 to 9", () => {
    let count = 0;
    for (let x = 1; x <= 9; x++) {
      count = x;
      log.print("Test1", count);
    }
    expect(count === 9).toBe(true);
  });

  test("hashIndexNeighbours() should create the correct indexes.", () => {
    const res: any = {
      np1: ["f", "g", "e", "7", "6", "3", "9", "c", "d"],
      np2: ["f0", "f2", "dr", "dq", "dn", "9y", "9z", "cb", "dp"],
      np3: ["dpy", "dpz", "dpx", "dpr", "dpq", "dpm", "dpt", "dpv", "dpw"],
      np4: [
        "dpyb",
        "dpz0",
        "dpxp",
        "dpxn",
        "dpwy",
        "dpww",
        "dpwx",
        "dpy8",
        "dpwz",
      ],
      np5: [
        "dpwzv",
        "dpwzy",
        "dpwzw",
        "dpwzq",
        "dpwzm",
        "dpwzk",
        "dpwzs",
        "dpwzu",
        "dpwzt",
      ],
      np6: [
        "dpwzvb",
        "dpwzy0",
        "dpwzwp",
        "dpwzwn",
        "dpwzty",
        "dpwztw",
        "dpwztx",
        "dpwzv8",
        "dpwztz",
      ],
      np7: [null],
      np8: [null],
      np9: [null],
    };

    const t1 = new Geohash();
    const hashes = t1.hashIndexNeighbors(43.5448, -80.2482);
    for (let x = 0; x < Object.keys(hashes).length; x++) {
      expect((hashes as any)["np" + x.toString()]).toEqual(
        res["np" + x.toString()]
      );
    }
  });
});
