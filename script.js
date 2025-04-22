(function () {
    'use strict'

    var forms = document.querySelectorAll('.needs-validation')

    // Bucle sobre ellos y evitar el envío
    Array.prototype.slice.call(forms)
        .forEach(function (form) {
            form.addEventListener('submit', function (event) {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                }
                form.classList.add('was-validated')
            }, false)
        })

    const normalThemeButton = document.querySelector('.theme-buttons .normal-theme');
    const darkThemeButton = document.querySelector('.theme-buttons .dark-theme');
    const highContrastThemeButton = document.querySelector('.theme-buttons .high-contrast-theme');
    const body = document.body;

    normalThemeButton.addEventListener('click', () => {
        body.classList.remove('modo-oscuro', 'modo-alto-contraste');
    });

    darkThemeButton.addEventListener('click', () => {
        body.classList.remove('modo-alto-contraste');
        body.classList.add('modo-oscuro');
    });

    highContrastThemeButton.addEventListener('click', () => {
        body.classList.remove('modo-oscuro');
        body.classList.add('modo-alto-contraste');
    });
})()