// nav toggle
// function navToggle() {
//     var btn = document.getElementById('menuBtn');
//     var nav = document.getElementById('menu');

//     btn.classList.toggle('open');
//     nav.classList.toggle('flex');
//     nav.classList.toggle('hidden');
// }

// navToggle();

const btn = document.getElementById('menuBtn');
const nav = document.getElementById('menu');

menuBtn.addEventListener('click', function() {
    nav.classList.toggle('hidden');
})

// modal
var openmodal = document.querySelectorAll('.modal-open')
    for (var i = 0; i < openmodal.length; i++) {
      openmodal[i].addEventListener('click', function(event){
    	event.preventDefault()
    	toggleModal()
      })
    }
    
    const overlay = document.querySelector('.modal-overlay')
    overlay.addEventListener('click', toggleModal)
    
    var closemodal = document.querySelectorAll('.modal-close')
    for (var i = 0; i < closemodal.length; i++) {
      closemodal[i].addEventListener('click', toggleModal)
    }
    
    document.onkeydown = function(evt) {
      evt = evt || window.event
      var isEscape = false
      if ("key" in evt) {
    	isEscape = (evt.key === "Escape" || evt.key === "Esc")
      } else {
    	isEscape = (evt.keyCode === 27)
      }
      if (isEscape && document.body.classList.contains('modal-active')) {
    	toggleModal()
      }
    };
    
    
    function toggleModal () {
      const body = document.querySelector('body')
      const modal = document.querySelector('.modal')
      modal.classList.toggle('opacity-0')
      modal.classList.toggle('pointer-events-none')
      body.classList.toggle('modal-active')
    }

    // swiper init
    // const swiper = new Swiper();

    var swiper = new Swiper('.swiper-container', {
        spaceBetween: 30,
        hashNavigation: {
          watchState: true,
        },
        // autoplay: {
        //     delay: 4000,
        //   },
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