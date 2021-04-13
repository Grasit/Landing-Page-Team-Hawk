
const showMenuButton = document.getElementById("show-menu");
const hideMenuButton = document.getElementById("hide-menu")

hideMenuButton.addEventListener("click", (event) => {
  document.querySelector('.logo-mobile').style.display = 'none';
  hideMenuButton.style.display = 'none'
  showMenuButton.style.display = 'block'
})

showMenuButton.addEventListener("click", (event) => {
  document.querySelector('.logo-mobile').style.display = 'block';
  showMenuButton.style.display = 'none'
  hideMenuButton.style.display = 'block'
})




