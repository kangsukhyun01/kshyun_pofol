gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(CustomEase)

function lenis() {
    const lenis = new Lenis()

    lenis.on('scroll', (e) => {
        // console.log(e)
    })

    lenis.on('scroll', ScrollTrigger.update)

    gsap.ticker.add((time) => {
        lenis.raf(time * 1000)
    })

    gsap.ticker.lagSmoothing(0)
}
lenis();
/////////////////////////////////lenis/////////////////////////////////

////////////////// preload///////////////////

////////////////// preload///////////////////

let tl = gsap.timeline;
//////////////////////////////////////////////////
///////////////// bg_move
//////////////////////////////////////////////////

/* let bgMoveOne = document.querySelector('.bg_move_one')
let bgMoveBox = document.querySelector('.bg_move_box')
let moveEvent = function (e) {
    let bgMoveOneRect = bgMoveOne.getBoundingClientRect() // wrapper에 대한 공간정보 getBoundingClientRect (넓이,높이, 띄워저있는 거리)
    // console.log(bgMoveOneRect)

    let relX = e.clientX - (bgMoveOneRect.left + bgMoveOneRect.width / 2)
    let relY = e.clientY - (bgMoveOneRect.top + bgMoveOneRect.height / 2)

    let bgMoveBoxMaxDisplacement = 125;

    let bgMoveBoxDisplacement = (relY / bgMoveOneRect.height) * bgMoveBoxMaxDisplacement

    let bgMoveBoxDisplacementX = (relX / bgMoveOneRect.width) * bgMoveBoxMaxDisplacement
    let bgMoveBoxDisplacementY = (relY / bgMoveOneRect.height) * bgMoveBoxMaxDisplacement

    gsap.to(bgMoveOne, {
        x: -bgMoveBoxDisplacementX,
        y: -bgMoveBoxDisplacementY,
        xPercent: -50,
        yPercent: -50,
        duration: 0.35,
        ease: "power3.out"
    })
}
bgMoveOne.addEventListener('mousemove', moveEvent) */

//////////////////////////////////////////////////
///////////////// first_img rotate
//////////////////////////////////////////////////

let imgs = document.querySelectorAll(".img_item")

let imgLen = imgs.length
let imgRotate = 360 / imgLen

imgs.forEach((e, i) => {
    gsap.set(e, {
        rotateY: imgRotate * i * 0.8,
        y: -1000
    })
    gsap.to(e, {
        rotateY: 360,
        y: 0,
        scrollTrigger: {
            trigger: ".first_box",
            start: "top 50%",
            end: "+=50%",
            scrub: 1,
        },
        delay: 0.5,
    })
})



//////////////////////////////////////////////////
///////////////// first_box svg circle
//////////////////////////////////////////////////

let firstBox = document.querySelector(".first_box")
let svgItem = document.querySelector(".svgAni")

/* ScrollTrigger.create({
    trigger: firstBox,
    start: "top 80%",
    toggleClass: {targets: svgItem, className: "playani"}
  }); */


//////////////////////////////////////////////////
///////////////// second_box text move
//////////////////////////////////////////////////

let txtMoveOne = document.querySelector('.second_box')
let txtMoveBox = document.querySelector('.second_box_text')
let txtmoveEvent = function (e) {
    let txtMoveOneRect = txtMoveOne.getBoundingClientRect() // wrapper에 대한 공간정보 getBoundingClientRect (넓이,높이, 띄워저있는 거리)
    // console.log(bgMoveOneRect)

    let relX = e.clientX - (txtMoveOneRect.left + txtMoveOneRect.width / 2)
    let relY = e.clientY - (txtMoveOneRect.top + txtMoveOneRect.height / 2)

    let txtMoveBoxMaxDisplacement = 65;

    let txtMoveBoxDisplacement = (relY / txtMoveOneRect.height) * txtMoveBoxMaxDisplacement

    let txtMoveBoxDisplacementX = (relX / txtMoveOneRect.width) * txtMoveBoxMaxDisplacement
    let txtMoveBoxDisplacementY = (relY / txtMoveOneRect.height) * txtMoveBoxMaxDisplacement

    // gsap.to(txtMoveBox, {
    //     x: txtMoveBoxDisplacementX,
    //     y: txtMoveBoxDisplacementY,
    //     duration: 0.35,
    //     ease: "power3.out"
    // })

}
txtMoveOne.addEventListener('mousemove', txtmoveEvent)

