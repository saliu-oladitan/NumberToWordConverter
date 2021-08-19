let btnConvet = document.querySelector('#button');
let input = document.querySelector('#enter');
let output = document.querySelector('#output');

btnConvet.addEventListener('click', () => {
   
    output.innerText = numberToWords.toWords(input.value);
});


// let btnConvet = document.querySelector("div.form-group button[name='convert']");
// let input = document.querySelector("div.form-group  input[name='GrandTotal']");
// let output = document.querySelector('.output');