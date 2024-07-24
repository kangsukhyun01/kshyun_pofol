(function () {
    let items = document.querySelectorAll(".con_tit_imgs img")
    let numberOfItems = items.length;

    let angleIncrement = 360 / numberOfItems
    // console.log(angleIncrement)

    // items.forEach(function(item,index){
    //     gsap.set(item,{
    //         rotationY:90,
    //         rotationZ:index * angleIncrement - 90,
    //         transformOrigin:"50% 0"
    //     })
    // })

    window.addEventListener(
        "scroll",
        () => {
          document.body.style.setProperty(
            "--scroll",
            window.pageYOffset / (document.body.offsetHeight - window.innerHeight)
          );
        },
        false
      );
})();