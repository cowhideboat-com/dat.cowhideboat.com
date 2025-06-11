document.addEventListener("DOMContentLoaded", function() {
    let noteCount = document.querySelectorAll(".grid button").length;
    document.querySelector("#noteCount span").textContent = noteCount;
});
