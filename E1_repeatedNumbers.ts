function findFirstRepeated1(gifts: number []): number {
    let lastIndexOf: number = gifts.length;
    let uniqueNumber = -1;
    for (const num of gifts){
        const lastPos: number = gifts.lastIndexOf(num);
        const firstPos: number = gifts.indexOf(num);
        if (
            lastIndexOf <= lastPos ||
            firstPos == lastPos
          ){
            continue;
        }
        lastIndexOf = lastPos
        uniqueNumber = num
    }
    return uniqueNumber 
}
function findFirstRepeated2(gifts: number[]) {
    const uniques = gifts.filter(
        num => (gifts.indexOf(num)!== gifts.lastIndexOf(num))
    )
    uniques.unshift(-1)
    uniques.push(-1)
    let i = (uniques.length / 2)
    return uniques[i];
}
function findFirstRepeated4(gifts: number[]) {
    const uniqueNumber = gifts.filter(num => gifts.lastIndexOf(num) != gifts.indexOf(num))
    return uniqueNumber.length ? uniqueNumber[2] || uniqueNumber[0] : -1 
}
function findFirstRepeated3(gifts: number[]) {
    const uniqueNumbers: number[] = []
    for (const num of gifts){
        if(uniqueNumbers.indexOf(num) != -1){
            return num;
        }
        uniqueNumbers.push(num);
    }

    return -1;
}
function findFirstRepeated(gifts: number[]) {
    const uniques = gifts.filter(
        (num, i) => {
            const result = i != gifts.lastIndexOf(num)
            console.log("indice", i, " - ", gifts.lastIndexOf(num))
            return result
        }
    )
    uniques.unshift(-1)
    uniques.push(-1)
    const i = (uniques.length / 2)
    return uniques[i];
}

console.log(findFirstRepeated([1,2,3,4,6,8,6]));
console.log(findFirstRepeated([0,2,3,0,6,8,0]));
console.log(findFirstRepeated([1,2,3,4,2,3]));
console.log(findFirstRepeated([2, 1, 3, 5, 3, 2]));
