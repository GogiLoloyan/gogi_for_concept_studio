const cancelScrollEvent = e => {
    e.stopImmediatePropagation();
    e.preventDefault();
    e.returnValue = false;
    return false;
};  

const ScrollLockMixin = {
    scrollLock() {
        this.scrollElem = document.querySelector(".page-2 .description");
        this.scrollElem.addEventListener('wheel',e => this.onScrollHandler(e), false);
    },

    scrollRelease() {
        this.scrollElem.removeEventListener('wheel',e => this.onScrollHandler(e), false);
    },

    onScrollHandler(e) {
        const elem = this.scrollElem;
        const scrollTop = elem.scrollTop;
        const scrollHeight = elem.scrollHeight;
        const height = elem.clientHeight;
        const wheelDelta = e.deltaY;
        const isDeltaPositive = wheelDelta > 0;
        if (isDeltaPositive && wheelDelta > scrollHeight - height - scrollTop) {         
            elem.scrollTop = scrollHeight;
            return cancelScrollEvent(e);
        }
        else if (!isDeltaPositive && -wheelDelta > scrollTop) {
            elem.scrollTop = 0;
            return cancelScrollEvent(e);
        }
    }
};

export default ScrollLockMixin;