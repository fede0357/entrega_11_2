const URL = `https://jsonplaceholder.typicode.com/users`;
const form = document.getElementById('formulario');

form.addEventListener("submit", (e) => {
    e.preventDefault();
    
    const nombre = document.getElementById('name').value;
    const apellido = document.getElementById('apellido').value;
    const nacimiento = document.getElementById('fechaNacimiento').value;

    
    const data = {
        nombre,
        apellido,
        nacimiento
    };

    fetch(URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(resultado => {
        console.log(resultado); 
    })
    .catch(error => {
        alert('Error');
    });
});