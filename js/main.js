AOS.init({
    easing: 'ease-in-out-back',
    offset: 0,
});

lazyload();

(function () {  
    var modalBtns = document.querySelectorAll('.modal-open');
    // open buttons
    modalBtns.forEach(function(btn) {
        btn.onclick = function() {
            let modal = btn.getAttribute('data-modal');
            document.getElementById(modal).style.display = 'block';
        }
    });
    // close buttons
    var closeBtns = document.querySelectorAll('.modal-close');
    closeBtns.forEach(function(btn) {
        btn.onclick = function() {
            let modal = btn.closest('.modal').style.display = 'none';
        }
    })
    // close modals clicking anywhere on body
    window.onclick = function(e){
        if(e.target.classList.contains('modal')){
            e.target.style.display = 'none';
        }
    };
}());

// navToggle

(function () {
    const btn = document.getElementById('menuBtn');
    const nav = document.getElementById('menu');

    btn.addEventListener('click', function() {
    nav.classList.toggle('menu');
    })
  }());

// swiper init

var swiper = new Swiper('.swiper-container', {
    spaceBetween: 30,
    hashNavigation: {
        watchState: true,
    },
    speed: 800,
        loop: true,
    //   effect: 'fade',
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    });
    
    // carousel active
    const slide1 = document.getElementById('past');
    slide1.addEventListener('click', function() {
        slide1.classList.toggle('bg-green-100');
        slide2.classList.remove('bg-red-100');
        slide3.classList.remove('bg-blue-100');
    })
    const slide2 = document.getElementById('present');
    slide2.addEventListener('click', function() {
        slide2.classList.toggle('bg-red-100');
        slide1.classList.remove('bg-green-100');
        slide3.classList.remove('bg-blue-100');
    })
    const slide3 = document.getElementById('future');
    slide3.addEventListener('click', function() {
        slide2.classList.remove('bg-red-100');
        slide1.classList.remove('bg-green-100');
        slide3.classList.toggle('bg-blue-100');
    })

    


            

