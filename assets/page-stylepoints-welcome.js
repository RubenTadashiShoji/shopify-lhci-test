$(".reward-points-accordion").on("click",function() {
    console.log('klikt');
    $(this).next().slideToggle({easing:"linear"});
});


