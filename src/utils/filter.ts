import { OneBaby } from "../babyNamesData";
import { ActiveIndex } from "../components/SexFilter";

function filterData(data: OneBaby[], query?: string, sex?: ActiveIndex): OneBaby[] {
  if (sex === "f") {
    data = data.filter((dat) => dat.sex === "f");
  }
  if (sex === "m") {
    data = data.filter((dat) => dat.sex === "m");
  }
  if (!query) {
    return data;
  }
  return data.filter((dat) => {
    const datName = dat.name.toLowerCase();
    return datName.includes(query.toLowerCase());
  });
}

export default filterData;
