import { OneBaby } from "../babyNamesData";

function filterData(data: OneBaby[], query: string, sex: string): OneBaby[] {
  if (sex === "f"){
    data = data.filter((dat) => dat.sex === "f")
  }
  if (sex === "m"){
    data = data.filter((dat) => dat.sex === "m")
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
