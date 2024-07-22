var ctrh, ctrw;

if (window.innerWidth > 500) {
  ctrh = 1.5;
  ctrw = .7;
}
else {
  ctrh = 1.2;
  ctrw = 2.2;
}
gsap.registerPlugin(ScrollTrigger);
function loco(){

    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll
    
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector("#main"),
      smooth: true
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);
    
    // tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy("#main", {
      scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
      }, // we don't have to define a scrollLeft because we're only scrolling vertically.
      getBoundingClientRect() {
        return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
      },
      // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
      pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });
    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    
    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();
    
}
function navAnimation(){
    document.querySelector("#nav")
.addEventListener("mouseenter",function(){
     gsap.to(".cover",{
        height:"100%",
        ease:Expo.easeInout,
        duration:.5
     })
})
document.querySelector("#nav")
.addEventListener("mouseleave",function(){
     gsap.to(".cover",{
        height:"0%",
        ease:Expo.easeInout,
        duration:.5,
        stagger:.1
     })
})
document.querySelector("#nav")
.addEventListener("mouseleave",function(){
     gsap.to("#one",{
        height:"3%",
        ease:Expo.easeInout,
        duration:.5
     })
})
document.querySelector("#nav")
.addEventListener("mouseenter",function(){
     gsap.to(".cover h2",{
        opacity:1,
     })
})
document.querySelector("#nav")
.addEventListener("mouseleave",function(){
     gsap.to(".cover h2",{
        opacity:0,
     })
})
document.querySelector("#nav")
.addEventListener("mouseenter",function(){
     gsap.to(".options i",{
        opacity:0,
        duration:.1
     })
})
document.querySelector("#nav")
.addEventListener("mouseleave",function(){
     gsap.to(".options i",{
        opacity:1,
        duration:.1
     })
})
}
function twolineAnimation(){
    document.querySelector(".mtext")
    .addEventListener("mouseenter",function(){
          gsap.to(".line1",{
             width:"100%",
             ease:Expo.easeInout,
             duration:.3
          })
    })
    document.querySelector(".mtext")
    .addEventListener("mouseleave",function(){
          gsap.to(".line1",{
             width:"0%",
             left:"100%",
             ease:Expo.easeInout,
             duration:.3,
             onComplete:function(){
            document.querySelector(".line1")
                .style.left=0;
            }
          })
    })
    document.querySelector(".mtext")
    .addEventListener("mouseenter",function(){
          gsap.to(".line2",{
             width:"100%",
             ease:Expo.easeInout,
             duration:.3
          })
    })
    
    document.querySelector(".mtext")
    .addEventListener("mouseleave",function(){
          gsap.to(".line2",{
             width:"0%",
             left:"100%",
             ease:Expo.easeInout,
             duration:.3,
             onComplete:function(){
            document.querySelector(".line2")
                .style.left=0;
            }
          })
    })
}
function twolineAnimation2(){
   document.querySelector(".mtext1")
   .addEventListener("mouseenter",function(){
         gsap.to(".line3",{
            width:"100%",
            ease:Expo.easeInout,
            duration:.3
         })
   })
   document.querySelector(".mtext1")
   .addEventListener("mouseleave",function(){
         gsap.to(".line3",{
            width:"0%",
            left:"100%",
            ease:Expo.easeInout,
            duration:.3,
            onComplete:function(){
           document.querySelector(".line3")
               .style.left=0;
           }
         })
   })
   document.querySelector(".mtext1")
   .addEventListener("mouseenter",function(){
         gsap.to(".line4",{
            width:"100%",
            ease:Expo.easeInout,
            duration:.3
         })
   })
   
   document.querySelector(".mtext1")
   .addEventListener("mouseleave",function(){
         gsap.to(".line4",{
            width:"0%",
            left:"100%",
            ease:Expo.easeInout,
            duration:.3,
            onComplete:function(){
           document.querySelector(".line4")
               .style.left=0;
           }
         })
   })
}
function lineAnimation(){
   document.querySelectorAll(".text")
.forEach(function(text){
   text.addEventListener("mouseenter",function(dets){
        gsap.to(dets.target.children[1],{
            width:"100%",
            ease:Expo.easeInout,
            duration:.2
     })
   })
})
document.querySelectorAll(".text")
.forEach(function(text){
   text.addEventListener("mouseleave",function(dets){
        gsap.to(dets.target.children[1],{
            width:"0%",
            left:"100%",
            ease:Expo.easeInout,
            duration:.2,
            onComplete:function(){
               dets.target.children[1].style.left=0;
            }
     })
   })
})
}
function mtext(){
   var h1=document.querySelector("#fs h1");
   var clutter="";
   var temp=0;
   for(var i=0;i<=Math.floor(h1.textContent.length/2);i++){
     clutter+=`<span data-delay="${i}">${h1.textContent.charAt(temp)}</span>`;
     temp++;
   }
   for(var i=Math.floor(h1.textContent.length/2)-1;i>=0;i--)
   {
     clutter+= `<span data-delay="${i}">${h1.textContent.charAt(temp)}</span>`;
     temp++;
   }
   document.querySelector("#fs h1").innerHTML=clutter;
   document.querySelectorAll("#fs h1 span")
   .forEach(function(elem){
     gsap.to(elem,{
        y:0,
        ease:Expo.easeInout,
        duration:.8,
        delay:elem.dataset.delay*.1
     })
   }) 
}
function imgAnimation(){
   var tl=gsap.timeline();
 gsap.to("#fs .square img",{
   stagger:1,
   opacity:1,
   duration:.8,
   ease:Expo.easeInout
 })
 tl.to("#fs .square",{
   delay:.5,
   width:`${ctrw * 30}%`,
   height:`${40 * ctrh}%`,
   ease: Power3.easeInout,
   duration:.8
 })
 tl.to("#fs .square",{
   height: `${30 * ctrh}%`,
   width: `${ctrw * 40}%`,
   ease: Power3.easeInout,
   duration:.8
 })
 tl.to("#fs .square",{
   height: `${20 * 2}%`,
   width: `${ctrw * 30}%`,
   ease: Power3.easeInout,
   duration:.8
 })
 tl.to("#fs h1 span",{
   y:"-150%",
   duration:.5,
   ease:Expo.easeInout
 })
 tl.to("#fs .square",{
   width:"100%",
   height:"100%",
   ease: Power3.easeInout,
   duration:1,
   onComplete:function(){
      document.querySelector("#fs")
      .style.display="none";
      textAnimation();
   }
 })
}
function textAnimation(){
   document.querySelectorAll(".text h1")
   .forEach(function(harh1){
       var clutter= "";
       harh1.textContent.split("").forEach(function(char){
           if(char===" "){
               clutter+=`<span>&nbsp;</span>`;
           }
           else{
               clutter+=`<span>${char}</span>`;
           }
          
       });
       harh1.innerHTML= clutter;
   })
   document.querySelectorAll(".text h1").forEach(function(harh1){
       gsap.to(harh1.children,{
           scrollTrigger:{
             scroller:"#main",
             trigger:harh1,
             start:"top 80%"
           //   markers:true
           },
           y:0,
           ease:Expo.easeInout,
           duration:1,
           stagger:.1
       })
   })    
}
function textAnimation2(){
   document.querySelectorAll(".text1 h1")
   .forEach(function(harh1){
       var clutter= "";
       harh1.textContent.split("").forEach(function(char){
           if(char===" "){
               clutter+=`<span>&nbsp;</span>`;
           }
           else{
               clutter+=`<span>${char}</span>`;
           }
          
       });
       harh1.innerHTML= clutter;
   })
   document.querySelectorAll(".text1 h1").forEach(function(harh1){
       gsap.to(harh1.children,{
           scrollTrigger:{
             scroller:"#main",
             trigger:harh1,
             start:"top 80%"
           //   markers:true
           },
           y:0,
           ease:Expo.easeInout,
           duration:1,
           stagger:.1
       })
   })    
}
 loco();
mtext();
imgAnimation();
navAnimation();
twolineAnimation();
lineAnimation();
twolineAnimation2();

textAnimation2();



