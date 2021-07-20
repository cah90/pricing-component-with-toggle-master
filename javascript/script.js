const cardPrice = document.querySelectorAll(".price__value")
const isAnnuallyChecked = document.querySelector('#checkbox')

function changePrice() {

  if(!isAnnuallyChecked.checked) {
    cardPrice[0].innerHTML = '249.99'
    cardPrice[1].innerHTML = '199.99'
    cardPrice[2].innerHTML = '399.99'
  } else {
    cardPrice[0].innerHTML = '19.99'
    cardPrice[1].innerHTML = '24.99'
    cardPrice[2].innerHTML = '39.99'
  }
}