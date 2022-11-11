import { OneBaby } from "../babyNamesData";

export const filterData = (data: OneBaby[], query: string) => {
  if (!query) {
    return data;
  }
  return data.filter((post) => {
    const postName = post.name.toLowerCase();
    return postName.includes(query);
  });
};
