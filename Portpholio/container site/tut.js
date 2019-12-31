
const fetch = require("node-fetch");


// const postsPromise = fetch('https://api.dailysmarty.com/posts');


// console.log('Finish Fetch Call');

//console.log(postsPromise);


// postsPromise
//     .then(data => data.json())
//     .then(data => {
//        data.posts.forEach((item) => {
//            console.log(item.title);
//            console.log('Link: ' + item.url_for_post);
//            console.log(item.url_for_post);
//        });
//     });



// Promise all

// const greeting = new Promise((resolve, reject) => {
//    resolve('Hi there');
//    reject('Bad Greeting');
// });

// const updateAccount = new Promise((resolve, reject) => {
//    resolve('Updating Login');
//    reject('Error updating account with login');
// });

// const loginActivities = Promise.all([greeting, updateAccount]);

// loginActivities.then(res => {
//    res.forEach(activity => {
//       console.log(activity);
//    });
// });

// Async

// const login = () => {
//    return new Promise((resolve, reject) => {
//       setTimeout(() => {
//          resolve('User Logged in...');
//       }, 2000);
//    });
// };

// const updateAccount = () => {
//    return new Promise((resolve, reject) => {
//       setTimeout(() => {
//          resolve('Updating last login...');
//       }, 2000);
//    });
// };

// async function loginActivities() {
//    const returnedLogin = await login();
//    console.log(returnedLogin);

//    const returnedupdateAccount = await updateAccount();
//    console.log(returnedupdateAccount);
// }

// loginActivities();



//closure


// const login = () => {
//    return new Promise((resolve, reject) => {
//       setTimeout(() => {
//          resolve('User Logged in...');
//       }, 2000);
//    });
// };

// const updateAccount = () => {
//    return new Promise((resolve, reject) => {
//       setTimeout(() => {
//          resolve('Updating last login...');
//       }, 2000);
//    });
// };

// async function loginActivities(login, updateAccount) {
//    const returnedLogin = await login;
//    console.log(returnedLogin);

//    const returnedupdateAccount = await updateAccount;
//    console.log(returnedupdateAccount);
// }

// loginActivities(login(), updateAccount());




// API calls
//https://api.github.com/users/2toetommy/repos
//https://api.dailysmarty.com/posts


async function queryApis() {
   const postsPromis = fetch('https://api.dailysmarty.com/posts');
   const posts = await postsPromis.then(res => res.json());
   console.log(posts);

   const reposPromis = fetch('https://api.github.com/users/2toetommy/repos');
   const repos = await reposPromis.then(res => res.json());
   console.log(repos);
}

queryApis(); 