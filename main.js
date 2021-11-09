// Alerter
const form = document.querySelector('form');
const inputText = document.querySelector('#input-text');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    console.log(inputText.value);
    let message = '✅ Message Success: ' + inputText.value;
    if (inputText.value.length === 0) {
        alert('❌ Error! You must type a message');
    } else {
        alert(message);
    }
    inputText.value = '';
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

// Haircut appointment scheduler
const haircutForm = document.querySelector('#haircutForm');
const date = document.querySelector('#date');
const barber = document.querySelector('#barber');
const hairstyle1 = document.querySelector('#longHair');
const hairstyle2 = document.querySelector('#shortHair');

haircutForm.addEventListener('submit', function(event) {
    event.preventDefault();
    let style = 'Haircut scheduled for ' + date.value + ' with ' + barber.value + ' for ';
    if (hairstyle1.checked) {
        style += 'Long hair'
    }
    if (hairstyle2.checked) {
        style += 'Short hair'
    }
    alert(style);
})

// Create account form
const createForm = document.querySelector('#createForm');
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#confirm-password');

createForm.addEventListener('submit', function(event) {
    event.preventDefault();
    let confirmation = 'You created an account! ✅ Your username is ' + username.value + ' & the email you used is ' + email.value;
    if (password.value === confirmPassword.value) {
        alert(confirmation);
    } else {
        alert('Please try again! Passwords did not match. ❌');
    }
});