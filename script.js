const toggleNav = () => {
 document.body.dataset.nav = document.body.dataset.nav === "true" ? "false" : "true";
}

// toggle
const btn = document.getElementById("menu-btn")

function navToggle(){
 btn.classList.toggle("open")
}

btn.addEventListener("click", navToggle)