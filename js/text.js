//////////////////////////
///// first_text_box
//////////////////////////


//////////////////////////////////////// */

document.addEventListener("DOMContentLoaded", () => {
    const contentDivs = document.querySelectorAll(".fir_text_tags");
    const jsTextArray = [];
    contentDivs.forEach((e) => {
        const text = e.textContent; // textContent 사용
        const words = text.split(" "); // split 함수 사용

        const taggedWords = words
            .map((word) => {
                const span = `<span class="js_text">${word}</span>`;
                jsTextArray.push(span); // 배열에 추가
                return span; // 새로운 배열에 포함될 값으로 반환
            })
            .join(" ");

        e.innerHTML = taggedWords;
    });
    // gsap and ScrollTrigger initialization
    gsap.registerPlugin(ScrollTrigger);

    // Target all the .js_text elements
    const firText = document.querySelectorAll(".js_text");

    // console.log(firText); 글자넘버

    firText.forEach((i, n) => {
        gsap.fromTo(
            i, {
                opacity: 0,
                y: 20
            }, {
                opacity: 1,
                y: 0,
                scrollTrigger: {
                    trigger: i,
                    start: "top 70%", // Adjust start position as needed
                    end: "bottom 60%", // Adjust end position as needed
                    toggleActions: "play none none none",
                    once: true,
                },
                delay: n * 0.05, // Staggered animation effect
                duration: 0.2,
            }
        );
    });
    firText[4].style.paddingRight = "2%"
    firText[8].style.paddingRight = "2%"
    firText[11].style.paddingRight = "2%"
    firText[14].style.paddingRight = "2%"
    firText[25].style.paddingRight = "2%"
    firText[29].style.paddingRight = "2%"
    firText[38].style.paddingRight = "2%"
    firText[40].style.paddingRight = "2%"
});

/////////////////////////////////////////////////////////

document.addEventListener("DOMContentLoaded", () => {
    const contentDivs = document.querySelectorAll(".sec_text_tags");
    const jsTextArray = [];
    contentDivs.forEach((e) => {
        const text = e.textContent; // textContent 사용
        const words = text.split(" "); // split 함수 사용

        const taggedWords = words
            .map((word) => {
                const span = `<span class="js_text_sec">${word}</span>`;
                jsTextArray.push(span); // 배열에 추가
                return span; // 새로운 배열에 포함될 값으로 반환
            })
            .join(" ");

        e.innerHTML = taggedWords;
    });
    const secText = document.querySelectorAll(".js_text_sec");
    const secTextOne = document.querySelector(".sec_text_tags_one");
    const secTextTwo = document.querySelector(".sec_text_tags_two");
    const secTextThree = document.querySelector(".sec_text_tags_three");
    const secTextFour = document.querySelector(".sec_text_tags_four");

    // console.log(secText); 글자넘버

    let tl = gsap.timeline;

    let path1 = document.querySelector('#path');
    let path1Length = path1.getTotalLength(); //path의 길이

    let moveItem = document.querySelector('.move_item')

    animation = 0
    animation = gsap.to(".move_item", {
        offsetDistance: "100%",
        scrollTrigger: {
            trigger: ".slide_box_wrap",
            start: "top 10%",
            end: "+=180%",
            containerAnimation: scrollTween,
            scrub: 1,
            onUpdate: animationUpdate,
        }
    })


    function animationUpdate() {
        let pg = animation.progress()
        let popItmes = document.querySelectorAll(".pop_item")
        // console.log(pg);
        let secondBox=document.querySelector(".text_wrap")

        if (pg >= 0.389) {
            popItmes[0].classList.add("ani_start")
        }
        else if (pg <= 0.38) {
            popItmes[0].classList.remove("ani_start")
        };
        if (pg >= 0.52) {
            popItmes[1].classList.add("ani_start")
        }
        else if (pg <= 0.518) {
            popItmes[1].classList.remove("ani_start")
        };
        if (pg >= 0.815) {
            moveItem.style.opacity = 0
            moveItem.style.transition = "0.3s"
        };
        if (pg <= 0.815) {
            moveItem.style.opacity = 1
            moveItem.style.transition = "0s"
        };
        if (pg <= 0.82) {
            secondBox.style.opacity=1
        };
    }
    tl({
        scrollTrigger: {
            trigger: ".second_box_text",
            start:"left 45%",
            end:"+=10%",
            containerAnimation: scrollTween,
            scrub: 1,
        }
    })
    .fromTo(secTextOne, {
        x: -20,
        opacity: 0,
    }, {
        x: 0,
        opacity: 1,
    }, 0)
    .fromTo(secTextTwo, {
        y: -20,
        opacity: 0,
    }, {
        y: 0,
        opacity: 1,
    }, 0.5)
    .fromTo(secTextThree, {
        y: 20,
        opacity: 0,
    }, {
        y: 0,
        opacity: 1,
    }, 1)
    .fromTo(secTextFour, {
        x: 20,
        opacity: 0,
    }, {
        x: 0,
        opacity: 1,
    }, 1.5);
   


    secText[5].style.marginRight = "1.5%"
    secText[8].style.marginRight = "1.5%"
    secText[10].style.marginRight = "1.5%"
    secText[14].style.marginRight = "1.5%"
    secText[17].style.marginRight = "1.5%"
    secText[28].style.marginRight = "1.5%"
    secText[32].style.marginRight = "1.5%"
    secText[36].style.marginRight = "1.5%"
    secText[41].style.marginRight = "1.5%"
    secText[45].style.marginRight = "1.5%"
    secText[51].style.marginRight = "1.5%"
    secText[56].style.marginRight = "1.5%"
    secText[64].style.marginRight = "1.5%"
    secText[68].style.marginRight = "1.5%"
    secText[70].style.marginRight = "1.5%"
    secText[72].style.marginRight = "1.5%"
    secText[76].style.marginRight = "1.5%"
})