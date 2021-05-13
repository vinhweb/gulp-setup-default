$(document).ready(function(){
  $('#customerSlider').slick({
    autoplay: true,
    dots: true,
    appendDots: '.customerSlideDots',
    slidesToShow: 5,
    infinite: true,
    touchThreshold: 10,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2
        }
      },
    ]
  });

  $('#giaiPhapSlide').slick({
    autoplay: true,
    dots: true,
    // appendDots: '.customerSlideDots',
    infinite: true,
    touchThreshold: 10,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
    ]
  });

  $('#contentSlide').slick({
    autoplay: true,
    dots: true,
    // appendDots: '.customerSlideDots',
    infinite: true,
    touchThreshold: 10,
    slidesToShow: 1,
    slidesToScroll: 1,
  });


  const menuBtn = $('.menuBtn')
  const menuHeader = $('#menuHeader')

  menuBtn.click(()=>{
    menuHeader.toggleClass('hidden')
    menuBtn.toggleClass('active')
  })
});
		