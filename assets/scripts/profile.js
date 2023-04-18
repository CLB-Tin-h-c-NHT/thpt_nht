var logged = JSON.parse(localStorage.getItem("logged"));

document.getElementById('nameID').textContent = logged.name;