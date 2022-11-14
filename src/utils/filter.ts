import { OneBaby } from "../babyNamesData";

function filterData(data: OneBaby[], query: string): OneBaby[] {
  if (!query) {
    return data;
  }
  return data.filter((dat) => {
    const datName = dat.name.toLowerCase();
    return datName.includes(query.toLowerCase());
  });
}

export default filterData;
