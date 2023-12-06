
//Question No.1

// fruit = ['apple', 'banana','mango', 'orange', 'strawberry'];

// for (let i = 0; i < fruit.length; i++) {
//     console.log(fruit[i]);

//     console.log(` Element at Index at ${i} is ${fruit[0]}`);

// }



//          Question No.2



// let useritem = prompt("bakery items only ");

// let bakeryItems = ["cake", "apple pie", "cookie", "chips", "patties"];

// if (bakeryItems.includes(useritem)) {
//     console.log(` ${useritem} is available at index of in our bakery `);
// } else {
//     console.log(` We are sorry, ${useritem} is not available in our bakery `);
// }




//          Question No.3



//          Question No.4



// let input1 = document.querySelector("#input1").value;

// let input2 = document.querySelector("#input2").value;

// let input3 = document.querySelector("#input3").value;



// function addition() {
//     let num1 = prompt("Enter any number");
//     let num2 = prompt("Enter any number");
//     let operator = prompt("Enter operator");

//     // Convert the input strings to numbers
//     num1 = parseFloat(num1);
//     num2 = parseFloat(num2);

//     let result;
//     switch (operator) {
//         case '+':
//             result = num1 + num2;
//             break;
//         case '-':
//             result = num1 - num2;
//             break;
//         case '*':
//             result = num1 * num2;
//             break;
//         case '/':
//             result = num1 / num2;
//             break;
//         default:
//             console.log("Invalid operator. Please enter a valid operator.");
//             return;
//     }

//     console.log(`${num1} ${operator} ${num2} = ${result}`);
// }


// addition();





//          Question No.6;


// let str = prompt("Enter any single word");

// function palindrome(str) {

// let lowerCaseStr = str.toLowerCase();

//        let reversedStr = lowerCaseStr.split('').reverse().join('');
//        console.log( reversedStr);

//     if (lowerCaseStr === reversedStr) {
//         console.log("Palindrome hai bhaii");
//     } else {
//         console.log("Palindrome nahi hai bhaii");
//     }
// }

// palindrome(str);


//  Question No.7

function farheinheitToCelsuis() {

    let farheinheit = 25 * 9 / 5 + 32;
    console.log(` 25°C is ${farheinheit}°F `);
    return farheinheit
}

farheinheitToCelsuis();


function CelsuisTOFarenheit() {

    let celsius = (29 * 9 / 5) + 32;

    console.log(` 29°F is ${celsius}°C `);
    return celsius
}

CelsuisTOFarenheit();



//      Question 

const books = [
    {
        title: "Book1",
        author: "Author1",
        price: 20
    },
    {
        title: "Book2",
        author: "Author2",
        price: 30
    },
    {
        title: "Book3",
        author: "Author3",
        price: 25
    },
    {
        title: "Book4",
        author: "Author4",
        price: 15
    },
]

function filterBooks( bookarray, maxprice ) {

    for (let i = 0; i < books.length; i++) {

        if( books.price === maxprice ){
            console.log(` ${books[i]}`)

        }

    }

}


















