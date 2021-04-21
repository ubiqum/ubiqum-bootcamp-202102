var readMoreBtn = document.querySelector('#moreBtn');


readMoreBtn.addEventListener('click',(e)=>{
  
  if(readMoreBtn.innerText === "Read More"){
    readMoreBtn.innerText = "Read Less";
  } else {
    readMoreBtn.innerText = "Read More";
  }
})

/*

$(document).ready(function(){
  $("#moreText").on("hide.bs.collapse", function(){
    $(".btn").innerHtml('Read More');
  });
  $("#moreText").on("show.bs.collapse", function(){
    $(".btn").innerHtml('Read Less');
  });
});


$(document).ready(function(){
$('.moreText').on('shown.collapse', function (e)=> {
  if (moreBtn.innerText === "Read More"){
    moreBtn.innerText = "Read Less";
  } else {
    moreBtn.innerText = "Read More";}
})}


  readMoreBtn.addEventListener('click',(e)=>{
    text.classList.toggle('show-more');
    if(moreBtn.innerText === "Read More"){
      moreBtn.innerText = "Read Less";
    } else {
      moreBtn.innerText =" Read More";
    }
  })


var readMoreBtn = document.querySelector('#moreBtn');
var text = document.querySelector('.text');

readMoreBtn.addEventListener('click',(e)=>{
  text.classList.toggle('show-more');
  if(moreBtn.innerText === "Read More"){
    moreBtn.innerText = "Read Less";
  } else {
    moreBtn.innerText =" Read More";
  }
})


$(function() {
  var btn = $("[id='#moreBtn']");
  var toggled = false;
  btn.on("click", function() {
      if(!toggled)
      {
        toggled = true;
        btn.text("Read less");
      } else {
        toggled = false;
        btn.text("Read more");
      }
  });
});

*/