document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById("changeTextButton").addEventListener("click", function() {
        document.getElementById("demo").innerHTML = "Text changed!";
    });
});
