console.log('init')

// Модальное окно
document
  .getElementById('open-popup-btn')
  .addEventListener('click', function () {
    document.getElementById('popup').classList.toggle('open')
  })

document.getElementById('popup-close').addEventListener('click', function () {
  document.getElementById('popup').classList.remove('open')
})

// Карта
document.getElementById('open-map-btn').addEventListener('click', function () {
  document.getElementById('map-display').classList.toggle('active')
})

// Маска
var phoneMask = IMask(document.getElementById('phone'), {
  mask: '+{7}(000)000-00-00',
})

// Кнопка формы
const submitButton = document.getElementById('submit')
const input = document.getElementById('phone')
const checkbox = document.getElementById('checkbox')

input.addEventListener('change', (e) => {
  const value = e.currentTarget.value
  submitButton.disabled = false
  if (value === '' || (value.length < 16 && checkbox.checked === false)) {
    submitButton.disabled = true
  }
})

submitButton.addEventListener('click', (e) => {
  if (submitButton.disabled !== true && checkbox.checked === true) {
    alert('Успешно!')
  }
})

// Меню бургер
document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('burger').addEventListener('click', function () {
    document.getElementById('header').classList.toggle('open')
  })
})
