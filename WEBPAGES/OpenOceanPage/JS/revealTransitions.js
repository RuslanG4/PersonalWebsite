const checkpoint = 600;
const checkpoint2 = 650;
const checkpoint3 = 800;

function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    const currentScroll = window.scrollY;

    if(checkpoint>=currentScroll)
    {

      for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;



        console.log(currentScroll);
      
        if (elementTop < windowHeight - elementVisible) {
          reveals[i].classList.add("active");
        } else {
          reveals[i].classList.remove("active");
        }
      }
    }
    else {
      for (var i = 0; i < reveals.length; i++) {
      reveals[i].classList.add("active");
    }
    }
  }


  function revealR(){
    var reveals = document.querySelectorAll(".revealR");

    const currentScroll = window.scrollY;

    if(checkpoint2 >=currentScroll)
    {
    
        for (var i = 0; i < reveals.length; i++) {
          var windowHeight = window.innerHeight;
          var elementTop = reveals[i].getBoundingClientRect().top; //top of element for scrolling
          var elementVisible = 150;  
        
          if (elementTop < windowHeight - elementVisible) { 
            reveals[i].classList.add("active");
          } else {
            reveals[i].classList.remove("active");
          }
        }
    }
    else{
      for (var i = 0; i < reveals.length; i++) {
        reveals[i].classList.add("active");
      }
    }
    
}

function revealL(){
   var reveals = document.querySelectorAll(".revealL");
   const currentScroll = window.scrollY;
   if(checkpoint3 >=currentScroll)
   {
     for (var i = 0; i < reveals.length; i++) {
       var windowHeight = window.innerHeight;
       var elementTop = reveals[i].getBoundingClientRect().top; //top of element for scrolling
       var elementVisible = 150; 
     
       if (elementTop < windowHeight - elementVisible) {
         reveals[i].classList.add("active");
       } else {
         reveals[i].classList.remove("active");
       }
     }
   }
   else{
    for (var i = 0; i < reveals.length; i++) {
      reveals[i].classList.add("active");
    }
   }
}

function update(){
  reveal();
  revealL();
  revealR();

  window.requestAnimationFrame(update);
}

window.requestAnimationFrame(update);


window.addEventListener("scroll", revealL);
window.addEventListener("scroll", revealR);
window.addEventListener("scroll", reveal);