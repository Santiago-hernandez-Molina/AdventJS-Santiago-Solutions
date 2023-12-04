function findNaughtyStep(original, modified) {
    const maxLength = original.length >= modified.length ?
        [original + " ", modified] : [modified, original]
    return maxLength[0].split('').find((ch, i)=>ch !== maxLength[1][i]).trim()
}
console.log(findNaughtyStep("lol", "lol"))
