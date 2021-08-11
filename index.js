function paperRequirements(firstBookQuantity, secondBookQuantity, thirdBookQuantity) {
    if (typeof firstBookQuantity != "number" || typeof secondBookQuantity != "number" || typeof thirdBookQuantity != "number") {
        return "Please input a number";
    }
    let firstBookPage = 100;
    let secondBookPage = 200;
    let thirdBookPage = 300;
    let firstBookTotalPage = firstBookPage * firstBookQuantity;
    let secondBookTotalPage = secondBookPage * secondBookQuantity;
    let thirdBookTotalPage = thirdBookPage * thirdBookQuantity;
    let allBookTotalPages = firstBookTotalPage + secondBookTotalPage + thirdBookTotalPage;
    return allBookTotalPages;
}

let firstBookQuantity = 6;
let secondBookQuantity = 2;
let thirdBookQuantity = 4;

const myBooksPaperRequirements = paperRequirements(firstBookQuantity, secondBookQuantity, thirdBookQuantity);
console.log(myBooksPaperRequirements);


function isLeapYear(year) {
    if (year % 4 == 0 && year % 400 == 0) {
        return "The year is leap year !!"
    }
    else {
        return "The year is not a leap year.."
    }
}

let year = 2000;
const isMyYearLeapYear = isLeapYear(year);
console.log(isMyYearLeapYear);


function bestFreind(freinds) {
    let smallestFreind = freinds[0];
    for (let i = 0; i < freinds.length; i++) {
        let freind = freinds[i];
        if (freind.length < smallestFreind.length) {
            smallestFreind = freind;
        }
    }
    return smallestFreind;
}

const freinds = ["Tasneem", "Abdullah", "Samit", "masfhdfsdfs", "a"];
const smallestFreind = bestFreind(freinds);
console.log(smallestFreind);



function sumOfArray(nums) {
    let sum = 0;
    for (i = 0; i < nums.length; i++) {
        let num = nums[i];
        sum = sum + num;
    }
    return sum;
}

const nums = [10, 15, 15, 25, 2];
const arrayTotal = sumOfArray(nums);
console.log(arrayTotal);

function onlyPositive(numbers) {
    let positiveNums = [];
    for (i = 0; i < numbers.length; i++) {
        let number = numbers[i];
        if (number < 0) {
            break;
        }
        positiveNums.push(number);
    }
    return positiveNums;
}
const positives = onlyPositive([10, 34, 2034, -22, 20439, 934]);
console.log(positives);