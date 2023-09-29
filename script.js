let tl = gsap.timeline()

tl.from( "#nav img, #nav-part2 , #nav-part3" , {
    y : -100,
    duration : 1,
    opacity : 0,
    stagger : 0.5
} )

tl.from("#left-top , #left-bottom , #right-top , #right-bottom" , {
    y : 200,
    opacity : 0 , 
    stagger : 0.5,
    duration : 0.8,
    // scale : 0
})

tl.from("h1" , {
    x : -200,
    opacity : 0,
    stagger : 1,
    duration : 1
})

tl.from("#scroll" , {
    y : -30,
    repeat : -1,
    yoyo : true,
    opacity : 0,
    duration : 0.7
})