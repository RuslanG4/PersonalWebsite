const checkpoint = 350;

function reveal() {
    
    var reveals = document.querySelectorAll(".reveal");

    const currentScroll = window.scrollY;

if(checkpoint>=currentScroll)
{
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
}
else {
    opacity = 1;
}
  }
  
  window.addEventListener("scroll", reveal);