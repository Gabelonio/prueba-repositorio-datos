window.onload = init;

function init() {
    var urlParams = new URLSearchParams(window.location.search);
    let queryString = urlParams.get("rating");
    document.getElementById("feedback").textContent = "You selected " +  queryString + " out of 5";
}


