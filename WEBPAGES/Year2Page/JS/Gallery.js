var move = 0;
let hasClicked= false;
let clickTimer=600;

function selectActive() {
$('.content').on('click', function(e){
  var $link = $(e.target);
  e.preventDefault();
  if(!$link.data('lockedAt') || +new Date() - $link.data('lockedAt') > 500) {
    var elem=$(window).width();
    if(elem < 1300)
    {
      assignValueHorizontal(this);
      if(elem<1000){
      moveActiveHorizontal(this);
      }
      bigBoxColor(this);
    }
    else{
    assignValue(this);
    moveActive(this);
    bigBoxColor(this);
    } 
  }
  $link.data('lockedAt', +new Date());
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
  var middle = ($(".gallery-container").width() - 200) / 2;
  var contentPos = $(content).position().left;
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
$("#explain-text").text("this is to explain image 3 extending text");

function bigBoxColor(div) {

  let index = $(div).data("index");

  switch (index) {
    case 0:
      $("#bigImage").attr("src","../../IMG/code.webp");
      $("#imgText").text("Image 5 extend");
      $("#explain-text").text("this is to explain image 5 extending text");
      break;
    case 1:
      $("#bigImage").attr("src","../../IMG/jp.webp");
      $("#imgText").text("Image 4 extend");
      $("#explain-text").text("this is to explain image 4 extending text");
      break;
    case 2:
      $("#bigImage").attr("src","../../IMG/code.webp");
      $("#imgText").text("Image 3 extend");
      $("#explain-text").text("this is to explain image 3 extending text");
      break;
    case 3:
      $("#bigImage").attr("src","../../IMG/jp.webp");
      $("#imgText").text("Image 2 extend");
      $("#explain-text").text("this is to explain image 2 extending text");
      break;
    case 4:
      $("#bigImage").attr("src","../../IMG/code.webp");
      $("#imgText").text("Image 1 extend");
      $("#explain-text").text("this is to explain image 1 extending text");
      break;
  }

}


$(document).ready(function() {
  if($(window).width()<1300 )
  {
      placeImagesHorizontal();
  }
  selectActive();
});


function placeImagesHorizontal(){
  var divs = document.querySelectorAll(".content");
  var middle = (($(".gallery-container").width() - 200) / 2);
  var place=middle + 400;

  for(let i=0;i<divs.length;i++)
  {
    $(divs[i]).css({"left" : place + 'px'});
    $(divs[i]).css({"top" : '0px'});
    place-=200;
  }
}

function placeImagesVertical(){
  var divs = document.querySelectorAll(".content");
  var place=-150;

  for(let i=0;i<divs.length;i++)
  {
    $(divs[i]).css({"left" : '0px'});
    $(divs[i]).css({"top" : place + 'px'});
    place+=150;
  }
}

function checkContentOverFlow(){
  var divs = document.querySelectorAll(".content");
  var middle = (($(".gallery-container").width() - 200) / 2);
  for(let i=0;i<divs.length;i++)
  {
    if($(window).width() < 1000)
    {
      if($(divs[i]).position().left< middle - 400)
      { 
        $(divs[i]).css({"left" : middle + 400 + 'px'});
      }
      if($(divs[i]).position().left>middle + 400)
      { 
        $(divs[i]).css({"left" : middle - 400 + 'px'});
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

let changeToVertical=true;
let changeToHorizontal=false;

function checks(){
  if($(window).width()<1300 && changeToVertical)
  {
      placeImagesHorizontal();
      changeToVertical = false;
  }
  if($(window).width()>1300 && !changeToVertical)
  {
    placeImagesVertical();
    changeToVertical = true;
  }
  if(hasClicked){
    clickTimer--;
    if(clickTimer<0)
    {
      clickTimer=600;
      hasClicked=false;
    }
  }
  checkContentOverFlow();
	window.requestAnimationFrame(checks);
}
	window.requestAnimationFrame(checks);
