

// Challenge 1
// let cups;
// cups = prompt("How many cups of coffee have you had?");
// if (cups < 3) {
//     console.log("I will get you another one.");
// } else {
//     console.log("I think you have had enough.");
// } if (cups < 3) {
//     console.log("I will get you another one.");
// } else {
//     alert ("Yeah, I think you have had enough.");
// }


// Challenge 2
// let miles;
// miles = prompt("Your car may need an oil change.  How many miles does it have?");
// if (miles > 500) {
//     console.log("Yes you need an oil change.");
//     alert("Yes you need an oil change.")
// } else {
//     console.log("I think you can hold off on changing the oil for now.");
//     alert("I think you can hold off on changing the oil for now.")
// } 











//Loops
// var i;
// for (i = 0; i < 3; i = i + 1)
// {
//     console.log(i);
// }

// for (var i = 0; i < 3; i++)
// {
//     console.log(i);
// }

// var myArray = ["A", "B", "C"];
// for (var i = 0; i < myArray.length; i++)
// {
//     console.log("The member of myArray in index " + i + " is " + myArray[i]);
// }

// var i = 99;
// while (i > 0)
// {
//     console.log(i + " bottles of beer on the wall");
//     i -= 1;
// }

// var i = 99;
// while (true)
// {
//     console.log(i + " bottles of beer on the wall");
//     i -= 1;
//     if (i == 0)
//     {
//         break;
//     }
// }

// for (var i = 0; i < 100; i++)
// {
//     // check that the number is even
//     if (i % 2 == 0)
//     {
//          continue;
//     }
//     // if we got here, then i is odd.
//     console.log(i + " is an odd number.");
// }

var myArray = ["What is the meaning of life?", "The meaning of life is", 42];

//TODO: modify this code
for (var i = 0; i< myArray.length; i++)
{
    console.log(myArray[i]);
}