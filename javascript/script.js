const cardPrice = document.querySelectorAll(".price__value")
const checkedValue = document.querySelector('#checkbox')


function changePrice() {
  console.log(checkedValue.checked)

  if(checkedValue.checked == false) {
    cardPrice[1].innerHTML = '249.99'
    cardPrice[0].innerHTML = '199.99'
    cardPrice[2].innerHTML = '399.99'
  } else {
    cardPrice[1].innerHTML = '19.99'
    cardPrice[0].innerHTML = '24.99'
    cardPrice[2].innerHTML = '39.99'
  }
}