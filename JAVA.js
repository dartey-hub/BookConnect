// Counter functionality for the reading challenge
document.querySelectorAll('.counter button').forEach(button => {
    button.addEventListener('click', () => {
        const counterSpan = button.parentElement.querySelector('span');
        let count = parseInt(counterSpan.textContent);
        
        if (button.textContent === '+') {
            count++;
        } else if (button.textContent === '-' && count > 0) {
            count--;
        }
        
        counterSpan.textContent = count;
    });
});