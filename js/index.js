$(document).ready(function() {
    $('#pagepiling').pagepiling({
        menu: '#myMenu',
        direction: 'vertical',
        verticalCentered: true,
        sectionsColor: [],
        anchors: ["home", "about", "portfolio", "contact"],
        scrollingSpeed: 700,
        easing: 'swing',
        loopBottom: false,
        loopTop: false,
        css3: true,
        navigation: {
            'textColor': '#000',
            'bulletsColor': '#000',
            'position': 'right',
            'tooltips': ['A', 'W', 'S', 'J']
        },
        normalScrollElements: null,
        normalScrollElementTouchThreshold: 5,
        touchSensitivity: 5,
        keyboardScrolling: true,
        sectionSelector: '.section',
        animateAnchor: false,

        //events
        onLeave: function(index, nextIndex, direction){},
        afterLoad: function(anchorLink, index){},
        afterRender: function(){},
    });
});

function openLightBox(){
    const modal = $('.modal');
    $('.show-modal').on('click', function() {
        modal.fadeIn();
        $('#open-modal-btn').css( "visibility", "hidden" );
        $('.close-modal').css( "visibility", "visible" );
    });

    $('#close-modal-link').on('click', function() {
        $('#open-modal-btn').css( "visibility", "visible" );
        $('.close-modal').css( "visibility", "hidden" );
        modal.fadeOut();
    })

    $('.close-modal').on('click', function() {
        $('#open-modal-btn').css( "visibility", "visible" );
        $('.close-modal').css( "visibility", "hidden" );
        modal.fadeOut();
    });
}
openLightBox();