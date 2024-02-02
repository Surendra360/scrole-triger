gsap.from(".page1 .box1",{
    rotate:360,
    duration:1,
    delay:1,
    scale:0
})
gsap.from(".page2 .box1",{
    rotate:360,
    duration:1,
    scale:0,
    scrollTrigger:{
        trigger: ".page2 .box1",
        scroller:"body",
        markers:true,
        start: "top 50%",
        end:"top 30%",
        scrub:5
       // scrub:true,  //true se koi smothness nahi aaegi "true" ki jagah 1,2...5 me se koi ek number dene se smothness milti h acording to number
    }
    
})