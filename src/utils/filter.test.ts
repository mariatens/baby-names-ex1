import { OneBaby } from "../babyNamesData";
import filter from "./filter";

const babyExample: OneBaby[] = [{ id: 86, name: "Michal", sex: "m" }];

test("", () => {
  expect(filter(babyExample, "Michal")).toStrictEqual([
    {
      id: 86,
      name: "Michal",
      sex: "m",
    },
  ]);
});
