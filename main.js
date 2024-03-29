//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}


console.log(Object.keys(person3))
 

//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/


function person(name, age){
    this.name = name;
    this.age = age;

    this.addAge = (up) => {
        let increase = age;
        increase += up;
        return increase;
    };

    this.printInfo = () => {
        console.log(`Hi i am ${name} and I'm ${age} year(s) old`)
    }
}

let John = new person('John', 15)
let Susan = new person('Susan', 18)

console.log(John.printInfo())
console.log(John.addAge(1))
console.log(Susan.addAge(3))



// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/

const isBigWord = (word) => {
    return new Promise( () =>{
        if(word.length >= 10){
            console.log('Big Word')
        } else {
            console.log('Small Number')
        }
    })
}

isBigWord('app')