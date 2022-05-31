// Cau 1
let firstInput = [1,2,11,14,3,7,9,1,2,11,14,3,4,11];
function findQuestion(arr){
    const array = [...arr];
    let result = [];
    let sortedArr = arr.sort(function(a, b) {
        return b-a;
      });
    let maxNum = sortedArr[0];
    //remove max number in sorted array
    for( var i = 0; i < sortedArr.length; i++){                         
        if ( sortedArr[i] === maxNum) { 
            sortedArr.splice(i, 1); 
            i--; 
        }
    }
    let secondMaxNum = sortedArr[0];
    array.map((item,i) => {
        if(item === secondMaxNum) result.push(i);
    })
    return result;
} 

// Cau 2
let secondInput = [1,0,2,0,1,1,3,0];
var A = 0;
var B = 0;
var C = 0;
var D = 0;
function secondQuestion(arr){
    // won +3 , draw +1, lose +0
    const matches = ["A","B","C","D","A","C","B","D"];
    const lastMatches = ["A","D","B","C"];
    const pairResult = [[1,0],[1,1],[0,1]];
    // init point for each team
    for( var j = 0; j < arr.length; j=j+2){
        calculatePoint(matches[j],matches[j+1],arr[j],arr[j+1]);
    }
    let pointArr = [{id:"A", point: A},{id:"B", point:B},{id:"C", point:C},{id:"D", point:D}];
    pointArr.sort(function(a, b) {
        return b.point-a.point;
      });
    // A win , B lose
    return pointArr;
}
function calculatePoint(firstPoint, secPoint, fisrtTeamRes, secTeamRes){
    if(fisrtTeamRes > secTeamRes){
        switch(firstPoint) {
            case "A":
                A+=3;
                break;
            case "B":
                B+=3;
                break;
            case "C":
                C+=3;    
                break;
            case "D":
                D+=3;
                break;
          }
    }
    else if(fisrtTeamRes === secTeamRes) {
        switch(firstPoint) {
            case "A":
                A+=1;
                break;
            case "B":
                B+=1;
                break;
            case "C":
                C+=1;    
                break;
            case "D":
                D+=1;
                break;
        }
        switch(secPoint) {
            case "A":
                A+=1;
                break;
            case "B":
                B+=1;
                break;
            case "C":
                C+=1;    
                break;
            case "D":
                D+=1;
                break;
          }
    }
    else{
        switch(secPoint) {
            case "A":
                A+=3;
                break;
            case "B":
                B+=3;
                break;
            case "C":
                C+=3;    
                break;
            case "D":
                D+=3;
                break;
          }
        console.log(firstPoint,secPoint);
    }
}
// Cau 3
const thirdInput = [3,6]; // change input here
function thirdQuestion(arr){
    const lightpubs = arr[0]; // so den
    const switchTimes = arr[1]; // so lan bam nut
    var lightArr = [...Array(lightpubs)].map(x => 0); // khoi tao mang 
    var times = 1;
    while (times <= switchTimes){ // lap qua so lan bam nut
        var i = 0;
        var firstStatus = lightArr[i];
        lightArr[i] = switchLight(lightArr[i]);
        while(firstStatus === 1 && i < lightArr.length-1){ //neu den thu M tu sang' sang tat'
            firstStatus = lightArr[i+1];
            lightArr[i+1] = switchLight(lightArr[i+1]);
            i++;
        }
        times++;
    }
    return lightArr;
}
function switchLight(status){
    if(status === 0) return 1;
    else return 0;
}
// run function
console.log("Cau 1 : ",findQuestion(firstInput));

console.log("Cau 2 : ",secondQuestion(secondInput));


console.log("Cau 3 : ",thirdQuestion(thirdInput));
