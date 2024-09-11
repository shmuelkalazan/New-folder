

function toSort(theList){
    theList.sort(function(a, b){return a - b})
    return theList.filter(p => p%2 == 0);
}
console.log(toSort(points));


const points = [40, 100, 1, 5,8,8,40,10, 25, 10];
function uniq(list){
    return list.filter(a => list.indexOf(a) === list.lastIndexOf(a));
}
console.log(uniq(points));



