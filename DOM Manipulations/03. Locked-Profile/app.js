function lockedProfile() {
    let buttons = Array.from(document.querySelectorAll('button')).forEach(button => button.addEventListener('click', onClick));

    function onClick(ev) {
        let unlockedField = ev.target.parentNode.querySelector('input[value="unlock"]');
        let hiddenElements = ev.target.parentNode.getElementsByTagName('div')[0];

        if (unlockedField.checked) {
            if (ev.target.textContent == 'Show more') {
                hiddenElements.style.display = 'block';
                ev.target.textContent = 'Hide it';
            }   else if (ev.target.textContent === 'Hide it') {
                hiddenElements.style.display = 'none';
                ev.target.textContent = 'Show more';
            }
        }
    }
}