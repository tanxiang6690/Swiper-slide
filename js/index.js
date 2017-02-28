'use strict';

require(['theme'], function(theme) {
    var param1 = {
        // style: 1,
        speed: 2000,
        items: [{
            link: '#2',
            src: './img/food-banner.jpg'
        }, {
            link: '#2',
            src: './img/cloth-banner.jpg'
        }, {
            link: '#3',
            src: './img/avatartree-bannar.jpg'
        }]
    };
    theme.mySlider('#swiper1', param1);




    var param2 = {
        style:2,
        speed: 1000,
        items: [{
            link: '#1',
            src: 'img/guess-banner.jpg'
        }, {
            link: '#2',
            src: 'img/shoes-banner.jpg'
        }, {
            link: '#3',
            src: 'img/wall-banner.jpg'
        }, {
            link: '#4',
            src: 'img/slides-food-1.jpg'
        }, {
            link: '#5',
            src: 'img/slides-food-2.jpg'
        }]
    };
    theme.mySlider('#swiper2', param2);
})
