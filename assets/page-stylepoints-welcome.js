// import { jQuery } from '@jquery';

// require(['jquery'], function(jQuery) {

    jQuery(".reward-points-accordion").on("click",function() {
        /*console.log(jQuery(this).next());*/
        jQuery(this).next().slideToggle({easing:"linear"});

    });

// })
