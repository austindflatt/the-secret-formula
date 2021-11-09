const form = document.querySelector('form');
const inputText = document.querySelector('#input-text');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    console.log(inputText.value);
    let message = inputText.value;
    inputText.value = '';
    alert(message);
})