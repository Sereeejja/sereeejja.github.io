document.addEventListener('DOMContentLoaded', function() {
    let navbar = document.querySelector('.navbar')
    window.onscroll = () => {
    if (window.scrollY > 20) {
        navbar.classList.add('sticky');
    } else {
        navbar.classList.remove('sticky');
    }
};    
});

document.addEventListener('DOMContentLoaded', function() {
    const carouselInner = document.querySelector('.carousel-inner');
    let currentIndex = 0;
    const intervalTime = 3000; 

    function updateCarousel() {
        const itemWidth = carouselInner.children[0].offsetWidth;
        carouselInner.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
    }

    function autoSlide() {
        setInterval(function() {
            if (currentIndex === carouselInner.children.length - 1) {
                currentIndex = 0; 
            } else {
                currentIndex++;
            }
            updateCarousel();
        }, intervalTime);
    }

    autoSlide();
});

document.addEventListener('DOMContentLoaded', function() {
    var menuBtn = document.querySelector('.menu-btn')
    menuBtn.addEventListener('click', () => {
        var linkBar = document.querySelector('.menu')
        var header = document.querySelector('.navbar')
        header.classList.toggle('red')
        linkBar.classList.toggle('menu-visible')
    })

    function checkWindowWidth() {
        if (window.innerWidth > 768) {
            var linkBar = document.querySelector('.menu')
            var header = document.querySelector('.navbar')
            header.classList.remove('red')
            linkBar.classList.remove('menu-visible');
        }
    }

    checkWindowWidth();
    window.addEventListener('resize', checkWindowWidth);

});

document.addEventListener('DOMContentLoaded', function() {
    const Section = document.querySelectorAll('section[id]')
    function scrollctive() {
        const scrollY = window.scrollY
        
        Section.forEach(element => {
            const sectionHeight = element.offsetHeight
            const sectionTop = element.offsetTop - 50;
            let sectionId = element.getAttribute('id')
            if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
                let delSec = document.querySelector('.active')
                delSec.classList.remove('active')
                document.querySelector('.links a[href*=' + sectionId + ']').classList.add('active')
            }
        });
        if (Math.abs(scrollY + window.innerHeight - document.documentElement.scrollHeight) < 5) {
            let delSec = document.querySelector('.active');
            if (delSec) {
                delSec.classList.remove('active');
            }
            document.querySelector('.links a[href="#contacts"]').classList.add('active');
        }
    }
    window.addEventListener('scroll', scrollctive);
});
