

var slider = new Swiper(".swiper-container", {
    slidesPerView: 'auto',
    spaceBetween: 900,
    centeredSlides: true,
    mousewheel: true
  })
  
  slider.on('slideChange', function () {
    TweenMax.to('.slide-text span', .2, {
      y: '-100px',
    })
    TweenMax.to('.slide-number span', .2, {
      x: '-200px',
    })
    TweenMax.to('button', .2, {
        opacity: '0',
      })
    TweenMax.to('.swiper-slide-active', .5, {
      scale: .85
    })
  })
  
  slider.on('slideChangeTransitionEnd', function () {
  
    TweenMax.to('.slide-text span', .2, {
      y: 0,
      delay: .5
    })
    TweenMax.to('.slide-text span', 0, {
      y: '100px',
    })
  
    TweenMax.to('.slide-number span', .2, {
      x: 0,
      delay: .7
    })
    TweenMax.to('.slide-number span', 0, {
      x: '300px',
    })
    TweenMax.to('button', .2, {
        opacity: 100,
        y: '110px',
        delay: 1,
        ease: Power4.easeIn,
      })
      TweenMax.to('button', 0, {
        y: '110px',
        opacity: 0,
      })
    TweenMax.to('.swiper-slide-active', .5, {
      scale: 1,
      ease: Power4.easeOut,
    })
  
    TweenMax.to('.swiper-slide-active .slide-text button', 0, {
      autoAlpha: 1
    })
    TweenMax.to('.swiper-slide-active .slide-number button', 0, {
      autoAlpha: 1
    })
  
    TweenMax.to('.swiper-slide-next .slide-text button', 0, {
      autoAlpha: 0
    })
    TweenMax.to('.swiper-slide-prev .slide-text button', 0, {
      autoAlpha: 0
    })
  
    TweenMax.to('.swiper-slide-next .slide-number button', 0, {
      autoAlpha: 0
    })
    TweenMax.to('.swiper-slide-prev .slide-number button', 0, {
      autoAlpha: 0
    })
  })
  
  TweenMax.to('.swiper-slide-next .slide-text button', 0, {
    autoAlpha: 0
  })
  TweenMax.to('.swiper-slide-prev .slide-text button', 0, {
    autoAlpha: 0
  })
  
  TweenMax.to('.swiper-slide-next .slide-number button', 0, {
    autoAlpha: 0
  })
  TweenMax.to('.swiper-slide-prev .slide-number button', 0, {
    autoAlpha: 0
  })
  
  TweenMax.to('.swiper-slide', 0, {
    scale: .85,
  })
  
  TweenMax.to('.swiper-slide-active', 0, {
    scale: 1,
  })

  /* Shopify js */
  var client = ShopifyBuy.buildClient({
    domain: 'https://toomuchnotenough.myshopify.com/',
    storefrontAccessToken: '16a9e9d953ce4a321a521e491175a654', // previously apiKey, now deprecated
  });