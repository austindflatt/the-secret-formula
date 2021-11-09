// Alerter
const form = document.querySelector('form');
const inputText = document.querySelector('#input-text');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    console.log(inputText.value);
    let message = inputText.value;
    inputText.value = '';
    alert(message);
})

// Sandwich builder
const sandwichForm = document.querySelector('#sandwichForm');
const bread1 = document.querySelector('#bread1');
const bread2 = document.querySelector('#bread2');
const turkey = document.querySelector('#turkey');
const ham = document.querySelector('#ham');
const tomato = document.querySelector('#tomato');
const mozzerlla = document.querySelector('#mozzerlla');
const spinach = document.querySelector('#spinach');
const lettuce = document.querySelector('#lettuce');
const peppers = document.querySelector('#peppers');


sandwichForm.addEventListener('submit', function(event) {
    event.preventDefault();
    let ingredients = 'Your sandwich contains: '
    if (bread1.checked) {
        ingredients += 'White bread, '
    }
    if (bread2.checked) {
        ingredients += 'Wheat bread, '
    }
    if (turkey.checked) {
        ingredients += 'Turkey, '
    }
    if (ham.checked) {
        ingredients += 'Ham, '
    }
    if (tomato.checked) {
        ingredients += 'Tomato, '
    }
    if (mozzerlla.checked) {
        ingredients += 'Mozzerlla, '
    }
    if (spinach.checked) {
        ingredients += 'Spinach, '
    }
    if (lettuce.checked) {
        ingredients += 'Lettuce, '
    }
    if (peppers.checked) {
        ingredients += 'Peppers'
    }
    alert(ingredients);
})