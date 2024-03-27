
function handleSubmit(event) {

    event.preventDefault();

    var nameInput = document.getElementById('nameInput');
    var output = document.getElementById('output');

    var name = nameInput.value.trim();

    if (name === "") {
        alert("Pole pytania jest puste");
        return; 
    }

    var content = "Napisałeś pytanie! Poczekaj na odpowiedź<br>" + name;

    output.innerHTML = content;
}

var form = document.getElementById('myForm');

form.addEventListener('submit', handleSubmit);