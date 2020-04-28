import mobileAndTabletcheck from "../../onReady/mobileAndTabletcheck";

class Cursor {
    constructor(cursor) {
        [this.bigCursor, this.smallCursor] = cursor;
        this.bgClass = this.bigCursor.classList;
        this.smClass = this.smallCursor.classList;
        this.bgStyle = this.bigCursor.style;
        this.smStyle = this.smallCursor.style;
        this.clientX = -100;
        this.clientY = -100;
        this.lastX = 0;
        this.lastY = 0;
        this.stuckX = null
        this.stuckY = null;
        this.isStuck = false;
        this.init();
        this.initHover();
    }
    init() {
        /* 
            requestAnimationFrame-ը վարյկյանում 60 անգամ a-ն ավելացնում է մինչև b-ին հասնելը՝ 
            այսինքն big cursor-ի դիրքը հավասարեցնում է small cursor-ի դիրքին,
        */
        document.addEventListener("mousemove", e => {
            this.clientX = e.clientX;
            this.clientY = e.clientY;
        });
        const lerp = (a, b, n) => {
            return (1 - n) * a + n * b;
        };
        const render = () => {
            if (!this.isStuck) {
                this.lastX = lerp(this.lastX, this.clientX, 0.18);
                this.lastY = lerp(this.lastY, this.clientY, 0.18);
                this.bgStyle.transform = `translate(${this.lastX - 7}px, ${this.lastY - 7}px)`;
            } else if (this.isStuck) {
                this.lastX = lerp(this.lastX, this.stuckX, 0.18);
                this.lastY = lerp(this.lastY, this.stuckY, 0.18);
                this.bgStyle.transform = `translate(${this.lastX}px, ${this.lastY}px)`;
            }
            this.smStyle.transform = `translate(${this.clientX}px, ${this.clientY}px)`;
            requestAnimationFrame(render);
        };
        requestAnimationFrame(render);
    }
    initHover() {
        this.animateFull();
        this.animateArrow();
        this.animateMagnet();
    }
    // when hover on header texts
    animateFull = () => {
        const handleMouseEnter = e => {
            this.bgClass.add("hidden");
            this.smClass.add("enterheader");
        };
        const handleMouseLeave = e => {
            this.bgClass.remove("hidden");
            this.smClass.remove("enterheader");
        };
        document.querySelectorAll("h1, h2, .inner-circle").forEach(item => {
            item.addEventListener("mouseenter", handleMouseEnter);
            item.addEventListener("mouseleave", handleMouseLeave);
        });
    }
    // when hover on slides
    animateArrow = () => {
        const handleMouseEnter = () => {
            this.bgClass.add("hidden");
            this.smClass.add("enterSlider");
        };
        const handleMouseLeave = () => {
            this.bgClass.remove("hidden");
            this.smClass.remove("enterSlider");
        };
        const handleMouseOn = (e) => {
            this.clientX = e.clientX;
            this.clientY = e.clientY;
        };
        document.querySelectorAll(".page-3__slide-outer .draggable").forEach(item => {
            item.addEventListener("mouseenter", handleMouseEnter);
            item.addEventListener("mouseleave", handleMouseLeave);
            item.addEventListener("pointermove", handleMouseOn);
        });
    }
    // when hover on body's images or any menu lists, style becomes like magnet (axis x and y, or only y)
    animateMagnet = () => {
        const handleMouseEnter = e => {
            const hoverItem = e.currentTarget;
            const { top, left, width, height } = hoverItem.getBoundingClientRect();
            this.stuckX = Math.round(left + width / 2);
            this.stuckY = Math.round(top + height / 2);
            this.smClass.add("small_cursor_magnet");
            switch (hoverItem.tagName) {
                case "IMG":
                    this.bgClass.add("big_cursor_magnet"); break;
                case "LI":
                    this.stuckX = e.clientX;
                    this.bgClass.add("big_cursor_magnet_a"); break;
                case "SPAN":
                    this.bgClass.add("big_cursor_magnet_a"); break;
                default:
            }
            this.isStuck = true;
        };
        const handleMouseLeave = e => {
            this.isStuck = false;
            const hoverItem = e.currentTarget;
            this.smClass.remove("small_cursor_magnet");
            switch (hoverItem.tagName) {
                case "IMG":
                    this.bgClass.remove("big_cursor_magnet"); break;
                case "LI":
                case "SPAN":
                    this.bgClass.remove("big_cursor_magnet_a"); break;
                default:
            }
        };
        document.querySelectorAll(".page-2 .body-images img, .page-2 .nav span, .page_1 .menu_list li, .page-6 .footer__menu .menu li").forEach(item => {
            item.addEventListener("mousemove", handleMouseEnter);
            item.addEventListener("mouseleave", handleMouseLeave);
        });
    }
}

!mobileAndTabletcheck() &&
    window.addEventListener('load', () => {
        const bigCursor = document.querySelector(".big_cursor");
        const smallCursor = document.querySelector(".small_cursor");
        new Cursor([bigCursor, smallCursor]);
    })

///////////////////////////////// or using this pattern istead class pattern
// let clientX = -100;
// let clientY = -100;
// let lastX = 0;
// let lastY = 0;
// let isStuck = false;
// let stuckX, stuckY;