//////////////////////////////////////////////////
///////////////// svgScroll
//////////////////////////////////////////////////

let initalPath = "M1 683.625V87.6251C381 -27.875 622 -27.875 1001 87.6251V683.625H1Z"
let targetPath = "M1 597.625V1.62505C350 158 670.5 136.5 1001 1.62505V597.625H1Z"

let svgWraps = document.querySelectorAll(".svg_container");



svgWraps.forEach((svgWrap) => {
    let itemSvg = svgWrap.querySelector("svg path")
    itemSvg.setAttribute("d", initalPath)


    gsap.to(itemSvg, {
        attr: {
            d: targetPath
        },
        scrollTrigger: {
            trigger: svgWrap,
            start: "top 90%",
            ease: "linear",
            scrub: 1,
        }
    })

})

gsap.to(".svg_aria", {
    opacity: 0,
    scrollTrigger: {
        trigger: ".intro_page_two",
        start: "top 1%",
        end: "left left",
        scrub: 1,
        ease: CustomEase.create("custom", "M0,0 C0.972,0 0,0 0.987,0 1,1 0.983,0.052 1,1 "),
        // markers: true,
    }
})

//////////////////////////////////////////////////
///////////////// 가로 스크롤
//////////////////////////////////////////////////

let pageTwo = document.querySelector(".intro_page_two")
let slideBox = document.querySelector(".slide_box")
let slideImg = document.querySelectorAll(".slide_box_wrap")

let scrollTween = gsap.to(slideImg, {
    xPercent: -50,
    ease: "none",
    delay: 1,
    scrollTrigger: {
        trigger: ".two-wrap",
        start: "top top",
        scrub: 1,
        end: "+=600%",
        pin: true,
    }
}, 0);

//////////////////////////////////////////////////
///////////////// three_box
//////////////////////////////////////////////////

let boxThree = document.querySelector(".three_box")

let skillImgOne = document.querySelectorAll(".skill_imgs_one .skill_img_item")
let skillImgTwo = document.querySelectorAll(".skill_imgs_two .skill_img_item")
let skillImgThree = document.querySelectorAll(".skill_imgs_three .skill_img_item")
// console.log(skillImgThree);
tl({
        scrollTrigger: {
            trigger: boxThree,
            start: "top top",
            end: "+=450%",
            scrub: 1,
            pin: true,
        }
    })
    .to(skillImgOne[0], {
        y: 1630,
        scale: 0.7,
        opacity: 0.5
    })
    .to(skillImgOne[1], {
        y: 1630,
        scale: 0.7,
        opacity: 0.5
    }, 0.08)
    .to(skillImgOne[2], {
        y: 1630,
        scale: 0.7,
        opacity: 0.5
    }, 0.16)
    .to(skillImgOne[3], {
        y: 1630,
        scale: 0.7,
        opacity: 0.5
    }, 0.23)
    .to(skillImgOne[4], {
        y: 1630,
        scale: 0.7,
        opacity: 0.5
    }, 0.30)
    .to(skillImgOne[5], {
        y: 1630,
        scale: 0.7,
        opacity: 0.5
    }, 0.38)
    .to(skillImgOne[6], {
        y: 1630,
        scale: 0.7,
        opacity: 0.5
    }, 0.46)
    .to(skillImgOne[7], {
        y: 1630,
        scale: 0.7,
        opacity: 0.5
    }, 0.54)
    .to(skillImgOne[8], {
        y: 1630,
        scale: 0.7,
        opacity: 0.5
    }, 0.62)
    ///////
    .to(skillImgTwo[0], {
        y: -1630,
        scale: 0.7,
        opacity: 0.5
    }, 0)
    .to(skillImgTwo[1], {
        y: -1630,
        scale: 0.7,
        opacity: 0.5
    }, 0.08)
    .to(skillImgTwo[2], {
        y: -1630,
        scale: 0.7,
        opacity: 0.5
    }, 0.16)
    .to(skillImgTwo[3], {
        y: -1630,
        scale: 0.7,
        opacity: 0.5
    }, 0.24)
    .to(skillImgTwo[4], {
        y: -1630,
        scale: 0.7,
        opacity: 0.5
    }, 0.31)
    .to(skillImgTwo[5], {
        y: -1630,
        scale: 0.7,
        opacity: 0.5
    }, 0.38)
    .to(skillImgTwo[6], {
        y: -1630,
        scale: 0.7,
        opacity: 0.5
    }, 0.46)
    .to(skillImgTwo[7], {
        y: -1630,
        scale: 0.7,
        opacity: 0.5
    }, 0.54)
    .to(skillImgTwo[8], {
        y: -1630,
        scale: 0.7,
        opacity: 0.5
    }, 0.62)
    /////
    .to(skillImgThree[0], {
        y: 1630,
        scale: 0.7,
        opacity: 0.5
    }, 0)
    .to(skillImgThree[1], {
        y: 1630,
        scale: 0.7,
        opacity: 0.5
    }, 0.07)
    .to(skillImgThree[2], {
        y: 1630,
        scale: 0.7,
        opacity: 0.5
    }, 0.15)
    .to(skillImgThree[3], {
        y: 1630,
        scale: 0.7,
        opacity: 0.5
    }, 0.23)
    .to(skillImgThree[4], {
        y: 1630,
        scale: 0.7,
        opacity: 0.5
    }, 0.31)
    .to(skillImgThree[5], {
        y: 1630,
        scale: 0.7,
        opacity: 0.5
    }, 0.39)
    .to(skillImgThree[6], {
        y: 1630,
        scale: 0.7,
        opacity: 0.5
    }, 0.47)
    .to(skillImgThree[7], {
        y: 1630,
        scale: 0.7,
        opacity: 0.5
    }, 0.55)
    .to(skillImgThree[8], {
        y: 1630,
        scale: 0.7,
        opacity: 0.5
    }, 0.63)
