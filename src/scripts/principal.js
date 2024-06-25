const mainContainer = document.getElementById("mainContainer");

mainContainer.addEventListener("click", (event) => {
    mainContainer.classList.add('scaled');
    setTimeout(() => {
        window.location.href = "http://localhost:8082/pokedex";
      }, 1500);
})
