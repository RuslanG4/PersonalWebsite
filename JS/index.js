function openNav()
{
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

  window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("navbar").style. backgroundColor = "#141414";
  } else {
    document.getElementById("navbar").style.backgroundColor = "transparent";
  }
}
  function dropDown() {
    document.getElementById("myDropdown").classList.toggle("show");
  }


