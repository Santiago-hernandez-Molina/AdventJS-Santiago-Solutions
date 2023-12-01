function findFirstRepeated(gifts: number []) {
  let uniqueNumbers: number[] = []
  for (let i = 0; i < gifts.length; i++) {
      if (!uniqueNumbers.includes(gifts[i])) {
        uniqueNumbers = [...uniqueNumbers, gifts[i]]
      }else{
          return gifts[i];
      } 
  }
  return -1;
}

console.log(findFirstRepeated([1,2,3,4,6,8]));
console.log(findFirstRepeated([1,2,3,4,2,3]));
