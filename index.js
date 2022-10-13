const navbarE1 =document.querySelector(".navbar");

const bottomContainertE1 =document.querySelector(".bottom-container");

console.log(navbarE1.offsetHeight);

console.log(bottomContainerE1.offsetTop);

window.addEventListener("scroll", () => {
    console.log(window.scrollY);
    if(window.scrollY >bottomContainerE1.offsetTop- navbarE1.offsetHeight -50){
        navbarE1.classList.add("active");
    }
    else{
        navbarE1.classList.remove("active");
    }
});
