import { gsap } from "gsap";
import Draggabilly from 'draggabilly'
import { TweenMax } from "gsap/gsap-core";
import { Draggable } from "gsap/all";

gsap.registerPlugin(Draggable);

const MathUtils = {
    lineEq: (y2, y1, x2, x1, currentVal) => {
        var m = (y2 - y1) / (x2 - x1), b = y1 - m * x1;
        return m * currentVal + b;
    },
    lerp: (a, b, n) => (1 - n) * a + n * b,
};

let winWidth;
const calcWinWidth = () => winWidth = window.innerWidth;
calcWinWidth();
window.addEventListener('resize', calcWinWidth);

class Slide {
    constructor(el) {
        this.DOM = { el: el };
        this.DOM.offsetLeft = this.DOM.el.querySelector('.slide-inner').offsetLeft * 1.25;
        this.DOM.strip = this.DOM.el.querySelector('.slide');
        this.DOM.draggable = this.DOM.el.querySelector('.draggable');
        this.draggableWidth = this.DOM.draggable.offsetWidth;
        this.maxDrag = this.draggableWidth < winWidth ? 0 : this.draggableWidth - winWidth + this.DOM.offsetLeft;
        this.dragPosition = 0;
        this.draggie = new Draggabilly(this.DOM.draggable, { axis: 'x' });
        this.init();
        this.initEvents();
    }
    init() {
        this.position = { previous: 0, current: this.dragPosition };
        this.render = () => {
            this.position.previous = MathUtils.lerp(this.position.previous, this.position.current, 0.08);
            TweenMax.set(this.DOM.strip, { x: this.position.previous });
            requestAnimationFrame(this.render);
        };
        requestAnimationFrame(this.render);
    }
    initEvents() {
        this.onDragMove = () => {
            if (this.draggie.position.x >= 0) {
                this.dragPosition = MathUtils.lineEq(0.5 * winWidth, 0, winWidth, 0, this.draggie.position.x);
            }
            else if (this.draggie.position.x < -1 * this.maxDrag) {
                this.dragPosition = MathUtils.lineEq(0.5 * winWidth, 0, this.maxDrag + winWidth, this.maxDrag, this.draggie.position.x);
            } else {
                this.dragPosition = this.draggie.position.x;
            }
            this.position.current = this.dragPosition;
        };
        this.onDragEnd = () => {
            if (this.draggie.position.x > 0) {
                this.dragPosition = 0;
                this.draggie.setPosition(this.dragPosition, this.draggie.position.y);
            }
            else if (this.draggie.position.x < -1 * this.maxDrag) {
                this.dragPosition = -1 * this.maxDrag;
                this.draggie.setPosition(this.dragPosition, this.draggie.position.y);
            }
            this.position.current = this.dragPosition;
        };
        this.draggie.on('dragMove', this.onDragMove);
        this.draggie.on('pointerUp', this.onDragEnd);
        window.addEventListener('resize', () => {
            this.maxDrag = this.draggableWidth < winWidth ? 0 : this.draggableWidth - winWidth + this.DOM.offsetLeft;
            if (Math.abs(this.dragPosition) + winWidth > this.draggableWidth) {
                const diff = Math.abs(this.dragPosition) + winWidth - this.draggableWidth + this.DOM.offsetLeft;
                this.dragPosition = this.dragPosition + diff;
                this.draggie.setPosition(this.dragPosition, this.draggie.position.y);
            }
        });
    }
}

window.addEventListener('load', () => new Slide(document.querySelector('.page-3__slide-outer')))


