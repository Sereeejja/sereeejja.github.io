let lastScroll = false;

window.addEventListener("load", () => {

    window.addEventListener("scroll", () => {
        if(window.scrollY > 0) {
            if(lastScroll === false) {
                document.documentElement.classList.toggle("scrolled");
                lastScroll = true;
            }
        } else {
            if(lastScroll === true) {
                document.documentElement.classList.toggle("scrolled");
                lastScroll = false;
            }
        }
    })
});