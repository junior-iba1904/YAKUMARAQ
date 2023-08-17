window.addEventListener("scroll", function(){
    var header = document.querySelector(".barra");
    header.classList.toggle("abajo", window.scrollY>0);
}
)