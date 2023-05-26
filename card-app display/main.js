const humberger = document.querySelector(".humberger");
const ul = document.querySelector("ul");

humberger.addEventListener("click", () => {
    // humberger.style.
    ul.classList.toggle("ham_active");

    let ham_child = humberger.firstElementChild;
    if(ul.classList.contains("ham_active")){
        ham_child.classList.replace("fa-bars", "fa-xmark");
    } else {
        ham_child.classList.replace("fa-xmark", "fa-bars");
    }
})