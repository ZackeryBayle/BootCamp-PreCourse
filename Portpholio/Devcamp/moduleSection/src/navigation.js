export default function () {
    navDiv();
}


export function navDiv() {
    return function () {
        // const aDiv = document.createElement('div');
        // const attDiv = aDiv.setAttribute('id', 'navBlock');


        const aPara = document.createElement('p');
        const paraText = document.createTextNode('This is a NavBlock');
        aPara.appendChild(paraText);
    };
}
