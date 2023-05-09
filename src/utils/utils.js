function matchResults(array1, array2) {
  //const matched = [];
  for (let i = 0; i < array1.length; i++) {
    for (let j = 0; j < array2.length; j++) {
      return array1[i] === array2[j];
      //matched.push(array2[j]);
    }
  }
  //return matched;
}

function searchRecipes(array, criteria) {
 
  const output = array.filter((item) =>
    item.ingredients.some((r) => criteria.indexOf(r) >= 0)
  );

  return output;
}

export { matchResults, searchRecipes };
