AOS.init({
    easing: 'ease-in-out-back',
    offset: 0,
});

(function () {  
    var modalBtns = document.querySelectorAll('.modal-open');

    modalBtns.forEach(function(btn) {
        btn.onclick = function() {
            let modal = btn.getAttribute('data-modal');
            document.getElementById(modal).style.display = 'block';
        }
    });

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

// navToggle();

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
    autoplay: {
        delay: 4000,
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
    

    


            

