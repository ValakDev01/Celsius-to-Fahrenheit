const conv = document.querySelector('.conv');
const reset = document.querySelector('.reset');
const change = document.querySelector('.change');
const result = document.querySelector('.result');
const one = document.querySelector('.one');
const two = document.querySelector('.two');
const input = document.querySelector('#converter');

const resetInput = () => {
    input.value = '';
    result.textContent = '';
}

const swap = () => {
    if (one.textContent == '°C') {
        one.textContent = '°F';
        two.textContent = '°C';
        result.textContent = '';
    } else {
        one.textContent = '°C';
        two.textContent = '°F';
        result.textContent = '';
    }
}

const fahrToCel = () => {
    const fahrenheit = input.value * 1.8 + 32;
    result.textContent = `${input.value}°C to ${fahrenheit.toFixed(1)}°F`;
    input.value = '';
}

const celToFahr = () => {
    const celsius = (input.value - 32) / 1.8;
    result.textContent = `${input.value}°F to ${celsius.toFixed(1)}°C`;
    input.value = '';
}

const conversion = () => {
    if (input.value != '') {
        if (one.textContent == '°C') {
            fahrToCel();
        } else {
            celToFahr();
        }
    } else {
        result.textContent = 'Musisz podać wartość!';
    }
}

reset.addEventListener('click', resetInput);
change.addEventListener('click', swap);
conv.addEventListener('click', conversion);