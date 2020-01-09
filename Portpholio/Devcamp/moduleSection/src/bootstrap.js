
// import navigation, { navDiv } from './navigation';


// console.log(navigation);
const aPara = document.createElement('p');
const paraText = document.createTextNode('This is a NavBlock');
aPara.appendChild(paraText);

const element = document.getElementsByClassName('app-wrapper');
element.appendChild(aPara);

document.getElementsByClassName('app-wrapper').createElement('p');

