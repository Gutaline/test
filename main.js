var page = document.querySelector('.body')
var themeButton = document.querySelector('.toggle')

themeButton.onclick = function () {
  page.classList.toggle('darkTheme')
}
