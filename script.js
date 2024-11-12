Shery.mouseFollower();
Shery.makeMagnet(".magnet")
Shery.makeMagnet(".btndiv button")
Shery.hoverWithMediaCircle(".hvr",{videos:["0.mp4","2.mp4","3.mp4"] })

gsap.to(".left-elem",{
  scrollTrigger:{
    trigger: "#f-images",
    pin: true,
    start: "top top",
    bottom: "bottom bottom",
    endTrigger: ".last",
    scrub: 1,
  },
  y:"-300%",
  ease:Power1
})

let sections=document.querySelectorAll(".left-elem");
Shery.imageEffect(".images", {
  style: 5,
  config:{onMouse: {value:1}},
  slideStyle: (setScroll)=>{
    sections.forEach(function(section,index){
      ScrollTrigger.create({
        trigger: section,
        start: "top top",
        scrub: 1,
        onUpdate: function(prog){
          setScroll(prog.progress+index)
        },
      });
    });
  },
});