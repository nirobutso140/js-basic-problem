function cubeNumber(number) {

    if(typeof number !== 'number'){
        return "Please Enter a Number"
    }else{
        const result = Math.pow(number, 3)
        return result
    }
      
}
console.log(cubeNumber(3));


function matchFinder(string1, string2) {
    if(typeof string1 !== 'string' || typeof string2 !== 'string'){
        return "Please Enter string"
    }
    else if(string1.includes(string2)){
        return true
    }else{
        return false
    }
}
console.log(matchFinder("hello", "hello"));


function sortMaker(arr) {
    let temp;
    if(arr[0] < 0 || arr[1] < 0){
        return "Invalid Input"
    }
    if(arr[0] === arr[1]){
        return "equal"
    }
    if(arr[0] >= 0 && arr[1] >= 0){
        let sortedArray = arr.sort((a,b)=>b-a) 
        return sortedArray       
        
    }
}
const arr = [20,30]
console.log(sortMaker(arr));






function findAddress(inputObject) {
    let output = "";

    if (inputObject.street !== undefined) {
        output += inputObject.street;
    } else {
        output += "__";
    }

    output += ",";

    if (inputObject.house !== undefined) {
        output += inputObject.house;
    } else {
        output += "__";
    }

    output += ",";

    if (inputObject.society !== undefined) {
        output += inputObject.society;
    } else {
        output += "__";
    }

    return output;
}

const input1 = { street: 10, house: "15A", society: "Earth Perfect" };
const input2 = { street: 10, society: "Earth Perfect" };
const input3 = { street: 10 };

const output1 = findAddress(input1);
const output2 = findAddress(input2);
const output3 = findAddress(input3);

console.log(output1); 
console.log(output2); 
console.log(output3); 





function canPay(changeArray, totalDue) {
    let sum = 0
      if(changeArray.length === 0){
        return "No money, no chips for you!";
      }
      for(let i = 0; i < changeArray.length; i++){
          const array = changeArray[i]
          sum = sum + array
          if(sum >= totalDue){
             return true
          }else{
            return false
          }
      }
}
const existMoney = [10,20,40]
const totalPrice = 10
console.log(canPay(existMoney, totalPrice));


