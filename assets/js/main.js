async function copiarTexto() {
  try {
    await navigator.clipboard.writeText('gastongramajo1999@gmail.com');
    alert('¡Gmail copiado al portapapeles!');
  } catch (err) {
    alert('Error al copiar texto: ', err);
  }
}

const github = document.querySelectorAll('.github')
github.forEach(b => {
    b.addEventListener('click', () => {
        window.open('https://github.com/gastongramajo99', '_blank')
    })
})

const cv = document.querySelectorAll('.cv')
cv.forEach(b => {
  b.addEventListener('click', () => {
    window.open('https://gastongramajo99.github.io/portafolio/assets/curriculum_vitae.pdf', '_blank')
  })
})

const imgBoletin = document.querySelector('.img-boletin')
imgBoletin.addEventListener('click', () => {
  window.open('https://boletin-oficial-6a5h.onrender.com', '_blank')
})

const gitBoletin = document.querySelector('.gitBoletin')
gitBoletin.addEventListener('click', () => {
    window.open('https://github.com/gastongramajo99/boletin-oficial', '_blank')
})

const boletin = document.querySelector('.boletin')
boletin.addEventListener('click', () => {
    window.open('https://boletin-oficial-6a5h.onrender.com', '_blank')
})