// function initCursor(cursors) {
//     /* 
//         requestAnimationFrame-ը վարյկյանում 60 անգամ
//         a-ն ավելացնում է մինչև b-ին հասնելը՝ այսինքն
//         big_cursor-ի դիրքը հավասարեցնում է small_cursor-ի դիրքին,
//     */
//     const bg = cursors.bigCursor.style;
//     const sm = cursors.smallCursor.style;
//     const lerp = (a, b, n) => {
//         return (1 - n) * a + n * b;
//     };
//     document.addEventListener("mousemove", e => {
//         clientX = e.clientX;
//         clientY = e.clientY;
//     });
//     const render = () => {
//         if (!isStuck) {
//             lastX = lerp(lastX, clientX, 0.18);
//             lastY = lerp(lastY, clientY, 0.18);
//             bg.transform = `translate(${lastX - 7}px, ${lastY - 7}px)`;
//         } else if (isStuck) {
//             lastX = lerp(lastX, stuckX, 0.18);
//             lastY = lerp(lastY, stuckY, 0.18);
//             bg.transform = `translate(${lastX}px, ${lastY}px)`;
//         }
//         sm.transform = `translate(${clientX}px, ${clientY}px)`;
//         requestAnimationFrame(render);
//     };
//     requestAnimationFrame(render);
// };

// class cursorSlide {
//     constructor(cursors) {
//         [this.bigCursor, this.smallCursor] = cursors;
//         // forEach-y tox mna, karox e eli slidner avelanan
//         document.querySelectorAll(".page-3__slide-outer .draggable").forEach(item => {
//             item.addEventListener("mouseenter", this.handleMouseEnter);
//             item.addEventListener("mouseleave", this.handleMouseLeave);
//             item.addEventListener("pointermove", this.handleMouseOn);
//         });
//     }
//     handleMouseEnter = () => {
//         this.smallCursor.add("enterSlider");
//         this.bigCursor.add("hidden");
//     };
//     handleMouseLeave = () => {
//         this.smallCursor.remove("enterSlider");
//         this.bigCursor.remove("hidden");
//     };
//     handleMouseOn = (e) => {
//         clientX = e.clientX;
//         clientY = e.clientY;
//     };
// }

// class cursorFull {
//     constructor(cursors) {
//         [this.bigCursor, this.smallCursor] = cursors;
//         document.querySelectorAll("h1, h2, .inner-circle").forEach(item => {
//             item.addEventListener("mouseenter", this.handleMouseEnter);
//             item.addEventListener("mouseleave", this.handleMouseLeave);
//         });
//     }
//     handleMouseEnter = e => {
//         this.bigCursor.add("hidden");
//         this.smallCursor.add("enterheader");
//     };
//     handleMouseLeave = e => {
//         this.bigCursor.remove("hidden");
//         this.smallCursor.remove("enterheader");
//     };
// }

// class cursorMagnet {
//     constructor(cursors) {
//         [this.bigCursor, this.smallCursor] = cursors;
//         document.querySelectorAll(".page-2 .body-images img, .page-2 .nav span, .page_1 .menu_list li, .page-6 .footer__menu .menu li").forEach(item => {
//             item.addEventListener("mousemove", this.handleMouseEnter);
//             item.addEventListener("mouseleave", this.handleMouseLeave);
//         });
//     }
//     handleMouseEnter = e => {
//         const hoverItem = e.currentTarget;
//         const { top, left, width, height } = hoverItem.getBoundingClientRect();
//         stuckX = Math.round(left + width / 2);
//         stuckY = Math.round(top + height / 2); 
//         this.smallCursor.add("small_cursor_magnet");
//         switch (hoverItem.tagName) {
//             case "IMG":
//                 this.bigCursor.add("big_cursor_magnet"); break;
//             case "LI":
//                 stuckX = e.clientX;
//                 this.bigCursor.add("big_cursor_magnet_a"); break;
//             case "SPAN":
//                 this.bigCursor.add("big_cursor_magnet_a"); break;
//             default:
//         }
//         isStuck = true;
//     };
//     handleMouseLeave = (e) => {
//         isStuck = false;
//         const hoverItem = e.currentTarget;
//         this.smallCursor.remove("small_cursor_magnet");
//         switch (hoverItem.tagName) {
//             case "IMG":
//                 this.bigCursor.remove("big_cursor_magnet"); break;
//             case "LI":
//             case "SPAN":
//                 this.bigCursor.remove("big_cursor_magnet_a"); break;
//             default:
//         }
//     };
// }

// function initHoversAnimate(cursors) {
//     const CLs = [cursors.bigCursor.classList, cursors.smallCursor.classList]
//     new cursorSlide(CLs);
//     new cursorFull(CLs);
//     new cursorMagnet(CLs);
// };

// !mobileAndTabletcheck() &&
//     window.addEventListener('load', () => {
//         const bigCursor = document.querySelector(".big_cursor");
//         const smallCursor = document.querySelector(".small_cursor");
//         const cursor = {bigCursor, smallCursor};
//         initCursor(cursor);
//         initHoversAnimate(cursor);
//     })