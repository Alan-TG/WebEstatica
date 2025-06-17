document.addEventListener('DOMContentLoaded', function () {
    console.log('CDTA - Web Estática cargada correctamente.');

    const form = document.getElementById('contact-form');
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        const nombre = document.getElementById('nombre').value;
        const mensaje = document.getElementById('mensaje').value;
        alert(`Gracias, ${nombre}. Hemos recibido tu mensaje: "${mensaje}"`);
        form.reset();
    });
});
