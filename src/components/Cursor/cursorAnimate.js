let clientX = -100;
let clientY = -100;

let lastX = 0;
let lastY = 0;
let isStuck = false;
let stuckX, stuckY;

function initP4DescSecScroll(cursors) {
    /* 
        requestAnimationFrame-ը վարյկյանում 60 անգամ
        a-ն ավելացնում է մինչև b-ին հասնելը՝ այսինքն
        big_cursor-ի դիրքը հավասարեցնում է small_cursor-ի դիրքին,
    */
    const bgStyle = cursors.bigCursor.style;
    const smStyle = cursors.smallCursor.style;
    const lerp = (a, b, n) => {
        return (1 - n) * a + n * b;
    };
    document.addEventListener("mousemove", e => {
        clientX = e.clientX;
        clientY = e.clientY;
    });
    const render = () => {
        if (!isStuck) {
            lastX = lerp(lastX, clientX, 0.18);
            lastY = lerp(lastY, clientY, 0.18);
            bgStyle.transform = `translate(${lastX - 7}px, ${lastY - 7}px)`;
        } else if (isStuck) {
            lastX = lerp(lastX, stuckX, 0.18);
            lastY = lerp(lastY, stuckY, 0.18);
            bgStyle.transform = `translate(${lastX}px, ${lastY}px)`;
        }
        smStyle.transform = `translate(${clientX}px, ${clientY}px)`;
        requestAnimationFrame(render);
    };
    requestAnimationFrame(render);
};

class cursorSlide {
    constructor(cursors) {
        [this.bigCursor, this.smallCursor] = cursors;
        document.querySelectorAll(".page-3__slide-outer .draggable").forEach(item => {
            item.addEventListener("mouseenter", this.handleMouseEnter);
            item.addEventListener("mouseleave", this.handleMouseLeave);
            item.addEventListener("pointermove", this.handleMouseOn);
        });
    }
    handleMouseEnter = () => {
        this.smallCursor.add("enterSlider");
        this.bigCursor.add("hidden");
    };
    handleMouseLeave = () => {
        this.smallCursor.remove("enterSlider");
        this.bigCursor.remove("hidden");
    };
    handleMouseOn = (e) => {
        clientX = e.clientX;
        clientY = e.clientY;
    };
}
class cursorFull {
    constructor(cursors) {
        [this.bigCursor, this.smallCursor] = cursors;
        document.querySelectorAll("h1, h2, .inner-circle").forEach(item => {
            item.addEventListener("mousemove", this.handleMouseEnter);
            item.addEventListener("mouseleave", this.handleMouseLeave);
        });
    }
    handleMouseEnter = e => {
        this.bigCursor.add("hidden");
        this.smallCursor.add("enterheader");
    };
    handleMouseLeave = e => {
        this.bigCursor.remove("hidden");
        this.smallCursor.remove("enterheader");
    };
}
class cursorMagnet {
    constructor(cursors) {
        [this.bigCursor, this.smallCursor] = cursors;
        document.querySelectorAll(".page-2 .body-images img, .page-2 .nav span, .page_1 .menu_list li, .page-6 .footer__menu .menu li").forEach(item => {
            item.addEventListener("mousemove", this.handleMouseEnter);
            item.addEventListener("mouseleave", this.handleMouseLeave);
        });
    }
    handleMouseEnter = e => {
        const hoverItem = e.currentTarget;
        const { top, left, width, height } = hoverItem.getBoundingClientRect();
        stuckX = Math.round(left + width / 2);
        stuckY = Math.round(top + height / 2);
        this.smallCursor.add("small_cursor_magnet");
        switch (hoverItem.tagName) {
            case "IMG":
                this.bigCursor.add("big_cursor_magnet"); break;
            case "LI":
                stuckX = e.clientX;
                this.bigCursor.add("big_cursor_magnet_a"); break;
            case "SPAN":
                this.bigCursor.add("big_cursor_magnet_a"); break;
            default:
        }
        isStuck = true;
    };
    handleMouseLeave = (e) => {
        isStuck = false;
        const hoverItem = e.currentTarget;
        this.smallCursor.remove("small_cursor_magnet");
        switch (hoverItem.tagName) {
            case "IMG":
                this.bigCursor.remove("big_cursor_magnet"); break;
            case "LI":
            case "SPAN":
                this.bigCursor.remove("big_cursor_magnet_a"); break;
            default:
        }
    };
}

function initHoversAnimate(cursors) {
    const CLs = [cursors.bigCursor.classList, cursors.smallCursor.classList]
    new cursorSlide(CLs);
    new cursorFull(CLs);
    new cursorMagnet(CLs);
};

window.addEventListener('load', () => {
    const smallCursor = document.querySelector(".small_cursor");
    const bigCursor = document.querySelector(".big_cursor");
    const cursors = { smallCursor, bigCursor };
    initP4DescSecScroll(cursors);
    initHoversAnimate(cursors);
})