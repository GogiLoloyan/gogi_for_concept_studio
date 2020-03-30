function* handleOnMouseWheel() {

  const 
      page_2 = this.page_2.current.style,
      video = this.video.current.style,
      svg = this.video.current.firstElementChild.firstElementChild.style,
      _html = document.documentElement,
      timeF = () => {
        setTimeout(
          () => window.addEventListener("wheel", this.stepByStep, { once: true }),
          600
        );
      };

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

  timeF();
  style_video.call(video, 0.7);
  yield;

  timeF();
  style_video.call(video, 1, "fixed");
  style_svg.call(svg);
  setTimeout(() => (_html.scrollTop = _html.clientHeight), 700);
  yield;

  timeF();
  video.top = "-110vh";
  video.setProperty("--duration", "1.5s");
  page_2.setProperty("--play", "running");
  setTimeout(() => (video.display = "none"), 1000);
  yield;

  setTimeout(
    () => _html.addEventListener("mousewheel", scrollVertically.bind(_html)),
    200
  );
}


//***************************** For page-3 slider***************************

let slideCountFromStart = 0;
let timeStamp = 0;

function scrollHorizontally(delta, e) {
  e.preventDefault();
  if (timeStamp + 200 > e.timeStamp) {
    timeStamp = e.timeStamp;
    return;
  }
  timeStamp = e.timeStamp;

  const 
      mouse = this.mouse,
      down = e.wheelDelta > 0,
      del = delta * 8 || e.wheelDelta,
      _htmlTop = document.documentElement,
      {scrollLeft, scrollWidth, clientWidth, clientHeight } = this.slider,
      mouseStyle = (op, sc) => { mouse.style.opacity = op; mouse.style.transform = "scale("+sc+")"};


  if (scrollLeft + clientWidth + 10 > scrollWidth && !down)
    _htmlTop.scrollTop += clientHeight / 1.1;
  
  if (scrollLeft <= 0 && down) _htmlTop.scrollTop -= clientHeight / 1.1;
  
  if (down) {
    this.slider.scrollLeft += del;
    slideCountFromStart += slideCountFromStart === 0 ? 0 : -1;
  } else {
    this.slider.scrollLeft -= del;
    slideCountFromStart += slideCountFromStart === 4 ? 0 : 1;
  }
  

  if (slideCountFromStart === 0) setTimeout(() => mouseStyle(1, 1), 200);
  else mouseStyle(0, 0.5);
}


//***************************** For window ****************************

function scrollVertically(e) {
  if (timeStamp + 300 > e.timeStamp) {
    timeStamp = e.timeStamp;
  } else {
    timeStamp = e.timeStamp;

    const down = e.wheelDelta > 0;
    this.scrollTop += down ? -this.clientHeight : this.clientHeight;
  }
}


//******************************* For page 2 ****************************

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
