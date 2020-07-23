$(function(){

  $('.slider__img').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider__title',
    draggable: false,
    speed: 500
  });

  $('.slider__title').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '300px',
    arrows: false,
    asNavFor: '.slider__img',
    responsive: [
      {
        breakpoint: 1300,
          settings: {
            centerPadding: '250px'
        }
      },
      {
        breakpoint: 1100,
          settings: {
            centerPadding: '200px'
          }
        },
        {
          breakpoint: 900,
            settings: {
              centerPadding: '150px'
            }
          },
          {
            breakpoint: 770,
              settings: {
                centerPadding: '120px'
              }
            },
            {
              breakpoint: 449,
                settings: {
                  centerPadding: '90px'
                }
              },
              {
                breakpoint: 380,
                  settings: {
                    centerPadding: '70px'
                  }
                }
              ]
  });

    let arr1 = document.querySelectorAll('.slider__img-box--left'),
        arr2 = document.querySelectorAll('.slider__img-box--center'),
        arr3 = document.querySelectorAll('.slider__img-box--right');

    let arrays = [...arr1, ...arr2, ...arr3];

    for(i=0; i<arrays.length; i++){
      let parallax = new Parallax(arrays[i], {
      hoverOnly: true,
      relativeInput: true
      });
    };

  $('.slick-slide').hover(function(){
    $('.drag').css('opacity', '1');
  }, function(){
    $('.drag').css('opacity', '0');
  });

  $('.menu-btn').on('click', function(){
      $('.menu-items').toggleClass('active');
    });
});