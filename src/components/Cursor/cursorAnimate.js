let clientX = -100;
let clientY = -100;

let lastX = 0;
let lastY = 0;
let isStuck = false;
let showCursor = false;
let group, stuckX, stuckY, fillOuterCursor;

function initCursorAnimate() {
    /* 
        requestAnimationFrame-ը վարյկյանում 60 անգամ
        a-ն ավելացնում է մինչև b-ին հասնելը՝ այսինքն
        big_cursor-ի դիրքը հավասարեցնում է small_cursor-ի դիրքին,
    */
    const smStyle = this.small_cursor.style;
    const bgStyle = this.big_cursor.style;
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


function initHoversAnimate() {
    const bigClass = this.big_cursor.classList;
    const smallClass = this.small_cursor.classList;

    // for all body images magnet animation
    const handleMouseEnter = e => {
        const hoverItem = e.currentTarget;
        const { top, left, width, height } = hoverItem.getBoundingClientRect();
        stuckX = Math.round(left + width / 2);
        stuckY = Math.round(top + height / 2);
        smallClass.add("small_cursor_magnet");
        if(e.currentTarget.tagName === "IMG"){
            bigClass.add("big_cursor_magnet");
        } else if(e.currentTarget.tagName === "A"){
            bigClass.add("big_cursor_magnet_a");
        }
        isStuck = true;
    };
    const handleMouseLeave = (e) => {
        isStuck = false;
        smallClass.remove("small_cursor_magnet");
        if(e.currentTarget.tagName === "IMG"){
            bigClass.remove("big_cursor_magnet");
        }
        else if(e.currentTarget.tagName === "A"){
            bigClass.remove("big_cursor_magnet_a");
        }
    };

    // const handleMouseEnterMainLinks = e => {
    //     const hoverItem = e.currentTarget;
    //     const { top, left, width, height } = hoverItem.getBoundingClientRect();
    //     stuckX = Math.round(left - width/10);
    //     stuckY = Math.round(top - height/5);
    //     smallClass.add("small_cursor_magnet");
    //     this.big_cursor.style.width = width*1.2 + "px";
    //     this.big_cursor.style.height = height*1.5 + "px";
    //     this.big_cursor.style.borderRadius = height + "px" 
    //     this.big_cursor.style.background = "#00e2ff";
    //     isStuck = true;
    // };

    // const handleMouseLeaveMainLinks = e => {
    //     isStuck = false;
    //     smallClass.remove("small_cursor_magnet");
    //     this.big_cursor.style.width = "20px";
    //     this.big_cursor.style.height = "20px";
    //     this.big_cursor.style.borderRadius = "50%"; 
    //     this.big_cursor.style.background = "initial";
    // }

    // for all header text animation
    const handleMouseEnterHeaders = () => {
        smallClass.add("enterheader");
        bigClass.add("hidden");
    };
    const handleMouseLeaveHeaders = () => {
        smallClass.remove("enterheader");
        bigClass.remove("hidden");
    };

    // for page 3 slider animation
    const handleMouseEnterSlider = () => {
        smallClass.add("enterSlider");
        bigClass.add("hidden");
    };
    const handleMouseLeaveSlider = () => {
        smallClass.remove("enterSlider");
        bigClass.remove("hidden");
    };
    const handleMouseOnSlider = e => {
        clientX = e.clientX;
        clientY = e.clientY;
    };

    // for all page 2 body images and nav's "a" tag magnet animation 
    document.querySelectorAll(".body_images img, .page2_nav a").forEach(item => {
        item.addEventListener("mousemove", handleMouseEnter);
        item.addEventListener("mouseleave", handleMouseLeave);
    });

    // for all header text and animation
    document.querySelectorAll(".page_1 h1, h2, .page_3 h1").forEach(item => {
        item.addEventListener("mousemove", handleMouseEnterHeaders);
        item.addEventListener("mouseleave", handleMouseLeaveHeaders);
    });

    // for page 3 slider animation
    document.querySelectorAll(".page_3 .slider").forEach(item => {
        item.addEventListener("mouseenter", handleMouseEnterSlider);
        item.addEventListener("mouseleave", handleMouseLeaveSlider);
        item.addEventListener("pointermove", handleMouseOnSlider);
        item.setAttribute('listener', 'true');
    });

    // document.querySelectorAll(".page_1 .menu_list a").forEach(item => {
    //     item.addEventListener("mousemove", handleMouseEnterMainLinks);
    //     item.addEventListener("mouseleave", handleMouseLeaveMainLinks);
    // });
};

export { initCursorAnimate, initHoversAnimate };