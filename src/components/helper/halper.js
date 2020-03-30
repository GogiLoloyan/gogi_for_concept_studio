import animateScrollTo from "animated-scroll-to";

function* handleOnMouseWheel() {
  const page_2 = this.page_2.current.style;
  const video = this.video.current.style;
  const svg = this.video.current.firstElementChild.firstElementChild.style;
  const _html = document.documentElement;

  function style_video(duration, pos) {
    this.top = `${this.top === "50vh" ? 0 : 50}vh`;
    this.width = `${this.width === "50vw" ? 100 : 50}vw`;
    this.height = `${this.height === "50vh" ? 100 : 50}vh`;
    this.zIndex = 1;
    this.setProperty("--duration", `${duration}s`);
    this.position = pos || "absolute";
  }

  function style_svg(duration) {
    this.setProperty("--dataY", "0");
    this.setProperty("--play", "running");
    this.opacity = 1;
  }

  setTimeout(
    () => window.addEventListener("wheel", this.stepByStep, { once: true }),
    600
  );
  style_video.call(video, 0.7);
  yield;

  setTimeout(
    () => window.addEventListener("wheel", this.stepByStep, { once: true }),
    600
  );
  style_video.call(video, 1, "fixed");
  style_svg.call(svg);
  setTimeout(() => (_html.scrollTop = _html.clientHeight), 700);
  yield;

  setTimeout(
    () => window.addEventListener("wheel", this.stepByStep, { once: true }),
    400
  );
  video.top = "-110vh";
  video.setProperty("--duration", "1.5s");
  setTimeout(() => (video.display = "none"), 1000);
  page_2.setProperty("--play", "running");
  yield;

  setTimeout(
    () => _html.addEventListener("mousewheel", scrollVertically.bind(_html)),
    200
  );
}

//*********************************************************

let timeStamp = 0;
let left = 0;
function scrollHorizontally(delta, e) {
  e.preventDefault();

  if (timeStamp + 200 > e.timeStamp) {
    timeStamp = e.timeStamp;
    return;
  }

  timeStamp = e.timeStamp;
  const down = e.wheelDelta > 0;
  const slider = this.slider;
  const mouse = this.mouse;

  if (
    slider.scrollLeft + slider.clientWidth + 10 > slider.scrollWidth &&
    !down
  ) {
    document.documentElement.scrollTop += slider.clientHeight / 1.1;
  }

  if (slider.scrollLeft <= 0 && down) {
    document.documentElement.scrollTop -= slider.clientHeight / 1.1;
  }

  const del = delta * 8 || e.wheelDelta;
  slider.scrollLeft -= down ? -del : del;

  left += down ? (left === 0 ? 0 : -1) : left === 4 ? 0 : 1;

  if (left === 0) {
    setTimeout(() => {
      mouse.style.opacity = 1;
      mouse.style.transform = "scale(1)";
    }, 200);
  } else {
    mouse.style.opacity = 0;
    mouse.style.transform = "scale(0.5)";
  }
}

//*********************************************************

function scrollVertically(e) {
  if (timeStamp + 300 > e.timeStamp) {
    timeStamp = e.timeStamp;
  } else {
    timeStamp = e.timeStamp;

    const down = e.wheelDelta > 0;
    this.scrollTop += down ? -this.clientHeight : this.clientHeight;
  }
}

//*********************************************************

function scrollVertically2(e) {
  e.preventDefault();
  if (timeStamp + 200 > e.timeStamp) {
    timeStamp = e.timeStamp;
    return;
  }
  timeStamp = e.timeStamp;

  const down = e.wheelDelta > 0;
  this.scrollTop += down ? -this.offsetHeight : this.offsetHeight;

  if (this.scrollTop + this.offsetHeight + 5 > this.scrollHeight && !down) {
    document.documentElement.scrollTop += this.offsetHeight / 1.5;
  }
  if (this.scrollTop <= 0 && down) {
    document.documentElement.scrollTop -= this.offsetHeight / 1.5;
  }
}

//*****************************************

export {
  handleOnMouseWheel,
  scrollHorizontally,
  scrollVertically2,
  scrollVertically
};
