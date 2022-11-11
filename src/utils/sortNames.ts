export default function printNames(hoho: any[]): string {
  const finArr = [];
  for (const item of hoho) {
    if (item.sex === "f") {
      finArr.push(item.name.toUpperCase());
    } else {
      finArr.push(item.name);
    }
  }
  return finArr.sort().join(", ");
}
