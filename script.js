// Question 1: Determine the minimum and maximum of three given numbers
// Question 2: Determine the minimum and maximum of three given numbers
// maximum
// function max(a, b, c) {
//     if (a > b && a > c) {
//         return a;
//     }
//     else if (b > a && b > c) {
//         return b;
//     }
//     else {
//         return c;
//     }
// }

// // minimum
// function min(d, e, f) {
//     if (d < e && d < f) {
//         return d;
//     }
//     else if (e < d && e < f) {
//         return e;
//     }
//     else {
//         return f;
//     }
// }

// function main1() {
//     let a = document.getElementById("a").value;
//     let b = document.getElementById("b").value;
//     let c = document.getElementById("c").value;

//     let maxvalue = max(a, b, c);
//     document.getElementById("ans1").innerHTML = maxvalue;
// }

// function main2() {
//     let d = document.getElementById("d").value;
//     let e = document.getElementById("e").value;
//     let f = document.getElementById("f").value;

//     let minvalue = min(d, e, f);
//     document.getElementById("ans2").innerHTML = minvalue;
// }

// Q.3  Write a Program to input electricity unit charges and calculate the total electricity bill according to the given condition:
// For the first 50 units Rs. 0.50/unit. For the next 100 units Rs. 0.75/unit. For the next 100 units Rs. 1.20/unit. For units above 250 Rs. 1.50/unit. An additional surcharge of 20% is added to the bill.

// function generateBill(bill) {
//     let totalamt;

//     if(bill > 0 && bill <= 50){
//         totalamt = bill * 0.50;
//     }
//     else if(bill > 50 && bill <= 150) {
//         totalamt = 50 * 0.50 + (bill - 50) * 0.75;
//     }
//     else if(bill > 150 && bill <= 250) {
//         totalamt = 50 * 0.50 + 100 * 0.75 + (bill - 150) * 1.20;
//     }
//     else{
//         totalamt = 50 * 0.50 + 100 * 0.75 + 100 * 1.20 + (bill - 250) * 1.50;
//     }

//     let surcharge = totalamt * 0.20;
//     return totalamt + surcharge;
// }

// function main() {
//     let bill = parseFloat(document.getElementById("bill").value);
//     let totalBill = generateBill(bill);
//     console.log(totalBill);
//     document.getElementById("amount").innerHTML = totalBill;
// }

// Q.4 Write a Program to find if a given number is neutral or not using a ladder if else.
// function findNumber() {
//     let number = document.getElementById("number").value;

//     if (number < 0) {
//         document.getElementById("num").innerHTML = "Negative";
//     }
//     else if (number > 0) {
//         document.getElementById("num").innerHTML = "Positive";
//     }
//     else {
//         document.getElementById("num").innerHTML = "Neutral";
//     }
// }


// Q5 . Develop a program to check if a student's grade falls within a specific range. If the grade is greater than or equal to 90, print "A"; if it is between 80 and 89, print "B"; if it is between 70 and 79, print "C"; if it is between 60 and 69, print "D"; otherwise, print "F"
// function checkGrade() {
//     let grade = parseInt(document.getElementById("grade").value);

//     if (grade >= 90) {
//         document.getElementById("result").innerHTML = "Grade A";
//     }
//     else if (grade < 89 && grade > 80) {
//         document.getElementById("result").innerHTML = "Grade B";
//     }
//     else if (grade < 79 && grade > 70) {
//         document.getElementById("result").innerHTML = "Grade C";
//     }
//     else if (grade < 69 && grade > 60) {
//         document.getElementById("result").innerHTML = "Grade D";
//     }
//     else {
//         document.getElementById("result").innerHTML = "Grade F";
//     }
// }


// if(grade > 90){
//     range = 1;
// }
// else if(grade < 89 && grade > 80){
//     range = 2;
// }
// else if(grade < 79 && grade > 70){
//     range = 3;
// }
// else if(grade < 69 && grade > 60){
//     range = 4;
// }
// else {
//     range = 5;
// }

// switch(true){
//     case (grade >= 90):
//         console.log("A");
//         break;
//     case (grade >= 80 && grade < 90):
//         console.log("B");
//         break;
//     case (grade >= 70 && grade < 80):
//         console.log("C");
//         break;
//     case (grade >= 60 && grade < 70):
//         console.log("D");
//         break;
//     default:
//         console.log("F");
//         break;
// }