$(function () {

  var mixer = mixitup('.directions-list');

  $('.directions-filter-btn').on('click', function () {
    $('.directions-filter-btn').removeClass('directions-filter-btn--active')
    $(this).addClass('directions-filter-btn--active')
  })


  $('.team-slider').slick({
    arrows: false,
    infinity: true,
    slidesToShow: 4,
    draggable: true,
    waitForAnimate:false,
    responsive:
    [
      {
        breakpoint: 1100,
        settings: {
            slidesToShow: 3,
            centerMode: true,
            centerPadding: '40px',
        },
      },
      {
        breakpoint: 750,
        settings: {
            slidesToShow: 2
        },
      },
      {
        breakpoint: 550,
        settings: {
            slidesToShow: 1,
        },
      },
    ],
  })
  $('.slick-prev').on('click',  function (e){
    e.preventDefault()
    $('.team-slider').slick('slickPrev')
  })
  $('.slick-next').on('click',  function (e){
    e.preventDefault()
    $('.team-slider').slick('slickNext');
  })

  $('.testimonials_slider').slick({
    arrows: false,
    dots: true,
    waitForAnimate:false,
    appendDots: ('.testimonials_dots'),
  })
  $('.testimonials_prev').on('click',  function (e){
    e.preventDefault()
    $('.testimonials_slider').slick('slickPrev')
  })
  $('.testimonials_next').on('click',  function (e){
    e.preventDefault()
    $('.testimonials_slider').slick('slickNext');
  })
  
  
  $('.program-acc-link').on('click', function(e) {
    e.preventDefault()
    if ($(this).hasClass('program-acc-link--active')) {
      $(this).removeClass('program-acc-link--active')
      $(this).children('.program-acc-text').slideUp()
    } else {
      $('.program-acc-link').removeClass('program-acc-link--active')
      $('.program-acc-text').slideUp()
      $(this).addClass('program-acc-link--active')
      $(this).children('.program-acc-text').slideDown()
    }
  })

  $(document).on("click", ".footer_link-top", function(e) {
    e.preventDefault();
    $('body, html').animate({scrollTop: 0}, 800);
  });
  $(document).on("click", "nav a, .header__top-btn", function(e) {
    e.preventDefault();
    var id  = $(this).attr('href'),
    top = $(id).offset().top -100 
    $('body, html').animate({scrollTop: top}, 900); 
  })

  setInterval(() => {
    if ($(window).scrollTop()  > 0 && $('.header__top').hasClass('header__top--open') === false){
      $('.burger').addClass('burger--follow')
    } else {
      $('.burger').removeClass('burger--follow')
    }
  }, 0);

  $('.burger, .overlay, .header__top a').on('click', function(e) {
    e.preventDefault()
    $('.header__top').toggleClass('header__top--open')
    $('.overlay').toggleClass('overlay--show')
  })


  $('.footer_top_burger').on('click', function() {
    $(this).next().slideToggle()
  })

})