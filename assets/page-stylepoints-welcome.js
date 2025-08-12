import { jQuery } from '@jquery';

// require(['jquery'], function(jQuery) {

    $(".reward-points-accordion").on("click",function() {
        /*console.log(jQuery(this).next());*/
        $(this).next().slideToggle({easing:"linear"});

    });

// })