//////////////////////////////////////////////////
///////////////// skill_circle
//////////////////////////////////////////////////


let MAX = 100;
let circleProgressInstances = [];

document.querySelectorAll(".progress").forEach((progressEle, index) => {
    let initialvalue = document.querySelectorAll(".value-input")[index].value;
    let classText = document.querySelectorAll(".skill h3")[index].innerHTML;

    let cp = new CircleProgress(progressEle, {
        max: MAX,
        value: 0,
        animationDuration: 1500,
        textFormat: (val) => val
    });

    circleProgressInstances.push(cp);

    ScrollTrigger.create({
        trigger: ".skill_wrap",
        start: "top 50%",
        scrub: 1,
        onEnter: () => {
            cp.value = initialvalue;
        },
        onLeaveBack: () => {
            cp.value = 0;
        }
    })
});

let skill = document.querySelector(".skill")
let skillVal = document.querySelectorAll(".skill_item")

let skillTxt = document.querySelectorAll(".skill_text")
// scollTrigger
gsap.set(skillVal,{
    x:0,
    y:0
})
tl({
        scrollTrigger: {
            trigger: ".four_box",
            start: "top 60%",
            end: "+=35%",
            scrub: 1,
            ease: "none",
        }
    })
    .to(skillVal[0], {
        yPercent: -150,
        opacity: 1,
        delay: 1.75
    }, 2)
    .to(skillVal[1], {
        yPercent: -100,
        xPercent: 41.75,
        opacity: 1,
        delay: 1.75
    }, 2.2)
    .to(skillVal[2], {
        yPercent: 0,
        xPercent: 41.75,
        opacity: 1,
        delay: 1.75
    }, 2.4)
    .to(skillVal[3], {
        yPercent: 50,
        opacity: 1,
        delay: 1.75
    }, 2.6)
    .to(skillVal[4], {
        yPercent: 0,
        xPercent: -141.75,
        opacity: 1,
        delay: 1.75
    }, 2.8)
    .to(skillVal[5], {
        yPercent: -100,
        xPercent: -141.75,
        opacity: 1,
        delay: 1.75
    }, 2.8)
    .to(skillVal[6], {
        opacity: 1,
        delay: 1.75
    }, 2.9)

let skillTextWrap = document.querySelector(".skill_span_wrap")
let skillTextBox = document.querySelectorAll(".skill_text")
let skillTextHead = document.querySelectorAll(".skill_text_box h2")
let skillTextWall = document.querySelectorAll(".skill_text_box .wall")
let skillTextInfo = document.querySelectorAll(".skill_text_box p")


