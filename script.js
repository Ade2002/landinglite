let cardnumber = document.querySelector('.card__number')
let expdate = document.querySelector('.card__expiry')
let cvv = document.querySelector('.card__cvv')
let numberinput = document.getElementById('cardNumber')
let expiryinput = document.getElementById('expDate')
let cvvinput = document.getElementById('securityCode')
let inputs = document.querySelectorAll('.form-group')
const updateccNumberPara = () => {
     let value = numberinput.value
     cardnumber.innerHTML = value;
     cardnumber.style.opacity = 1
}
const updateccexpiryParapraph = () => {
     let value = expiryinput.value
     expdate.innerHTML = value
     expdate.style.opacity = 1
}
const updatecvvParapraph = () => {
     let value = cvvinput.value
     cvv.innerHTML = value
     cvv.style.opacity = 1
}
cvvinput.addEventListener('input', updatecvvParapraph)
expiryinput.addEventListener('input', updateccexpiryParapraph)
numberinput.addEventListener('input', updateccNumberPara);

/* const cleave = new Cleave('.cardNumberinput', {
     creditCard: true,
     delimeter: '',
     onCreditCardTypeChanged: function (type) {
          console.log(type);
     }
})
console.log(Cleave); */