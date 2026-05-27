async function copiarTexto() {
	try {
		await navigator.clipboard.writeText('gastongramajo1999@gmail.com');
		mostrarMensaje('¡Email copiado!');
	} catch (err) {
		console.error(err);
		mostrarMensaje('No se pudo copiar');
	}
}

function mostrarMensaje(msg) {
  const aviso = document.createElement('div');
  aviso.textContent = msg;
  aviso.style.position = 'fixed';
  aviso.style.bottom = '20px';
  aviso.style.left = '50%';
  aviso.style.transform = 'translateX(-50%)';
  aviso.style.background = '#000';
  aviso.style.color = '#fff';
  aviso.style.padding = '10px 20px';
  aviso.style.borderRadius = '8px';

  document.body.appendChild(aviso);

  setTimeout(() => {
    aviso.remove();
  }, 2000);
}

document.querySelector('.btn-mail')
	.addEventListener('click', copiarTexto);