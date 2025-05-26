const avatar = document.querySelector('.card__avatar')
const card = document.querySelector('.card')

if ('ontouchstart' in window || navigator.maxTouchPoints) {
  avatar.addEventListener('click', (event) => {
    avatar.classList.toggle('card__avatar--hovered')
    event.stopPropagation()
  })
  card.addEventListener('click', () => {
    avatar.classList.contains('card__avatar--hovered') && avatar.classList.remove('card__avatar--hovered')
  })
} else {
  avatar.addEventListener('mouseenter', () => {
    avatar.classList.add('card__avatar--hovered')
  })

  avatar.addEventListener('mouseleave', () => {
    avatar.classList.remove('card__avatar--hovered')
  })
}
