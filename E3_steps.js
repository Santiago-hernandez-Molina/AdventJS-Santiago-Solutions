function findNaughtyStep(original, modified){
    const val=original.length - modified.length
    const index= val * (val - (-val * -val)) / 2
    const index2 = -1 * (index - 1)
    const words=[original, modified]
    let i = 0
    for (const ch of words[index]){
        if(ch != words[index2][i]){
            return ch
        }
        i++
    }
    return ""
}
