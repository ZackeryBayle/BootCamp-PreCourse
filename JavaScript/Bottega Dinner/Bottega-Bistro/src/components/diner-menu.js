
import React, { Component } from 'react';
// import { text } from 'express';

/**
 * Returns a string element element with a footer and updating year
 * @param {string} name
 * @return {string}
 */



const entreeMenu =[ 
    {name: 'Beef Stroganoff', price: '13.99'},
    {name: 'Spaghetti With Basil Tomato Sauce', price: '10.99'},
    {name: 'Miso-Glazed Salmon', price: '18.99'}
];

const sides=[
    {name:'Onion Soup', price: 'Included'},
    {name:'Garlic Toast', price: 'Included'},
    {name:'Ceaser Salid', price: 'Included'}
];


const domId = document.getElementById('entree').innerHTML = `<ul><li>${entreeMenu[0].name} - ${entreeMenu[0].price}</li></ul> <ul><li>${entreeMenu[1].name} - ${entreeMenu[1].price}</li></ul> <ul><li>⭐${entreeMenu[2].name} - ${entreeMenu[2].price}</li></ul>`;
console.info('Welcome to Bottega Bistro, please select from our Entree Menu:');


var e;



// entreeMenu.forEach(element => {
//     console.log(element);
//     e = element;
// });

for(var i=0; i < entreeMenu.length; i++) {
    console.log(entreeMenu[i]);
}






//Alert & prompt section (also prints to console NO input)


let entreeChoice = prompt(`What entree would you like? 1) ${entreeMenu[0].name} - ${entreeMenu[0].price}, 2) ${entreeMenu[1].name} - ${entreeMenu[1].price}, 3) ${entreeMenu[2].name} - ${entreeMenu[2].price} `);



let total;

if (entreeChoice != null) {
    if (entreeChoice == 1, total =+ `${entreeMenu[entreeChoice - 1].price}`) {
        alert(`${entreeMenu[entreeChoice - 1].name}, great choice! It's one of my favorets.`);
        console.log(`${entreeMenu[entreeChoice - 1].name}, great choice! It's one of my favorets.`);

        let sidedish = prompt(`Here are some side dishes that go well with ${entreeMenu[entreeChoice - 1].name} - 1) ${sides[0].name}, 2) ${sides[1].name}, 3) ${sides[2].name}  Price: ${sides[0].price}  `);

        if (sidedish != null) {
            alert(`${sides[sidedish - 1].name}, sounds good!`);
            console.log(`${sides[sidedish - 1].name}, sounds good! Your total is ${total} + Tax`);
        }else{alert(`You should select a side dish, don't miss out.`)};


    }else if (entreeChoice == 2) {
        alert(`${entreeMenu[entreeChoice - 1].name}, awesome! I love ${entreeMenu[entreeChoice - 1].name}.`);
        console.log(`${entreeMenu[entreeChoice - 1].name}, awesome! I love ${entreeMenu[entreeChoice - 1].name}.`);
        let sidedish = prompt(`Here are some side dishes that go well with ${entreeMenu[entreeChoice - 1].name}. 1) ${sides[0].name}, 2) ${sides[1].name}, 3) ${sides[2].name}  `);

        if (sidedish != null) {
            alert(`${sides[sidedish - 1].name}, sounds good!`);
            console.log(`${sides[sidedish - 1].name}, sounds good! Your total is ${total} + Tax`);
        }else{alert(`You should select a side dish, don't miss out.`)};


    }else{
        alert(`${entreeMenu[entreeChoice - 1].name}, the cheifs special. You're gonna love it.`);
        console.log(`${entreeMenu[entreeChoice - 1].name}, the cheifs special. You're gonna love it.`);
        let sidedish = prompt(`Here are some side dishes that go well with ${entreeMenu[entreeChoice - 1].name}. 1) ${sides[0].name}, 2) ${sides[1].name}, 3) ${sides[2].name}  `);

        if (sidedish != null) {
            alert(`${sides[sidedish - 1].name}, sounds good!`);
            console.log(`${sides[sidedish - 1].name}, sounds good! Your total is ${total} + Tax`);
        }else{alert(`You should select a side dish, don't miss out.`)};

    }
}




//END Section