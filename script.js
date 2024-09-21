function loading() {
  var tl = gsap.timeline();

  tl.to("#yellow1", {
    top: "-100%",
    delay: 0.5,
    duration: 0.7,
    ease: "expo.out",
  });

  tl.from(
    "#yellow2",
    {
      top: "100%",
      delay: 0.5,
      duration: 0.7,
      ease: "expo.out",
    },
    "anim"
  );

  tl.to(
    "#loader h1",
    {
      delay: 0.6,
      color: "black",
    },
    "anim"
  );
  tl.to("#loader", {
    opacity: 0,
  });

  tl.to("#loader", {
    display: "none",
  });
}
loading();

function loco(){
    const scroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true,
      });
      
      var elems = document.querySelectorAll(".elem")
      var page2 = document.querySelector("#page2")
      
      elems.forEach(function(ele){
          ele.addEventListener("mouseenter",function(){
              var bgimg = ele.getAttribute("data-img")
              page2.style.backgroundImage = `url(${bgimg})`
          })
      })
      
      document.querySelector("#footer h2, #footer i").addEventListener("click",function(){
          scroll.scrollTo(0);
      })
}
loco()
var menu = document.querySelector("#right-nav i")
var tl=gsap.timeline()
tl.to("#right-nav i",{
    rotate:-45
})
tl.from("#right-nav h2",{
    x:100,
    opacity:0,
    stagger:0.2
})

tl.pause()
var isReversed = false;

menu.addEventListener("click",function(){
  if(isReversed){
    tl.reverse();
  }
  else{
    tl.play();
  }
  isReversed=!isReversed;
})

