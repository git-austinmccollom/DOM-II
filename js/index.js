// Your code goes here
const navNodes = document.querySelectorAll('a');
const containerHome = document.querySelector('.container.home');
const body = document.querySelector('body');

// navNodes.addEventListener('mouseover', event => {
//     console.log('hello world');
// })

Array.from(navNodes).forEach(element => {
    element.addEventListener('mouseenter', event => {
        element.style.backgroundColor = 'green';
    })
    element.addEventListener('mouseleave', event => {
        element.style.backgroundColor = 'white';
    })
})

const images = document.querySelectorAll('img');

Array.from(images).forEach(element => {
    element.addEventListener('dblclick', event => {
        console.log('hello?');
        let newDiv = document.createElement('div');
        newDiv.style.cssText = "width: 75%; height: 600px; background-color: red; margin: auto;"
        body.insertBefore(newDiv, containerHome);
    })
})