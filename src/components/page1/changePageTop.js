let page = null;
let isFixed = true;
let lastTop = 0;
let currenTop = 100;

const lerp = (a, b, t) => {
    return (t < .5 ? 16 * t * t * t * t * t : 1 + 16 * (--t) * t * t * t * t) * (b - a) + a;
};

const pageTop = () => {
    lastTop = lerp(lastTop, currenTop, 0.34);
    page.top = `-${lastTop}vh`;
    if ((currenTop && lastTop.toFixed(1) < currenTop) || (lastTop.toFixed(1) > currenTop)) {
        requestAnimationFrame(pageTop);
    }
};

const changePageTop = pageStyle => {
    page = page || pageStyle;

    if (!pageStyle) {
        if (!isFixed) {
            currenTop = 0;
            requestAnimationFrame(pageTop);
            isFixed = true;
        }
        return;
    }
    isFixed = false;
    currenTop = 100;
    requestAnimationFrame(pageTop);
}

export default changePageTop;