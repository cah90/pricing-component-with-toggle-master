const cardPrice = document.querySelectorAll(".card__price")
const checkedValue = document.querySelector('#checkbox')


function changePrice() {
  checkedValue.removeAttribute("checked")

  checkedValue.setAttribute("unchecked", "unchecked")
  
  console.log(checkedValue.checked)

  if(checkedValue.checked == false) {
    cardPrice[1].innerHTML = '<span class="price__symbol">&dollar;</span> 249.99'
    cardPrice[0].innerHTML = '<span class="price__symbol">&dollar;</span> 199.99'
    cardPrice[2].innerHTML = '<span class="price__symbol">&dollar;</span> 399.99'
  } else {
    cardPrice[1].innerHTML = '<span class="price__symbol">&dollar;</span> 19.99'
    cardPrice[0].innerHTML = '<span class="price__symbol">&dollar;</span> 24.99'
    cardPrice[2].innerHTML = '<span class="price__symbol">&dollar;</span> 39.99'
  }
}