import { Epoch } from "../src/epoch";
import { datePathefier, normalize, dateIndexer } from "../src/indexable";

test("Jest test", () => {
  expect(true).toBe(true);
});

test("Milliseconds epoch test.", () => {
  expect(Epoch.oneMinInMilEpoch() === 60000).toBe(true);
  expect(Epoch.oneDay() === 86400000).toBe(true);

  const date = new Date(1625109749836).getTime();
  expect(datePathefier(date) === "2021-7-1").toBe(true);
});

test("Normalize milliseconds test.", () => {
  const test = 1625109749836;
  const ans = 1625109700000;
  expect(normalize(test.toString()) === ans.toString()).toBe(true);
});

test("Date indexer test", () => {
  const test = 1625109749836;
  const ans = [
    1625109700000, //
    1625196100000,
    1625282500000,
    1625368900000,
    1625455300000,
    1625541700000,
  ];
  const ar1 = dateIndexer(test, 5);
  console.log(ar1);

  let res = true;
  for (const each of ar1) {
    if (!ans.includes(each)) {
      res = false;
      break;
    }
  }
  expect(res).toBe(true);
});
