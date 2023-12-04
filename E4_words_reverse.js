function decode(message) {
    const invertWord = (message) => {
        const index1 = message.lastIndexOf("(");
        const index2 = index1 + message.slice(index1).indexOf(")") + 1;
        const sliceWord = message.slice(index1, index2);
        const reverseWord = sliceWord.
            slice(1, -1).
            split("").
            reverse().
            join("");
        return message.replace(sliceWord, reverseWord);
    }
    while(message.includes("(")){
        message = invertWord(message)
    }
    return message
}

console.log(decode('sa(ucla(atn))(s)'))
