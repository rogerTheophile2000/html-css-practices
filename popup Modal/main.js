const  popup = document.querySelector(".popup");
const openModalBtn = document.querySelector(".openModalBtn");
const closeModalBtn = document.querySelector(".closeModalBtn");


openModalBtn.addEventListener("click", () => {
    popup.classList.add("popup_open");
    console.log("open modal");
});



closeModalBtn.addEventListener("click", () => {
    popup.classList.remove("popup_open");
});