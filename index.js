var nav=gsap.timeline();

nav.from(".left",{
    y: -20,
    opacity:0,
    duration:0.7,
    delay: 0.5,
})

nav.from(".para",{
    delay: -0.5,
    y: -20,
    opacity:0,
    duration: 0.7,
    stagger: 0.1
})


nav.from("h1",{
    opacity:0,
    duration: 1,
})


nav.to(".page2 p",{
    transform:"translateX(-45%)",
    scrollTrigger :{
        trigger: ".page2",
        scroller:"body",
        // markers:true,
        start: "top 0%",
        end:"top -100%",
        scrub:2 ,
        pin:true
    }
})

main= document.querySelector("body");
cursor= document.querySelector(".cursor");

main.addEventListener("mousemove",(dets)=>{
    gsap.to(cursor,{
        x:dets.x,
        y:dets.y,
        ease: "back.out",
        duration: 0.5
    })
});

string=document.querySelector(".string");
main =document.querySelector("#main");

initialPath=`M 20 100 Q 500 100 980 100`;

string.addEventListener("mousemove",(dets)=>{
    console.log(dets.x +" "+ dets.y);
    var c1=250*(dets.y-320)/(300);
    var c2=1300*(dets.x-175)/(1000);
    path=`M 20 100 Q ${c2} ${c1} 980 100`;

    gsap.to(".string svg path",{

        attr:{d:path},
        duration: .3
    })
})

string.addEventListener("mouseleave",()=>{
    gsap.to(".string svg path",{
        attr:{d:initialPath},
        ease: "elastic.out(1,0.2)"
    })
})

gsap.from(".heading",{
    opacity:0,
    duration:1,
    scrollTrigger: {
        trigger: ".heading",
        scroller:"body",
        // markers:true,
        start: "top 90%",
        end:"top 30%",
        scrub:1 ,

    }
})