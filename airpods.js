const intro = document.querySelector(".intro");
const video = intro.querySelector("video");
const text = intro.querySelector("h1");

//SCROLLMAGIC
const controller = new ScrollMagic.Controller();

//Scenes
let scene = new ScrollMagic.Scene({
  duration: 12000,
  triggerElement: intro,
  triggerHook: 0
})
  .setPin(intro)
  .addTo(controller);

const textAnim = TweenMax.fromTo(text, 3, { opacity: 1 }, { opacity: 0 });

let scene2 = new ScrollMagic.Scene({
  duration: 5000,
  triggerElement: intro,
  triggerHook: 0
})
  .setTween(textAnim)
  .addTo(controller);


//Video Animation
let accelamount = 0.1;
let scrollpos = 0;
let delay = 0;

scene.on("update", e => {
  scrollpos = e.scrollPos / 1000;
});

setInterval(() => {
  delay += (scrollpos - delay) * accelamount;
  console.log(scrollpos, delay);

  video.currentTime = delay;
}, 40);



var image = document.getElementsByClassName('ione');
new simpleParallax(image, {
      scale: 1.1
});
var image = document.getElementsByClassName('itwo');
new simpleParallax(image, {
      scale: 1.1
});
var image = document.getElementsByClassName('ithree');
new simpleParallax(image, {
      scale: 1
});


var counter = 1;
setInterval(function(){
  document.getElementById('radio' + counter).checked = true;
  counter++;
  if(counter > 5){
    counter = 1;
  }
}, 8000);



document.addEventListener('scroll', ()=>{
  var scroll_position = window.scrollY;
  if(scroll_position > 12700){
      header.style.backgroundColor = "#6e6e73";
  }else{
      header.style.backgroundColor = "transparent";
  }
})




window.addEventListener('scroll', reveal);

function reveal(){
  var reveals = document.querySelectorAll('.features');
  for(var i = 0; i < reveals.length; i++){

    var windowheight = window.innerHeight;
    var revealtop = reveals[i].getBoundingClientRect().top;
    var revealpoint = 10;

    if(revealtop < windowheight - revealpoint){
      reveals[i].classList.add('active');
    }
    else{
      reveals[i].classList.remove('active');
    }
  }
}

