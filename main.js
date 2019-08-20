'use strict';

{
    const h1 = document.createElement('h1');
    h1.textContent = 'Title';
    document.body.appendChild(h1);

    const p = document.createElement('p');
    p.textContent = 'Hello, hell.';
    document.body.appendChild(p);

    const h2 = document.createElement('h2');
    h2.textContent = 'sub title';
    document.body.insertBefore(h2, p);

    const copy = p.cloneNode(true);
    document.body.insertBefore(copy, h2);

    document.body.removeChild(h2);
}