skillTextWall.forEach((e, i) => {
    tl({
            scrollTrigger: {
                trigger: ".four_box",
                start: "top 40%",
            }
        })
        .to(e, {
            width: 0,
            opacity: 0,
            duration: 1.5,
            ease: "power2.out",
        }, i * 0.055)
})
skillTextInfo.forEach((e, i) => {
    tl({
            scrollTrigger: {
                trigger: ".four_box",
                start: "top 40%",
            }
        })
        .to(e, {
            xPercent: 50,
            opacity: 1,
            delay: 0.25,
        }, i * 0.125)
})

//////////////////////////////////////////////////
///////////////// my_introduce
//////////////////////////////////////////////////

let cardWrap = document.querySelector(".project_wrap")
//------------------- 페이지 메뉴
let cardBtn=document.querySelectorAll(".project_card")
let menuBar = document.querySelector(".project_card_wrap")
let cardMenu = document.querySelector(".card_menu")
let cardContainer = document.querySelectorAll(".project_card_container")
let menuBtn = document.querySelectorAll(".card_text_box") /* 페이지 나오는 버튼 */
let fullPage = document.querySelectorAll(".card_img_box")


//------------------- 페이지 이미지

let papl = document.querySelector(".svg_wrap")

let = content = document.querySelectorAll(".content__item")
// let = contentItems = content.childNodes
//////////////////////////////////////////////////
///////////////// mywork_two
//////////////////////////////////////////////////

let mywrokTwo = document.querySelector("#mywork_two")
let myWrokTwoWrap = document.querySelectorAll(".mywork_two_wrap")
let myWrokItem = document.querySelectorAll(".mywork_item")



    myWrokItem.forEach((item) => {
        let myWrokItemImg = item.querySelector(".mywork_img")
        let myWrokItemImgBox = item.querySelector(".mywork_img_box")

    let mousemovemethod = function (e) {
        let y = e.deltaY;

        if (y > 0) {
            myWrokItemImgBox.style.transform = "rotate(-15deg)"
        } else if (y < 0) {
            myWrokItemImgBox.style.transform = "rotate(15deg)"
        }
    }

    let mouseMoveTimer; 

    document.addEventListener("wheel", function () {

        clearTimeout(mouseMoveTimer) //기존 타이머를 지움
        mouseMoveTimer = setTimeout(function () {
            myWrokItemImgBox.style.transform = "translateX(0%) rotate(0deg)"
        }, 100)

    })
    document.addEventListener("wheel", mousemovemethod)
})

let myWorkScroll = gsap.to(mywrokTwo, {
    xPercent: -50,
    ease: "none",
    delay: 1,
    scrollTrigger: {
        trigger: mywrokTwo,
        start: "top top",
        scrub: 1,
        end: "+=200%",
        pin: true,
    }
}, 0);







//////////////////////////////////////////////////
///////////////// end
//////////////////////////////////////////////////

let endsec = document.querySelector("#end")
let endText = document.querySelector("#end p")

gsap.to(endText, {
    opacity: 1,
    scale: 1,
    scrollTrigger: {
        trigger: endsec,
        start: "top 20%",
    }
})

let endImgOne = document.querySelector(".end_img")
let endSmile = document.querySelector(".end_smile")
let endSmileMouth = document.querySelector(".smile_mouth")
let endSec = document.querySelector("#end")
let endWrapRo = document.querySelector(".end_wrap")

let lastText=document.querySelector(".end_last_ani")
let lastTextWord=document.querySelectorAll(".end_ani_text")

let endAniBlock=document.querySelectorAll(".end_ani_block")
let endAniwall=document.querySelector(".text_wall")

let initalMouth = "M336.346 770.024C429.185 861.683 669.854 988.797 889.813 763.983"
let targetMouth = "M290 692H936V692C936 867.627 793.627 1010 618 1010H608C432.373 1010 290 867.627 290 692V692Z"

lastTextWord[2].style.marginRight="2%"
lastTextWord[6].style.marginRight="2%"
tl({
    scrollTrigger:{
        trigger:endSec,
        start:"top top",
        end:"+=250%",
        pin:true,
        scrub:1,
    }
})
.to(endWrapRo,{
    rotateY:180,
    duration:3
},2.5)
.to(endAniwall,{
    background: "linear-gradient(175deg, transparent 100%, #fff 0)",
    duration:2
})



