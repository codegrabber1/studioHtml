/**
 * Created by oleg on 17.01.2016.
 */
jQuery(document).ready(function($){
    // adaptive menu
    // menu
    $('.toggle-menu').on('click', function(){
        $(this).toggleClass('on');
        $('.top_menu').slideToggle();
    });

    // slider
    var owl = $(".carousel");
    owl.owlCarousel({
        autoHeight : true,
        responsive : true,
        slideSpeed : 600,
        autoPlay: 5000,
        navigation : false,
        paginatioinSpeed : 400,
        singleItem : true
    });
    owl.on("mousewheel", ".owl-wrraper", function(e){
        if (e.deltaY > 0) {
            owl.trigger("owl.prev");
        } else {
            owl.trigger("owl.next");
        }
        e.preventDefault();
    });
    $(".next_button").click(function(){
        owl.trigger("owl.next");
    });
    $(".prev_button").click(function(){
        owl.trigger("owl.prev");
    });

    // parallax precess
    $.stellar();

}); // end ready