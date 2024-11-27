function validarFormulario() {
    // Limpiar mensajes de error
    document.getElementById('errorNombre').textContent = '';
    document.getElementById('errorEmail').textContent = '';
    document.getElementById('errorPassword').textContent = '';
    document.getElementById('errorPasswordConfirm').textContent = '';

    // Obtener valores de los campos
    var nombre = document.getElementById('nombre').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var password_confirm = document.getElementById('password_confirm').value;

    var esValido = true;

    // Validar nombre
    if (nombre === '') {
        document.getElementById('errorNombre').textContent = 'El nombre es obligatorio.';
        esValido = false;
    }

    // Validar correo electrónico
    var regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (email === '') {
        document.getElementById('errorEmail').textContent = 'El correo electrónico es obligatorio.';
        esValido = false;
    } else if (!regexEmail.test(email)) {
        document.getElementById('errorEmail').textContent = 'El formato del correo electrónico no es válido.';
        esValido = false;
    }

    // Validar contraseña
    if (password === '') {
        document.getElementById('errorPassword').textContent = 'La contraseña es obligatoria.';
        esValido = false;
    }

    // Validar confirmación de contraseña
    if (password_confirm === '') {
        document.getElementById('errorPasswordConfirm').textContent = 'Debes confirmar la contraseña.';
        esValido = false;
    } else if (password !== password_confirm) {
        document.getElementById('errorPasswordConfirm').textContent = 'Las contraseñas no coinciden.';
        esValido = false;
    }

    return esValido;  // Si es true, el formulario se envía; si es false, no.
}