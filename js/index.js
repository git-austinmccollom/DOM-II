// Your code goes here
const navNodes = document.querySelectorAll('a');

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