let arr = [
    {itemType:"organic basket", listItemBelanja:"Food"},
    {itemType:"other basket", listItemBelanja:"Cleaner"},
    {itemType:"organic basket", listItemBelanja:"Drink"},
    {itemType:"other basket", listItemBelanja:"Tools"}
];

const fun = (ar)=>{
  let temp ={}
for(e of ar){
  !temp[e.itemType] ? temp[e.itemType]=[e] : temp[e.itemType].push(e)
}
  return temp
}
console.log(fun(arr))