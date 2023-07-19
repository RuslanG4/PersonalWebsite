const checkpoint = 600;
  
  function reveal() {
      var reveals = document.querySelectorAll(".text");
  
      const currentScroll = window.scrollY;
  
      if(checkpoint>=currentScroll)
      {
  
        for (var i = 0; i < reveals.length; i++) {
          var windowHeight = window.innerHeight;
          var elementTop = reveals[i].getBoundingClientRect().top;
          var elementVisible = 150;
        
          if (elementTop < windowHeight - elementVisible) {
            reveals[i].style.color = "aliceblue"
          } else {
            reveals[i].style.color = "transparent"
          }
        }
      }
      else {
        for (var i = 0; i < reveals.length; i++) {
        reveals[i].style.color = "aliceblue"
      }
      }
}


function update(){
    reveal();
    window.requestAnimationFrame(update);
  }
  
  window.requestAnimationFrame(update);



  
