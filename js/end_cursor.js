const endWrap = document.querySelector('.end_wrap');
let cursou = document.querySelectorAll(".cursor_party");

document.addEventListener('mousemove', function (event) {
    const rect = endWrap.getBoundingClientRect();
    const offsetX = event.clientX - rect.left;
    const offsetY = event.clientY - rect.top;
    if (offsetX >= 0 && offsetY >= 0 && offsetX <= rect.width && offsetY <= rect.height) {
        // console.log('Offset X:', offsetX, 'Offset Y:', offsetY);
    }
    let corsourMoveY=offsetY + -20+ "px"
    let corsourMoveX=offsetX + -20+ "px"
    // console.log(corsourMoveY);
    // console.log(corsourMoveX);
    tl({

    })
    .to(cursou,{
        x:corsourMoveX,
        y:corsourMoveY,
        duration:0.2,
        stagger:0.03
    })
});

