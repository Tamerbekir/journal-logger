let clear = document.getElementById("clear");
let goBack = document.getElementById("goBack");

if (clear) {
    addEventListener("click", function () {
        localStorage.clear();
        location.reload();
    });
}

if (goBack) {
    addEventListener('click', function(){
        window.location.replace('./index.html');
    });
}

