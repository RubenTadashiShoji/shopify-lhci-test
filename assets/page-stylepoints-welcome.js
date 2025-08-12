console.log('top');
$(".reward-points-accordion").on("click",function() {
    // testing
    console.log('klikt');
    $(this).next().slideToggle({easing:"linear"});
});


