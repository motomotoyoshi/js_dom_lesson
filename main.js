'use strict';

{
    const ul = document.querySelector('ul');

    // console.log(ul.parentNode);

    // console.log(ul.children);

    for (let i = 0; i < ul.children.length; i++) {
        console.log(ul.children[i].textContent);
    }
}