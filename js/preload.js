let preload = document.querySelector(".preload")

function showLoadingScreen() {
    document.body.classList.add('loading');
    window.scrollTo(0, 0);
}

function hideLoadingScreen() {
    document.body.classList.remove('loading');
}

showLoadingScreen();
setTimeout(function () {
    gsap.to(preload, {
        yPercent: -150,
        duration: 1.5,
        onUpdate:function scrollPrevent(){
            showLoadingScreen();
            sp= requestAnimationFrame(scrollPrevent)//2번줄
            setTimeout(()=>{
                cancelAnimationFrame(sp);
                hideLoadingScreen();//6번줄
            }, 10);
        },
    })
}, 7500);