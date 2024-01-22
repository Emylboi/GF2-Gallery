let modal = document.querySelector("#modal");
let btnClose = document.querySelector(".close");
let img = document.querySelectorAll(".img");
let imgInModal = document.querySelector("#modal-img");

img.forEach((element) => {
  element.addEventListener("click", (e) => {
    let imgSrc = e.target.getAttribute("src");
    imgInModal.setAttribute("src", imgSrc);
    /* modal.style.display = "block"; */
    modal.classList.add("blockShow");
  });
});

function closeModal() {
  modal.classList.remove("blockShow");
}

btnClose.addEventListener("click", closeModal);

/* btnClose.addEventListener("click", () => {
  modal.style.display = "none";
}); */

function windowCloseModal(e) {
  if (e.target == modal) {
    /* modal.style.display = "none"; */
    modal.classList.remove("blockShow");
  }
}

window.addEventListener("click", windowCloseModal);
