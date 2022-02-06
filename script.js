let cardnumber = document.querySelector('.card__number')
let expdate = document.querySelector('.card_expiry')
let ccN = document.getElementById('expDate')
let inputs = document.querySelectorAll('.form-group')
const updateccNumberPara = () => {
     let value = ccNumberInput.value
     ccNumberParapraph.innerHTML = value
}
ccNumberInput.addEventListener('input', updateccNumberPara)
const updateccccexpiryParapraph = () => {
     let value = ccNumberInput.value
     ccexpiryParapraph.innerHTML = value
}
ccNumberInput.addEventListener('input', updateccexpiryParapraph)