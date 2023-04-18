var logged = JSON.parse(localStorage.getItem("logged"));

document.getElementById('nameID').textContent = logged.name;

if (logged.typeLog === "teacher"){
    document.getElementById('classID').textContent = "Giáo viên";
    document.getElementById('rankID').textContent = "";
} else {
    document.getElementById('classID').textContent = logged.Class;
    document.getElementById('rankID').textContent = "";
}