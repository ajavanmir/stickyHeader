/*
Copyright amir javanmir
Released on: Jan 9, 2024
*/
const header = document.querySelector("header");
window.addEventListener("scroll", function(event){
    console.log(this);
    event.preventDefault();
    header.classList.toggle("sticky", this.scrollY > 0)
})