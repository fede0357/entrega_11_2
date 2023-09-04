const URL = `//jsonplaceholder.typicode.com/users`;
const form = document.getElementById('formulario');
const nombre = document.getElementById('name').value;
const apellido = document.getElementById('apellido').value;
const nacimiento = document.getElementById('fechaNacimiento').value;


form.addEventListener("submit", () => {
    const data = {
        nombre,
        apellido,
        nacimiento
    }
});

fetch(URL, {
    method: "post",
    
})