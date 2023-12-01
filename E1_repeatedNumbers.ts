function findFirstRepeated(gifts: number []) {
    const uniqueNumber = gifts.filter(num => gifts.indexOf(num) !== gifts.lastIndexOf(num))
    if (uniqueNumber.length == 0) {
        return -1
    }
    return uniqueNumber[2] || uniqueNumber[0]
}

console.log(findFirstRepeated([1,2,3,4,6,8,6]));
console.log(findFirstRepeated([0,2,3,0,6,8,0]));
console.log(findFirstRepeated([1,2,3,4,2,3]));
