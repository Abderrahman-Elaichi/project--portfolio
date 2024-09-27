const toTop= document.querySelector(".back-top")

window.addEventListener("scroll", () => {
    if(pageYOffset > 75){
        toTop.classList.add("active")
    }else{
        toTop.classList.remove("active")
    }
})

const burger= document.querySelector(".burger")
const sidebar= document.querySelector(".links")
const links= document.querySelectorAll(".links li a")

burger.addEventListener("click", toggleSidebar)

links.forEach(link => {
    link.addEventListener("click", toggleSidebar)
})

function toggleSidebar(){
    sidebar.classList.toggle("show")
}



var swiper = new Swiper(".mySwiper", {
   
    loop:true,
    centeredSlides:true,
    autoplay:{
        delay:9500,
        disableOnInteraction:false,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
       
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
    },
  });


  var icon = document.getElementById("icon");
   

  icon.onclick = function(){
document.body.classList.toggle("light-theme")
if(document.body.classList.contains("light-theme")){
    icon.classList= "fa-solid fa-moon"
}
else{
    icon.classList= "fa-solid fa-sun"
}

  }