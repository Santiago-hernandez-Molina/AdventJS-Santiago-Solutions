function findFirstRepeatedNew(gifts) {
    return [...gifts, -1, -1].find(
        (num, i) => (gifts.indexOf(num)!== i)
    )
}
function findFirstRepeatedBest(gifts) {
    return [...gifts.filter(
        (num, i) => (gifts.indexOf(num)!== i)
    ), -1][0]
}

function findFirstRepeatedFE(gifts: number[]) {
    for (const [num, i] of gifts.entries()) {
        if (gifts.indexOf(num)!== i){
            return num
        }
    }
    return -1;
}
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

function findFirstRepeatedB2(gifts: number[]) {
    const uniques = gifts.filter(
        num => (gifts.indexOf(num)!== gifts.lastIndexOf(num))
    )
    uniques.unshift(-1)
    uniques.push(-1)
    let i = Math.floor(uniques.length / 2)
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
function findFirstRepeatedT(gifts: number[]) {
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
function findFirstRepeated(gifts) {
  let num = gifts.find((num, i) =>(gifts.indexOf(num)!== i)) + 1
  num = num || 0
  return num - 1
}
