
import React, { Component } from 'react';
// var readline = require('linebyline');
// var moment = require('moment');

/**
 * Returns a string element element with a footer and updating year
 * @param {string} name
 * @return {string}
 */



const shit =[
    'Beef Stroganoff',
    'Spaghetti With Basil Tomato Sauce',
    'Miso-Glazed Salmon'
];

const sides=[
    'Onion Soup',
    'Garlic Toast',
    'Ceaser Salid'
];


const domId = document.getElementById('entree').innerHTML = `<ul><li>${shit[0]}</li></ul> <ul><li>${shit[1]}</li></ul> <ul><li>${shit[2]}</li></ul>`;

console.info('Welcome to Bottega Bistro, please select from our Entree Menu:');
var e;
shit.forEach(element => {
    console.log(element);
    e = element;
});






//Alert & prompt section (also prints to console NO input)


let entreeChoice = prompt(`What entree would you like? 1) ${shit[0]}, 2) ${shit[1]}, 3) ${shit[2]} `);





if (entreeChoice != null) {
    if (entreeChoice == 1) {
        alert(`${shit[entreeChoice - 1]}, great choice! It's one of my favorets.`);
        console.log(`${shit[entreeChoice - 1]}, great choice! It's one of my favorets.`);
        let sidedish = prompt(`Here are some side dishes that go well with ${shit[entreeChoice - 1]}. 1) ${sides[0]}, 2) ${sides[1]}, 3) ${sides[2]}  `);

        if (sidedish != null) {
            alert(`${sides[sidedish - 1]}, sounds good!`);
            console.log(`${sides[sidedish - 1]}, sounds good!`);
        }else{alert(`You should select a side dish, don't miss out.`)};


    }else if (entreeChoice == 2) {
        alert(`${shit[entreeChoice - 1]}, awesome! I love ${shit[entreeChoice - 1]}.`);
        console.log(`${shit[entreeChoice - 1]}, awesome! I love ${shit[entreeChoice - 1]}.`);
        let sidedish = prompt(`Here are some side dishes that go well with ${shit[entreeChoice - 1]}. 1) ${sides[0]}, 2) ${sides[1]}, 3) ${sides[2]}  `);

        if (sidedish != null) {
            alert(`${sides[sidedish - 1]}, sounds good!`);
            console.log(`${sides[sidedish - 1]}, sounds good!`);
        }else{alert(`You should select a side dish, don't miss out.`)};


    }else{
        alert(`${shit[entreeChoice - 1]}, the cheifs special. You're gonna love it.`);
        console.log(`${shit[entreeChoice - 1]}, the cheifs special. You're gonna love it.`);
        let sidedish = prompt(`Here are some side dishes that go well with ${shit[entreeChoice - 1]}. 1) ${sides[0]}, 2) ${sides[1]}, 3) ${sides[2]}  `);

        if (sidedish != null) {
            alert(`${sides[sidedish - 1]}, sounds good!`);
            console.log(`${sides[sidedish - 1]}, sounds good!`);
        }else{alert(`You should select a side dish, don't miss out.`)};

    }
}

