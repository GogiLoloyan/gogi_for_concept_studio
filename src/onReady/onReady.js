let top = 1500;
let lastTop = 0;

function initP4DescSecScroll(DOM) {

    const p4Desc = DOM.p4Desc;
    const p4DescSec = DOM.p4DescSec.style;
    const lerp = (a, b, n) => (1 - n) * a + n * b;

    let winHeight;
    const calcWinsize = () => winHeight = window.innerHeight;
    calcWinsize();
    window.addEventListener('resize', calcWinsize);

    const render = () => {
            top =  p4Desc.getBoundingClientRect().top + winHeight * 9 / 10;
            lastTop = lerp(lastTop, top, 0.3);  
            p4DescSec.top = lastTop + "px";
        requestAnimationFrame(render);
    };
    requestAnimationFrame(render);
};

////////////////////////////////////////////

let isSmall = false;
let isClicked = false;

function initScrollLef(DOM) {
    const { p4DescSec, p4Desc } = DOM;
    
    let winWidth;
    window.addEventListener('resize', handleResize);
   
    function handleResize(){
        winWidth = window.innerWidth;

        if(!isSmall && winWidth <= 1024){
            isSmall = true;
            p4DescSec.classList.add("classTest");
            p4DescSec.style.setProperty("--p4-left", 0);

            p4Desc.addEventListener("click", onRigth);
            p4Desc.addEventListener("wheel", onWeelRigth);
            p4Desc.addEventListener("touchstart", _onTouchStart);
            p4Desc.addEventListener("touchend", _onTouchEnd);
            p4DescSec.addEventListener("click", onLeft);
            p4DescSec.addEventListener("wheel", onWeelLeft);
            p4DescSec.addEventListener("touchstart", _onTouchStart);
            p4DescSec.addEventListener("touchend", _onTouchEnd);
        } else if(isSmall && winWidth > 1024){
            isSmall = false;
            p4Desc.style.left = 0;
            p4DescSec.classList.remove("classTest");
            p4DescSec.style.removeProperty("--p4-left", 0);

            p4Desc.removeEventListener("click", onRigth);
            p4Desc.removeEventListener("wheel", onWeelRigth);
            p4Desc.removeEventListener("touchstart", _onTouchStart);
            p4Desc.removeEventListener("touchend", _onTouchEnd);
            p4DescSec.removeEventListener("click", onLeft);
            p4DescSec.removeEventListener("wheel", onWeelLeft);
            p4DescSec.removeEventListener("touchstart", _onTouchStart);
            p4DescSec.removeEventListener("touchend", _onTouchEnd);
        }
    }
    const minDistance = 30;
    let swiping;

    const _onTouchStart = e => {
      swiping = e.changedTouches[0].clientX;
    }

    const _onTouchEnd = e => {
      const delta = swiping - e.changedTouches[0].clientX;
      if(delta && Math.abs(delta) > minDistance){
        !isClicked && delta > 0 && onRigth();
        isClicked && delta < 0 && onLeft();
      }
    }

    const onWeelLeft = e => isClicked && e.deltaX < 0 && onLeft();
    const onWeelRigth = e => !isClicked && e.deltaX > 0 && onRigth();

    const onRigth = () => {
        isClicked = true;
        p4Desc.style.left = "-100%";
        p4DescSec.classList.remove("classTest");
    }

    const onLeft = () => {
        isClicked = false;
        p4Desc.style.left = 0;
        p4DescSec.classList.add("classTest");
    }

    handleResize();
};

window.addEventListener('load', () => {
    const p4DescSec = document.querySelector(".p4-description-sec");
    const p4Desc = document.querySelector(".p4-description");
    const p4 = { p4Desc, p4DescSec };
    initP4DescSecScroll(p4);
    initScrollLef(p4)
})

/////////////////////////////////////////////////

window.addEventListener('load',()=>{
    document.querySelector(".page_1").style.setProperty("--play", "running");
    document.querySelector(".page-2").style.setProperty("--play", "running");
})
