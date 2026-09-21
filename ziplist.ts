function zipList(list1: unknown[], list2: unknown[]): unknown[] {
  const result: unknown[] = [];

  for (let i = 0; i < list1.length; i++) {
    result.push(list1[i]);
    result.push(list2[i]);
  }

  return result;
}

function zipListTheFunctionalWay(list1: unknown[], list2: unknown[]): unknown[] {
  return list1.map((item, index) => [item, list2[index]]).reduce((result, pair) => result.concat(pair), []);
}

console.log(zipList(['a', 'b', 'c'], [1, 2, 3]));

console.log(zipListTheFunctionalWay(['a', 'b', 'c'], [1, 2, 3]));

// Estimation Undder 15 minutes
// Finished under 15 at 10:40.
