const avatar = document.querySelector('.card__avatar')

avatar.addEventListener('touchstart', () => {
  avatar.classList.add('enlarged')
})

avatar.addEventListener('touchend', () => {
  avatar.classList.remove('enlarged')
})
