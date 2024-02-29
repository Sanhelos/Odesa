const swiper = new Swiper('.slider-vidio', {


    autoHeight: true,

    obserwer: true,
    spaceBetween: 0,
    speed: 600,





    navigation: {
        nextEl: '.slider-vidio__swiper-button-next',
        prevEl: '.slider-vidio__swiper-button-prev',

    },
    breakpoints: {
        300: {
            slidesPerView: 1.2,
            spaceBetween: 20,
        },
        540: {
            slidesPerView: 1.6,
            spaceBetween: 20,
        },
        780: {
            slidesPerView: 2.3,
            spaceBetween: 40,
        },
        1100: {
            slidesPerView: 2.2,
            spaceBetween: 40,
        },
        1440: {
            slidesPerView: 3.3,
            spaceBetween: 40,
        },
    }
});


const tabnavitem = document.querySelectorAll('.tabnavitem')
const tabitem = document.querySelectorAll('.tabitem')
document.addEventListener('click', function (e) {
    let curent = null;
    let newcurent = null;
    const targetElement = e.target;
    if (targetElement.closest('.tabnavitem')) {
        tabnavitem.forEach((tabnavitem, index) => {
            if (tabnavitem.classList.contains('active')) {
                curent = index;
                tabnavitem.classList.remove('active');
            }
            if (tabnavitem === targetElement) {
                newcurent = index;
            }
        });
        targetElement.classList.add('active');
        tabitem[curent].classList.remove('active');
        tabitem[newcurent].classList.add('active');
    }

});






    

    const swiper2 = new Swiper('.slider-articles', {
	

	
        slidesPerView: 1,
    obserwer: true,
    speed: 800,
    
	pagination: {
		el: '.slider-articles-swiper-pagination',
        type: "progressbar",
	},
	


    navigation: {
        nextEl: '.slider-articles__button-next',
        prevEl: '.slider-articles__button-prev',
    },
    breakpoints: {

        425: {
        slidesPerView: 1.1,
        spaceBetween: 5,
        autoHeight: true,
        },
        710: {
        slidesPerView: 1.3,
        spaceBetween: 15,
        },
        940: {
        slidesPerView: 2.3,
        spaceBetween: 20,
        },
        1300: {
        slidesPerView: 3.1,
        spaceBetween: 20,
        },
    }
    });







    const animItems = document.querySelectorAll('[data-anims]');
if (animItems.length > 0) {
window.addEventListener('scroll', animOnScroll);
	function animOnScroll() {
		for (let index = 0; index < animItems.length; index++) { 
			const animItem = animItems [index];
			const animItemHeight = animItem.offsetHeight
			const animItemOffset = offset (animItem).top;
			const animStart = 4;

			let animItemPoint = window.innerHeight - animItemHeight / animStart;
			if (animItemHeight > window.innerHeight) {
				animItemPoint = window.innerHeight - window.innerHeight / animStart;
			}

			if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) { 
				animItem.classList.add('_active-anim');
			} 
            //else {
			//	animItem.classList.remove('_active-anim');
			//}

			animItemPoint = window.innerHeight - animItemHeight / animStart;
			if (animItemHeight > window.innerHeight) {
				animItemPoint = window.innerHeight - window.innerHeight / animStart;
			}
			if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
				animItem.classList.add('_active');
			} else {
				//remove class
				//animItem.classList.remove('_active');
			}
		}
	}

	function offset(el) {
		const rect = el.getBoundingClientRect(),
			scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
			scrollTop = window.pageYOffset ||document.documentElement.scrollTop;
		return {top: rect.top + scrollTop, left: rect.left + scrollLeft }
	}
	
	//setTimeout (() => {
	//	animOnScroll();
	//}, time );

	animOnScroll();

	
}


