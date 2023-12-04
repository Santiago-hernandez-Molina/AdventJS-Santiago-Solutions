function manufacture3(gifts: string[], materials: string) {
  const words = gifts.filter((gift)=>{
    for(let ch of gift){
      if(!materials.includes(ch)){
        return false;
      }
    }
    return true;
  })
  return words
}

function manufacture2(gifts: string[], materials: string) {
    const regex = new RegExp(
        `^[${materials}] +$`
    )
    const words = gifts.filter(
        regex.test.bind(regex)
    )
    return words
}

console.log(manufacture2(["ose"],"sapo"))
