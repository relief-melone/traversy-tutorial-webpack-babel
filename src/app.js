import { person, sayHello } from './lib';

// alert(person.name);
//
// console.log(sayHello('Chris'));

async function getPost(){
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');

    const data = await response.json();
    return data;
}

getPost().then(posts => {
    console.log(posts);
})
