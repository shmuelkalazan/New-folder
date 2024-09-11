

function toSort(theList){
    theList.sort(function(a, b){return a - b})
    return theList.filter(p => p%2 == 0);}
console.log(toSort(points));


const points = [40, 100, 1, 5,8,8,40,10, 25, 10];
function uniq(list){
    return list.filter(a => list.indexOf(a) === list.lastIndexOf(a));}
console.log(uniq(points));


function capitalizeFirstLetter(theString){
    const words = theString.split(" ")
    let newString = ""
    for (let word of words) {
        if (word[word.length-1] != "." ) {   
            newString  += word[0].toUpperCase() + word.slice(1) + " ";}         
        else{newString += word}}   
        return newString}
console.log(capitalizeFirstLetter("helow word my freind."));


let tasks = []

let task = {
    id : 1,
    mission : "do something"}

function addTask(newTask){
    const myJSON = JSON.stringify(newTask);
    tasks[tasks.length] = myJSON
    console.log(tasks);  
    localStorage.setItem("tasks",tasks)
}
addTask(task)
