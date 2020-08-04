// Your code goes here
const navNodes = document.querySelectorAll('a');
const containerHome = document.querySelector('.container.home');
const body = document.querySelector('body');
const html =document.querySelector('html');

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

        let source = element.src;

        let newDiv = document.createElement('div');
        newDiv.style.cssText = `width: 100%; height: 600px; background-image: url("${source}"); background-repeat: no-repeat; background-contain: cover; background-position: center; margin: auto;`
        newDiv.classList.add('popup');
        html.prepend(newDiv, body);
        body.hidden = true;
    })
})

document.addEventListener('keydown', event => {
    if ( event.key === "Escape" ) {
        
        document.querySelector('.popup').remove()
        body.hidden = false;
    }
})