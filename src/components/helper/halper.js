import animateScrollTo from "animated-scroll-to";

function* handleOnMouseWheel() {
  const page_2 = this.page_2.current.style;
  const video = this.video.current.style;
  const svg = this.video.current.firstElementChild.style;
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

  setTimeout(() => window.addEventListener("wheel", this.stepByStep, { once: true }),400);
  style_video.call(video, 0.7);
  yield;

  setTimeout(() => window.addEventListener("wheel", this.stepByStep, { once: true }),400);
  style_video.call(video, 1, "fixed");
  style_svg.call(svg);
  setTimeout(() => (_html.scrollTop = _html.clientHeight), 700);
  yield;

  setTimeout(() => window.addEventListener("wheel", this.stepByStep, { once: true }),400);
  video.top = "-110vh";
  setTimeout(()=> video.display="none" ,400)
  page_2.setProperty(
    "--play",
    "running"
  );
  yield;

  setTimeout(() => _html.addEventListener("mousewheel",scrollVertically.bind(_html)),200);

  
  yield;
}

//*********************************************************

let timeStamp = 0;

function scrollHorizontally(delta, e) {
  e.preventDefault();

  if (timeStamp + 200 > e.timeStamp) {
    timeStamp = e.timeStamp;
    return;
  }
  timeStamp = e.timeStamp;
  const down = e.wheelDelta > 0;

  if (this.scrollLeft + this.clientWidth + 10 > this.scrollWidth && !down) {
    document.documentElement.scrollTop += this.clientHeight / 1.1;
  }
  if (this.scrollLeft <= 0 && down) {
    document.documentElement.scrollTop -= this.clientHeight / 1.1;
  }
  const del = delta || e.wheelDelta;
  this.scrollLeft -= down ? -del : del;
}

//*********************************************************

function scrollVertically(e) {
  if (timeStamp + 100 > e.timeStamp) {
    timeStamp = e.timeStamp;
  } else {
    timeStamp = e.timeStamp;

    const down = e.wheelDelta > 0;
    this.scrollTop += down ? -this.clientHeight : this.clientHeight;
    console.log(this.scrollTop);
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

export { handleOnMouseWheel, scrollHorizontally, scrollVertically2 };
