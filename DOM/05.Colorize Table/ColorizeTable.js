function colorize() {
    [...document.querySelectorAll('table tr:nth-child(even)')].forEach(e=>e.style.backgroundColor='Teal');
}