import { dateIndexer, datePathefier, normalize } from "../src/date-indexer";
import { Indexable } from "../src/indexable";

test("Jest test", () => {
  expect(true).toBe(true);
});

test("datePathefier() should create the correct format.", () => {
  const date = new Date(1625109749836).getTime();
  expect(datePathefier(date) === "2021-7-1").toBe(true);
});

test("normalise() should normalize the time to the current day.", () => {
  const test = 1625109749836;
  const ans = 1625109700000;
  expect(normalize(test.toString()) === ans.toString()).toBe(true);
});

test("dateIndexer() should create the correct dates of the index list", () => {
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

test("Log output test.", () => {
  console.log(new Indexable().dates(Date.now()));
});
