// function isEvenOrOdd(number) {
//     if (number % 2 == 0) {
//         return "The number you enter, is Even";
//     }
//     else {
//         return "The number you enter is Odd";
//     }
// }

// const myRoll = isEvenOrOdd(61);
// console.log(myRoll);


// function isThisYearLeapYear(year) {
//     if (year % 4 == 0 && year % 400 == 0) {
//     return "Yes the year is Leap Year!!";
//     }
//     else {
//         return "No the year is not leap year"
//     }
// }

// const isLeapYear = isThisYearLeapYear(2010);
// console.log(isLeapYear);



// function showOddNumfromOneToHundred() {
//     for (let i = 1; i <= 100; i += 2){
//         console.log(i);
//     }
// }

// showOddNumfromOneToHundred();

// const products = [
//     {name: "mobile-phone", model: "nokia5", price: 9500, quantity: 1},
//     {name: "watch", model: "nokia5", price: 9500, quantity: 5},
//     {name: "laptop", model: "asus", price: 15000, quantity: 3},
//     { name: "tv", model: "lg", price: 2000, quantity: 2}
// ]
// let totalPrice = 0;
// let cartTotal = 0;
// for (const product of products) {
//     totalPrice = product.price * product.quantity;
//     console.log(totalPrice);
//     cartTotal = cartTotal + totalPrice;
// }
//     console.log("Cart Total is:", cartTotal);

// const products = [
//     {name: "mobile-phone", model: "nokia5", price: 9500, quantity: 1},
//     {name: "watch", model: "nokia5", price: 9500, quantity: 5},
//     {name: "laptop", model: "asus", price: 15000, quantity: 3},
//     { name: "tv", model: "lg", price: 2000, quantity: 2}
// ]
// let cartTotalPrice = 0;
// for (const product of products) {
//     let productTotal = product.price * product.quantity;
//     cartTotalPrice = cartTotalPrice + productTotal;
// }
// console.log(cartTotalPrice);



