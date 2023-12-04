function manufacture4(gifts, materials) {
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
function manufacture(gifts, materials) {
    const a=new RegExp("^["+materials+"]*$");
    return gifts.filter(a.test.bind(a));
}

var start2 = Date.now();
for (let i = 0; i < 10000000; i++) {
    manufacture4(["oso", "ese", "kasa", "sopa"],"sapo")
}
var end2 = Date.now();
console.log("test not regex: ", end2 - start2);

var start = Date.now();
for (let i = 0; i < 10000000; i++) {
    manufacture(["oso", "ese", "kasa", "sopa"],"sapo")
}
var end = Date.now();
console.log("test regex: ", end - start);

