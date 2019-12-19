
const fetch = require("node-fetch");




console.log('Starting Fetch Call');

const postsPromise = fetch('https://api.dailysmarty.com/posts');

console.log('Finish Fetch Call');

console.log(postsPromise);