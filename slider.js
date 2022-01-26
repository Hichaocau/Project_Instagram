// khởi tạo slick slider
//slick slider main 
$(document).ready(function(){
    $('.content__main-sider').slick({
        draggable: true, //kéo slider = chuột
        infinite: false,
        dots: true, //dấu chấm dưới slider css: slick-dots
        // arrows: false, //ẩn previous/next
        prevArrow: `<button type='button' class='slick-prev slick-arrow'><i class="fas fa-chevron-left"></i></button>`,
        nextArrow: `<button type='button' class='slick-next slick-arrow'><i class="fas fa-chevron-right"></i></button>`,
        responsive: [
            {
              breakpoint: 1025,
              settings: {
                dots: true
              }
            },
            {
              breakpoint: 741,
              settings: {
             
              }
            },
            {
              breakpoint: 480,
              settings: {
                arrows: false //ẩn mũi tên
              }
            }
          ],
    });
});

//slick slider header 
$(document).ready(function(){
    $('.content__header-slider').slick({
        draggable: true,
        infinite: false,
        slidesToShow: 7.5,
        slidesToScroll: 4,
        dots: false, //dấu chấm dưới slider css: slick-dots
        // arrows: false, //ẩn previous/next
        prevArrow: `<button type='button' class='slick-prev slick-arrow slick-arrow-header'><i class="fas fa-chevron-left"></i></button>`,
        nextArrow: `<button type='button' class='slick-next slick-arrow slick-arrow-header'><i class="fas fa-chevron-right"></i></button>`,
        responsive: [
            {
              breakpoint: 1025,
              settings: {
                dots: true
              }
            },
            {
              breakpoint: 741,
              settings: {
              slidesToShow: 6,     
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 6,
              }
            }
          ],
    });
});

// slick slider offer
$(document).ready(function(){
  $('.content__offer-list').slick({
      draggable: true,
      infinite: false,

      slidesToShow: 3,
      slidesToScroll: 2,
      dots: false, //dấu chấm dưới slider css: slick-dots
      // arrows: false, //ẩn previous/next
      prevArrow: `<button type='button' class='slick-prev slick-arrow slick-arrow-header'><i class="fas fa-chevron-left"></i></button>`,
      nextArrow: `<button type='button' class='slick-next slick-arrow slick-arrow-header'><i class="fas fa-chevron-right"></i></button>`,
      responsive: [
          {
            breakpoint: 1025,
            settings: {
              dots: false
            }
          },
          {
            breakpoint: 741,
            settings: {
            infinite: false,

            slidesToShow: 3,  
            slidesToScroll: 1,
            }
          },
          {
            breakpoint: 480,
            settings: {
            infinite: false,

            slidesToShow: 2,
            slidesToScroll: 1,
            }
          }
        ],
  });
});
