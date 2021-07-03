import { Log } from "../packages/ts-util/src/log";
import { Geohash } from "../src/geohash";

const log = new Log({ disable: true });

test("Testing count from 1 to 9", () => {
  let count = 0;
  for (let x = 1; x <= 9; x++) {
    count = x;
    log.print("Test1", count);
  }
  expect(count === 9).toBe(true);
});

test("hashIndexNeighbours() should create the correct indexes.", () => {
  const t1 = new Geohash();
  console.log(t1.hashIndexNeighbours(43.5448, -80.2482));
});
