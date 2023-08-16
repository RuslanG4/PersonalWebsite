var move = 0;

if($(window).width() < 500)
{
  moveActiveHorizontal($("#scroll-image-three"));
}

function selectActive() {
  $(".content").click(function() {
    var elem=$(window).width();
    if(elem < 500)
    {
      assignValueHorizontal(this);
      moveActiveHorizontal(this);
    }
    else{
    assignValue(this);
    moveActive(this);
    }
    bigBoxColor(this);
});
}

function assignValueHorizontal(div){
  $(".content").removeClass("active");
  $(div).addClass("active");
}

function assignValue(div) {
  $(".content").removeClass("active");
  $(div).addClass("active");
  $(div).children("img").animate({
    left:50
  },100);
}

function moveActive(content) {
  var middle = $(".viewBox").offset().top + 180;
  var contentPos = $(content).offset().top
  if (contentPos < middle) {
    move = middle - contentPos;
    $(content).animate({
      top: '+=' + move + 'px',
      width: 350
    });
    $(content).children(".inside").animate({
      width: 350
    });
    moveAll(content, move);
  } else {
    move = contentPos - middle;
    $(content).animate({
      top: '-=' + move + 'px',
      width: 350
    });
    $(content).children(".inside").animate({
      width: 350
    });
    moveAll(content, -move);
  }
}

function moveActiveHorizontal(content){
  var middle = ($(window).width() - 200) / 2;
  var contentPos = $(content).offset().left;
  if (contentPos < middle) {
    move = middle - contentPos;
    $(content).animate({
      left: '+=' + move + 'px',
    });
    moveAllHori(content, move);
  } else {
    move = contentPos - middle;
    $(content).animate({
      left: '-=' + move + 'px',
    });
    moveAllHori(content, -move);
  }
}


function moveAllHori(div, move) {
  $(".content").not(div).animate({
    left: '+=' + move + 'px',
  })

}


function moveAll(div, move) {
  $(".content").not(div).animate({
    top: '+=' + move + 'px',
    width: 200
  })
  $(".content").not(div).children(".inside").animate({
    width: 0
  });
  $(".content").not(div).children("img").animate({
    left:30
  },100);
}

$("#imgText").text("Image 3 extend");

function bigBoxColor(div) {

  let index = $(div).data("index");

  switch (index) {
    case 0:
      $("#bigImage").attr("src","../../IMG/code.webp");
      $("#imgText").text("Image 1 extend");
      break;
    case 1:
      $("#bigImage").attr("src","../../IMG/jp.webp");
      $("#imgText").text("Image 2 extend");
      break;
    case 2:
      $("#bigImage").attr("src","../../IMG/code.webp");
      $("#imgText").text("Image 3 extend");
      break;
    case 3:
      $("#bigImage").attr("src","../../IMG/jp.webp");
      $("#imgText").text("Image 4 extend");
      break;
    case 4:
      $("#bigImage").attr("src","../../IMG/code.webp");
      $("#imgText").text("Image 5 extend");
      break;
  }

}

$(document).ready(function() {
  selectActive();
});

function checkContentOverFlow(){
  var divs = document.querySelectorAll(".content");

  for(let i=0;i<divs.length;i++)
  {
    if($(window).width() < 500)
    {
      var middle = -400 - (($(window).width() - 200) / 2);

      if($(divs[i]).position().left < middle)
      { 
        $(divs[i]).css({"left" : -middle + 'px'});
      }
      if($(divs[i]).position().left > -middle)
      { 
        $(divs[i]).css({"left" : middle + 'px'})
      }
   
    }
    else{
      if($(divs[i]).position().top<-180)
    { 
      $(divs[i]).css({"top" : '480px'});
    }
    if($(divs[i]).position().top>480)
    { 
      $(divs[i]).css({"top" : '-120px'});
    }
    }
  }

}


function checks(){
  checkContentOverFlow();
	window.requestAnimationFrame(checks);
}
	window.requestAnimationFrame(checks);
