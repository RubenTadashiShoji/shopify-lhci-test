$(".reward-points-accordion").on("click",function() {
    // testing
    console.log('klikt this: '+$(this));
    $(this).next().slideToggle({easing:"linear"});
});


