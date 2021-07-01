import { Epoch } from "../src/epoch";
import { datePathefier, normalize } from "../src/indexable";

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

  const date = new Date(test).getTime();
  console.log(date);
  console.log(normalize(date.toString()));

  expect(normalize(test.toString()) === ans.toString()).toBe(true);
});
