var move = 0;

function selectActive() {
  $(".content").click(function() {
    assignValue(this);
    moveActive(this);
    bigBoxColor(this);
  });
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

function bigBoxColor(div) {

  let index = $(div).data("index");

  switch (index) {
    case 0:
      $("#bigImage").attr("src","../../IMG/code.webp");
      break;
    case 1:
      $("#bigImage").attr("src","../../IMG/jp.webp");
      break;
    case 2:
      $("#bigImage").attr("src","../../IMG/code.webp");
      break;
    case 3:
      $("#bigImage").attr("src","../../IMG/jp.webp");
      break;
    case 4:
      $("#bigImage").attr("src","../../IMG/code.webp");
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

function update(){
	checkContentOverFlow();
	window.requestAnimationFrame(update);
}
	window.requestAnimationFrame(update);
