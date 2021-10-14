document.addEventListener('DOMContentLoaded', function() {
    eventListeners();
});

function eventListeners() {
    const DarkMode = document.querySelector('.darkmode');
    DarkMode.addEventListener('click', Dark);

}

function Dark() {
    const navegacion = document.querySelector('.fondo');
    navegacion.classList.toggle('fondooscuro')
    navegacion.classList.toggle('fondopredeterminado')
    dark_main();

}
function dark_main() {
    const navegacion = document.querySelector('.fondo2');
    navegacion.classList.toggle('fondooscuro')
    navegacion.classList.toggle('fondopredeterminado')
    dark_tittle();
}
function dark_tittle() {
    const navegacion = document.querySelector('.tittle');
    navegacion.classList.toggle('fondooscuro')
    navegacion.classList.toggle('fondopredeterminado')
}